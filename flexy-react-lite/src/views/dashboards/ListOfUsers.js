import React, { useEffect, useState } from "react";
import UserService from "../../service/userService";
import ViewsDetails from "./ViewsDetails";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
// import {
//   Badge,
//   Card,

//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   UncontrolledTooltip
// } from "reactstrap";

import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar
} from "@material-ui/core";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
function ListOfUsers() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  // const [sexe, setSexe] = useState("")
  // const [phone, setPhone] = useState("")
  // const [country, setCountry] = useState("")
  const [role, setRole] = useState("")
  const [photo, setPhoto] = useState("")
  // const [ID_category, setIDCategory] = useState("")
  const [users, setUsers] = useState([])


  const us = new UserService()

  useEffect(() => { return getAllUsersFromBack() }, [])

  const getAllUsersFromBack = (() => {
    //nous allons importer les services à partir de userService
    us.GetAll().then((res) => {
      setUsers(res.data.data);
      console.log("*****list ***", res.data.data)

    })
  })

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
        us.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            // getAllUsersFromBack();
            // window.location.reload(false)
            
            Swal.fire("Deleted!", "User deleted successfully.", "Success");
          }
        });
      }
    });

  }
//   const refreshPage = ()=>{
//     window.location.reload();
//  }
  const navigate = useNavigate()
  const ViewsDetails = (id) => {
    navigate("/dashboards/dashboard1/ViewsDetails/" + id, { state: { id: id } })
  }

  const UpdateUser = (id) => {
    navigate("/dashboards/dashboard1/UpdateUser/" + id, { state: { id: id } })
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
              Photo
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Email
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Date of birth
            </Typography>
          </TableCell>
          {/* <TableCell>
            <Typography color="textSecondary" variant="h6">
              Gender
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Phone number
            </Typography>
          </TableCell> */}
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Actions
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.name}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                <Avatar
                  sx={{
                    width: "35px",
                    height: "35px",
                  }}
                  src={'http://localhost:3000/file/user/' + user.photo}
                />
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {user.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {user.email}
                  </Typography>
                  {/* <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {user.}
                  </Typography> */}
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {user.dateOfBirth}
              </Typography>
            </TableCell>
            
            <TableCell>
              <ChecklistRtlOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "green",
                }}
                onClick={(e) => { ViewsDetails(user._id) }}
                size="small"
                label="View"
              ></ChecklistRtlOutlinedIcon>
              <ModeEditOutlineOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "blue",
                }}
                onClick={(e) => { UpdateUser(user._id) }}
                size="small"
                label="Update"
              ></ModeEditOutlineOutlinedIcon>
              <DeleteForeverOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "red",
                }}
                size="small"
                label="Delete"
                onClick={(e) => { DeleteFunction(user._id) }}
               ></DeleteForeverOutlinedIcon>
               
            </TableCell>
            
           
          </TableRow>
        ))}
      </TableBody>
      <br></br>
      <button style={{ marginLeft: '50%', marginRight: '50px' }} onClick={() => window.location.reload()}>Refresh</button>
    </Table>
    
  );

}

export default ListOfUsers;