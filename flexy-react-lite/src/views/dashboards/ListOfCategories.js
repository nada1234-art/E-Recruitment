import React, { useEffect, useState } from "react";
import CategoryService from "../../service/categoryService";

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
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

const ListOfCategories = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const [ListOfOffers, setListOfOffers] = useState("")
  const [categories, setCategories] = useState([])

  const cs = new CategoryService()

  useEffect(() => {
    return getAllCategoriesFromBack()
  }, [])

  const getAllCategoriesFromBack = (() => {
    //nous allons importer les services à partir de categoryService
    cs.GetAll().then((res) => {
      setCategories(res.data.data);
      console.log("*****list of categories***", res.data.data)

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
        cs.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            getAllCategoriesFromBack();
            Swal.fire("Deleted!", "Category deleted successfully.", "Success");
          }
        });
      }
    });

  }
  const navigate = useNavigate()
  const ViewDetailCategory = (id) => {
    navigate("/dashboards/dashboard1/ViewDetailCategory/" + id, { state: { id: id } })
  }
  const UpdateCategory = (id) => {
    navigate("/dashboards/dashboard1/UpdateCategory/" + id, { state: { id: id } })
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
              Description
            </Typography>
          </TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.name}>
            <TableCell>
              <ChecklistRtlOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "green",
                }}
                onClick={(e) => { ViewDetailCategory(category._id) }}
                size="small"
                label="View"
              ></ChecklistRtlOutlinedIcon>
              <ModeEditOutlineOutlinedIcon
                sx={{
                  pl: "4px",
                  pr: "4px",
                  color: "blue",
                }}
                onClick={(e) => {UpdateCategory(category._id)}}
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
                onClick={(e) => { DeleteFunction(category._id) }}>
                </DeleteForeverOutlinedIcon>
            </TableCell>
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
                  src={'http://localhost:3000/file/category/' + category.photo}
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
                {category.name}
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
                    {category.description}
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
            {/* with icons */}
            
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default ListOfCategories;