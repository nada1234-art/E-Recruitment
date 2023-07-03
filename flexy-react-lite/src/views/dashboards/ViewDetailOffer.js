import React, { useState, useEffect } from 'react'
import offerService from '../../service/offerService';
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
function ViewDetailOffer() {
  const [id, setid] = useState();
  const [offer, setoffer] = useState([])
  const [position, setPosition] = useState("")
  const [deadline, setDeadline] = useState("")
  const [contract, setContract] = useState("")
  const [skills, setSkills] = useState("")
  const [ID_category, setIDCategory] = useState("")
  const [ListOfApplications, setListOfApplications] = useState([])

  const os = new offerService()
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id)
    console.log("the id is:", location.state.id);
    os.FindById(location.state.id).then((res) => {
      setoffer(res.data.data);
      // setPosition(res.data.data.position)
      // setDeadline(res.data.data.deadline)
      // setContract(res.data.data.contract)
      // setSkills(res.data.data.skills)
      // setIDCategory(res.data.data.ID_category)
      console.log("liste desapplications", res.data.data.ListOfApplications)
      if (res.data.data.ListOfApplications) {
        setListOfApplications(res.data.data.ListOfApplications)
      }
    }
    )
  }, [])

  return (
    <div>
      <h1>Offer details:
        <br></br>
        {offer._id}
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
                }}>Position</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Deadline</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Contract</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Skills</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>ID_Category</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Applicants</TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>{offer._id}</TableCell> */}
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>{offer.position}</TableCell>
              <TableCell>{offer.deadline}</TableCell>
              <TableCell>{offer.contract}</TableCell>
              <TableCell>{offer.skills}</TableCell>
              <TableCell>{offer.ID_category}</TableCell>
              <TableCell>{ListOfApplications.map((lst, index) => (
                <li>{lst}</li>
              ))}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  )
}
export default ViewDetailOffer