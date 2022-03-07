import React from 'react'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/MicOutlined';
function Search() {
    return (
        <div className='search'>
            <div className='search_input'>
                <SearchIcon className='searchIcon' />
                <input />
                <MicIcon />
            </div>
        </div>
    )
}

export default Search