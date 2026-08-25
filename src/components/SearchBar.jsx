function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
        aria-label="Search Projects"
      />
    </div>
  );
}

export default SearchBar;