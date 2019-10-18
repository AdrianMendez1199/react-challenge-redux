import React from 'react';

const Search = () => (
    <div>
      <form>
        <div className="input-group mb-3">
          <input className="form_field"
            type="text"
            name="search"
          />
          <button type="submit" className="btn btn-info">Buscar</button>
        </div>
      </form>
      <div>
      </div>
    </div>

);

export default Search;