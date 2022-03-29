import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import MicIcon from '@mui/icons-material/MicOutlined'
import { Button } from '@material-ui/core'
function Search({ hideButtons = false }) {
  const [{}, despatch] = useStateValue()
  const [input, setInput] = useState('')
  const search = (e) => { 
    e.preventDefault()
    console.log('you hit the seaech button >>', input)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    })

    history.push('/search')
  }
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="searchIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.ariaValueMin)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search_button">
          <Button type="submit" onClick={Search} varient="outlined">
            Google search
          </Button>
          <Button varient="outlined">I am feeling lucky</Button>
        </div>
      ) : (
        <div className="search_button">
          <Button
            className="search_buttonHidden"
            type="submit"
            onClick={Search}
            varient="outlined"
          >
            Google search
          </Button>
          <Button varient="outlined">I am feeling lucky</Button>
        </div>
      )}
    </form>
  )
}

export default Search
