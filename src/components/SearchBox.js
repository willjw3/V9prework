import React, { useState } from "react"
import { navigate } from "gatsby"


const SearchBox = (props) => {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let searchTerm = inputValue.toLowerCase()
        navigate(
            "/searches/",
            {
                state: { searchTerm }
            }
        )

        setInputValue("")
    }



    return (
        <div className="search-box text-center form-group mt-2" onSubmit={handleSubmit}>
            <label className="d-inline text-warning" htmlFor="nameSearch">Search Names</label>
            <input 
              className="d-inline ml-3 rounded align-middle" 
              type="text" 
              value={inputValue} 
              placeholder="Enter search term"
              onChange={handleChange} />
            <input className="btn btn-outline-warning btn-sm ml-3 mt-1" type="submit" onClick={handleSubmit} />
        </div>
    )
}

export default SearchBox