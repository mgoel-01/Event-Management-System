import express from "express";
import Stripe from "stripe";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { title, price, quantity } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: title,
            },
            unit_amount: Math.round(price * 100), // convert to paise
          },
          quantity: quantity,
        },
      ],
      success_url: "https://event-management-system-eta-pink.vercel.app/success",
      cancel_url: "https://event-management-system-eta-pink.vercel.app/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;