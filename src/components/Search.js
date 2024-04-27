import React, { useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <div style={{ padding: '1rem' }}>
            <input
                placeholder='Search'
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
            <button>Search</button>
        </div>
    )
}

export default Search