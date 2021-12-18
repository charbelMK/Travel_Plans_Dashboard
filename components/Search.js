import { SearchIcon } from '@heroicons/react/outline';
import React from 'react'

function handleOnSubmitSearch(e) {
  e.preventDefault();

  const { currentTarget = {}} = e;
  const fields = Array.from(currentTarget?.elements);
  const fieldQuery = fields.find(field => field.name === 'query');

  const value = fieldQuery.value || '';
  const endpoint = `https://restcountries.com/v2/name/?name=${value}`;

  updatePage({
    current: endpoint
  });
}

function Search() {
    return (
        <form autoComplete='off' >
        <div className="pt-2 relative mx-auto text-gray-600">
        {/*<SearchIcon className="h-3 inline rounded-full cursor-pointer"/>*/}
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search For a Country ...."
          onSubmit={handleOnSubmitSearch}/>
        
      </div>
      </form>
    )
}

export default Search
