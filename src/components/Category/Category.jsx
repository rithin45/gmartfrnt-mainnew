import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import './Category.css'
import { Home } from '@mui/icons-material';
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Category = () => {
  var[inputs,setInputs]=useState({
    "name":'',
    "offer_price":'',
    "MRP":'',
    "category":'Fruits'
    
  })
  

  const inpuHandler =(event) =>{
    const{name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }

    const addHandler=() =>{
      console.log("Clicked")

      console.log(inputs)
      axios.post("http://localhost:3005/new",inputs)
      .then((response)=>{
        alert("Record Saved")
      })
      .catch(err=>console.log(err))
      
  }


  return (

    <div>
      <Topbar/>
      <Sidebar/>
    <div className="addproduct">
    <h2>Product Details</h2>  
      <TextField label="Product name" type="text" name="name"value={inputs.name} onChange={(event) => inpuHandler (event)}/> <br /><br />
      
      <TextField label="Offer Price" type="text" name="offer_price" value={inputs.offer_price} onChange={(event) => inpuHandler (event)}/><br /><br />
      <TextField label="MRP" type="text" name="MRP" value={inputs.MRP} onChange={(event) => inpuHandler (event)}/> <br /><br />

      <Select label="Product category"value={inputs.category}name="category"onChange={inpuHandler}>
        <MenuItem value="fruits">Fruits</MenuItem>
        <MenuItem value="vegetables" selected>Vegetables</MenuItem>
        <MenuItem value="others">Others</MenuItem>
      </Select>
      
      <button className="addproduct-btn" onClick={()=>{addHandler()}}>ADD</button>
    </div>
    </div>
  )
}

export default Category