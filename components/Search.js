import React from 'react'

function Search() {
    return (
        <form autoComplete='off' >
        <div className="pt-2 relative mx-auto text-gray-600">
        
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search For a Country ...."/>
        
      </div>
      </form>
    )
}

export default Search
