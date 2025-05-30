// src/components/SearchBar.jsx
function SearchBar({ term, onSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTerm = e.target.elements.searchTerm.value;
    if (newTerm.trim()) {
      onSearchSubmit(newTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="field">
      <label className="label">Enter Search Term</label>
      <div className="control has-icons-right">
        <input
          className="input"
          type="text"
          name="searchTerm"
          defaultValue={term}
          placeholder="Search for images..."
        />
        <span className="icon is-small is-right">
          <button type="submit" className="button is-primary is-small">
            Search
          </button>
        </span>
      </div>
    </form>
  );
}

export default SearchBar;