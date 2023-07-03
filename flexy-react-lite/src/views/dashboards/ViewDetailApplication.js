import React, { useState, useEffect } from 'react'
import ApplicationService from '../../service/applicationService';
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
function ViewDetailApplication() {
  const [id, setid] = useState();
  const [application, setApplication] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [resume, setResume] = useState("")
  const cs = new ApplicationService()
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id)
    console.log("the id is:", location.state.id);
    cs.FindById(location.state.id).then((res) => {
      console.log("cat is",res.data.data)
      setApplication(res.data.data);
      setName(res.data.data.name)
      setEmail(res.data.data.email)
      setPhone(res.data.data.phone)
      setResume(res.data.data.resume)

    }
    )
  }, [])
  return (
    <div>
      <h1>Application details:
        <br></br>
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
                }}>Name of candidate</TableCell>
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Email</TableCell>
              
              <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Phone</TableCell>
                <TableCell variant="h6"
                sx={{
                  fontWeight: "600",
                }}>Resume</TableCell>
            </TableRow>
            <TableRow>
             
              <TableCell>{application.name}</TableCell>
              <TableCell>{application.email}</TableCell>
              <TableCell>{application.phone}</TableCell>
              <TableCell>{application.resume}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  )
}
export default ViewDetailApplication