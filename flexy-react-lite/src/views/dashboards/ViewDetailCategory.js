import React, { useState, useEffect } from 'react'
import categoryService from '../../service/categoryService';
import { useLocation } from 'react-router-dom'
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from "@material-ui/core";
function ViewDetailCategory() {
  const [id, setid] = useState();
  const [category, setcategory] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const [ListOfOffers, setListOfOffers] = useState([])
  const cs = new categoryService()
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id)
    console.log("the id is:", location.state.id);
    cs.FindById(location.state.id).then((res) => {
      console.log("cat is",res.data.data)
      setcategory(res.data.data);
      // setName(res.data.data.name)
      // setDescription(res.data.data.description)
      // setPhoto(res.data.data.photo)
      // setListOfOffers(res.data.data.ListOfOffers)
      console.log("liste des offres", res.data.data.ListOfOffers)
      if (res.data.data.ListOfOffers) {
        setListOfOffers(res.data.data.ListOfOffers)
      } 
    }
    )
  }, [])
  return (
    <div>
      <h1>Category details:
        <br></br>
        {category.name}
      </h1>
      <div>
        <Table
          aria-label="simple table"
          sx={{
            mt: 3,
            whiteSpace: "nowrap",
          }}
        >
          <TableBody>
            <TableRow>
              {/* <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}
              >ID</TableCell> */}
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Name</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Description</TableCell>
              {/* <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Photo</TableCell> */}
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>List of offers</TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>{category._id}</TableCell> */}
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              {/* <TableCell>{category.photo}</TableCell> */}
              <TableCell>{ListOfOffers.map((lst,index)=>(
                <li>{lst.position}</li>
              ))}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  )
}
export default ViewDetailCategory