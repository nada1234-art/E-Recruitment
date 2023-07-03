import React, { useEffect, useState } from "react";
import OfferService from "../../service/offerService";
import { useNavigate } from "react-router-dom";
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
import JsPDF from 'jspdf';
import CategoryService from "../../service/categoryService";
const ListOfOffers = () => {
  const [position, setPosition] = useState("")
  const [deadline, setDeadline] = useState("")
  const [contract, setContract] = useState("")
  const [skills, setSkills] = useState("")
  const [ID_category, setIDCategory] = useState([])
  const [ListOfApplications, setListOfApplications]= useState([])
  const [offers, setOffers] = useState([])
  const [query, setquery] = useState("")
  const [query1, setquery1] = useState("")

  const [searchInput, setsearchInput] = useState("")
  const [categories, setCategories] = useState([])
 
  
const cs= new CategoryService()
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
  const os = new OfferService()

  useEffect(() => { return getAllOffersFromBack() }, [])

  const getAllOffersFromBack = (() => {
    //nous allons importer les services à partir de userService
    os.GetAll().then((res) => {
      console.log("listoffers", res.data.data)
      setOffers(res.data.data);
      if (res.data.data) {
        setIDCategory(res.data.data.ID_category)
      }
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
        os.remove(id).then((res) => {
          console.log(res.status);
          console.log("resposne", res);
          if (res.status === 200) {
            // getAllOffersFromBack();
            // window.location.reload(true)
            window.location.reload()
            Swal.fire("Deleted!", "Offer deleted successfully.", "Success");
          }
        });
      }
    });

  }
  const navigate = useNavigate()
  const ViewDetailOffer = (id) => {
    navigate("/dashboards/dashboard1/ViewDetailOffer/" + id, { state: { id: id } })
  }
  const UpdateOffer = (id) => {
    navigate("/dashboards/dashboard1/UpdateOffer/" + id, { state: { id: id } })
  }
  const DownloadFunction = () => {
    const report = new JsPDF('paysage', 'pt', 'a2')
    report.html(document.querySelector(('#report')).then(() => {
      report.save('report.pdf')
    }))

  }

  
  const handleChange = (e) => { e.preventDefault(); setsearchInput(e.target.value); }
  return (
    <div id="report">
      <div style={{ marginLeft: '50%', marginRight: '50px' }}> 
        <div><input placeholder='Search' onChange={event => setquery(event.target.value)}></input>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select id="cars" onChange={e => setquery1(e.target.value)} >
          {categories.map((car) => (
            <option> {car.name}</option>
          ))}
        </select>
        </div>
        
        
        </div>



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
                Position
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Deadline
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Contract
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Skills
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Category
              </Typography>
            </TableCell>

            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {offers
          
          .filter((post) => {
            if (query === "") { return post }
            else if (post.position.toLowerCase().includes(query.toLocaleLowerCase())) { return post }
          })

          .filter((post) => {
            if (query1 === "") { return post }
            else if (post.ID_category.name.toLowerCase().includes(query1.toLocaleLowerCase())) { return post }
            // (post.role={obj})
        })
            .map((offer) => (
              <TableRow key={offer._id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {offer.position}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {offer.deadline}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {offer.contract}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {offer.skills}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {offer.ID_category.name}
                  </Typography>
                </TableCell>


                {/* with icons */}
                <TableCell>
                  <ChecklistRtlOutlinedIcon
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      color: "green",
                    }}
                    onClick={(e) => { ViewDetailOffer(offer._id) }}
                    size="small"
                    label="View"
                  ></ChecklistRtlOutlinedIcon>
                  <ModeEditOutlineOutlinedIcon
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      color: "blue",
                    }}
                    onClick={(e) => { UpdateOffer(offer._id) }}
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
                    onClick={(e) => { DeleteFunction(offer._id) }}></DeleteForeverOutlinedIcon>
                </TableCell>

              </TableRow>
            ))}

        </TableBody>
      </Table>
      <br></br>

      <Chip
        sx={{
          pl: "4px",
          pr: "4px",
          // backgroundColor: "red",
          color: "green",
        }}
        onClick={(e) => { DownloadFunction() }}
        size="small"
        label="Download"
      ></Chip>


    </div>


  );
}
export default ListOfOffers;