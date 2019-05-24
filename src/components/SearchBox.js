import React from "react"

const SearchBox = (props) => {
    return (
        <div className="search-box text-center form-group mt-2" onSubmit={props.onSubmit}>
            <label className="d-inline text-warning" htmlFor="nameSearch">Search Names</label>
            <input 
              className="d-inline ml-3 rounded align-middle" 
              type="text" 
              value={props.value} 
              placeholder="Enter search term"
              onChange={props.onChange} />
            <input className="btn btn-outline-warning btn-sm ml-3 mt-1" type="submit" onClick={props.onSubmit} />
        </div>
    )
}

export default SearchBox