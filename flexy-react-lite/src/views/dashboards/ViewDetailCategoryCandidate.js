import React, { useState, useEffect } from 'react'
import categoryService from '../../service/categoryService';
import { useLocation, useNavigate } from 'react-router-dom'
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
import { Card } from 'antd';
function ViewDetailCategoryCandidate() {


  const [id, setid] = useState();
  const [category, setcategory] = useState([])
  const [name, setName] = useState("")
  const [ListOfOffers, setListOfOffers] = useState([])
  const cs = new categoryService()
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(() => {
    setid(location.state.id)
    console.log("the id is:", location.state.id);
    cs.FindById(location.state.id).then((res) => {
      setcategory(res.data.data);
      console.log("*******cat is***",res.data.data)
      // setName(res.data.data.name)
      console.log("liste des offres", res.data.data.ListOfOffers)
      if (res.data.data.ListOfOffers) {
        setListOfOffers(res.data.data.ListOfOffers)
      }

    }
    )
  }, [])

  const viewOfferFunction = (id) => {
    navigate("/dashboards/dashboard2/ViewDetailOfferCandidat/" + id, { state: { id: id } })
  }
  return(
    <div>
      <br></br>
      <br></br>
      <br></br>

      <h1>Category details: {category.name}
      

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
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Description</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>List of offers</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{category.description}</TableCell>
              <TableCell>
                {ListOfOffers.map((offer, index) => (
                  <Card key={offer}>
                    <Chip onClick={(e) => { viewOfferFunction(offer._id) }}
                     label={offer.position}>
                    
                    </Chip>
                    {/* <li onClick={(e) => { viewOfferFunction(offer._id) }}> {offer.position}</li> */}
                  </Card>
                ))}
              </TableCell>
           
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>

  )
}
export default ViewDetailCategoryCandidate