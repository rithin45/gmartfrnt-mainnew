import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Categoryedit from './Categoryedit';
import './Categoryview.css'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';

const Categorydetails = () => {
  var [category, setCategory] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValues = (row) => {
    setSelected(row)
    setUpdate(true)
  }
  var result =
    <div className='bb'>
      <Topbar/>
      <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Offer Price</TableCell>
              <TableCell>MRP</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  <TableCell>
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.offer_price}</TableCell>
                  <TableCell>{row.MRP}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell><EditIcon onClick={() => updateValues(row)} /></TableCell>

                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  if (update)
    result = <Categoryedit data={selected} method='put' />
  return (result)
}

export default Categorydetails
