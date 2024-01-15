import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Topbar from '../Adminpanel/Topbar'
import Sidebar from '../Adminpanel/Sidebar'
import './Category.css'

const Categoryedit = (props) => {
    var[inputs,setInputs]=useState(props.data)
    const inputHandler=(event)=>
    {

        const { name, value } =event.target
        setInputs((inputs) => ({ ...inputs,[name]: value }))
        console.log(inputs)
    }
    const addHandler=()=>{
        if(props.method==='put'){
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("Success")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
    }
    return (
        <div >
          <Topbar/>
          <Sidebar/>
          <h3>Edit Products</h3>
          <TextField label="Product name" type="text" name="name" value={inputs.name}onChange={inputHandler}/><br/><br/>
          <TextField label="Offer price" type="text" name="offer_price" value={inputs.offer_price}onChange={inputHandler}/><br/><br/>
          <TextField label="MRP" type="text" name="MRP" value={inputs.MRP}onChange={inputHandler}/><br/><br/>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        name="Category" value={inputs.category}
    onChange={inputHandler}    
       
      >
        <MenuItem value={"Fruits"}>Fruits</MenuItem>
        <MenuItem value={"Vegetables"}>Vegetables</MenuItem>
        <MenuItem value={"Others"}>Others</MenuItem>
        
      </Select>
    </FormControl><br/><br/><br/>
          <Button variant="contained"onClick={addHandler}>Update</Button>
        </div>
      )
  
}

export default Categoryedit
