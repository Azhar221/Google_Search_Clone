import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/MicOutlined';
import { useNavigate } from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault();

        console.log('you hit', input);
        navigate('/search');
    }
    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon onClick={search} className='searchIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className='search_btn'>
                <button type="submit" onClick={search} variant='outlined'>Google Search</button>
                <button variant='outlined'>I'm Feeling Lucky</button>
            </div>
        </form>
    )
}

export default Search