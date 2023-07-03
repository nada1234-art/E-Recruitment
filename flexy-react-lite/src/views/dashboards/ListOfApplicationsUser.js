import React, { useEffect, useState } from "react";
import ApplicationService from "../../service/applicationService";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import { Link, useNavigate} from "react-router-dom";

import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import Swal from "sweetalert2"
import axios from 'axios'
import fileDownload from 'js-file-download'
const ListOfApplicationsUser = () => {
  const [state, setState] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [resume, setResume] = useState("")
  const [ID_offer, setIDoffer] = useState("")

  const [ListOfApplications, setListOfApplications] = useState("")
  const [applications, setApplications] = useState([])

  const as = new ApplicationService()

  useEffect(() => {

    return getAllApplicationsFromBack()
  }, [])

  const getAllApplicationsFromBack = (() => {
    //nous allons importer les services à partir de categoryService
    as.GetAll().then((res) => {
      setApplications(res.data.data);
      console.log("*****list of categories***", res.data.data)

    })
  })
  const handleClick = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
      .then((res) => {
        fileDownload(res.data, filename)
      })
  }

  const DeleteFunction = (id) => {
    console.log("ok supprimer", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You can't go back!",
      icon: "avertissement",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        as.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            // getAllOffersFromBack();
            // window.location.reload(true)
            window.location.reload()
            Swal.fire("Deleted!", "Application deleted successfully.", "Success");
          }
        });
      }
    });

  }
  const navigate = useNavigate()
  const ViewDetailApplication = (id) => {
    navigate("/dashboards/DashboardUser/ViewDetailApplication/" + id, { state: { id: id } })
  }



  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Actions
            </Typography>
          </TableCell>
         
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name of candidate
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Email
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Phone number
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Resume
            </Typography>
          </TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
        {applications.map((application) => (
          <TableRow key={application._id}>
            <TableCell>
              <ChecklistRtlOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "green",
                }}
                onClick={(e) => { ViewDetailApplication(application._id) }}
                size="small"
                label="View"
              ></ChecklistRtlOutlinedIcon>
              <DeleteForeverOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "red",
                }}
                size="small"
                label="Delete"
                onClick={(e) => { DeleteFunction(application._id) }}></DeleteForeverOutlinedIcon>
            </TableCell>
           
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {application.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {application.email}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {application.phone}
              </Typography>
            </TableCell>
            <TableCell>
              <button
                onClick={() => handleClick(`http://localhost:3000/file/application/${application.resume}`, application.resume)}
              >
                {application.resume}
              </button>
            </TableCell>


          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default ListOfApplicationsUser;