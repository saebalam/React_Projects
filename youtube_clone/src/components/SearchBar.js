import React,{useState} from 'react'
import {Paper, TextField, textField} from '@material-ui/core'

export const SearchBar = (props) => {
    const [searchTerm,setSearchSaerchTerm]=useState('')

    const handleChange = (e)=>{
        setSearchSaerchTerm(e.target.value)
    }
    const onKeyPress =(e)=>{
        if(e.key==='Enter'){
            props.onSubmit(searchTerm)
        }
    }
  return (
    <Paper elevation={6} style={{marginTop:'10px',marginBottom:"10px"}}>
        <TextField
            fullWidth
            label="search..."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={onKeyPress}
        />
    </Paper>
  )
}
