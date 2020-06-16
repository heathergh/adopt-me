import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input type="text" id="location" value={location} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
