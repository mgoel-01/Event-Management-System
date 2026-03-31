const SectionBar = ({ setSelectedCategory, selectedCategory }) => {
  const categories = [
  "All",
  "Music",
  "Technology",
  "Food",
  "Business",
  "Workshop",
  "Adventure",
  "Entertainment", // NEW
  "Art",           // NEW
  "Sport"          // NEW
];

  return (
    <div className="sectionBar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={selectedCategory === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default SectionBar;