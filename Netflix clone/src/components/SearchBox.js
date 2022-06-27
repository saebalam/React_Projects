import React from 'react'

function SearchBox(props) {
  return (
    <div>
        <input 
        className='form-control' 
        type="text" 
        value={props.value} 
        name="" 
        id=""
        placeholder='Type to search...'
        onChange={(event)=>{props.setSearchValue(event.target.value)}} />
    </div>
  )
}

export default SearchBox