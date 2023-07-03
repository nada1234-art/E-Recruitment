import React, { useEffect, useState } from "react";
import OfferService from "../../service/offerService";
import { useNavigate } from "react-router-dom";

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
import JsPDF from 'jspdf';
const ListOfOffersForCandidats = () => {
  const [position, setPosition] = useState("")
  const [deadline, setDeadline] = useState("")
  const [contract, setContract] = useState("")
  const [skills, setSkills] = useState("")
  const [ID_category, setIDCategory] = useState([])
  const [offers, setOffers] = useState([])

  const os = new OfferService()

  useEffect(() => { return getAllOffersFromBack() }, [])

  const getAllOffersFromBack = (() => {
    //nous allons importer les services à partir de userService
    os.GetAll().then((res) => {
      console.log("listoffers", res.data.data)
      setOffers(res.data.data);
      // setIDCategory(res.data.data.ID_category)
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
            getAllOffersFromBack();
            Swal.fire("Deleted!", "Offer deleted successfully.", "Success");
          }
        });
      }
    });

  }
  const navigate = useNavigate()
  const ViewDetailOffer = (id) => {
    navigate("/ViewDetailOffer/" + id, { state: { id: id } })
  }
  const UpdateOffer = (id) => {
    navigate("/UpdateOffer/" + id, { state: { id: id } })
  }
  const DownloadFunction = () => {
    const report = new JsPDF('paysage', 'pt', 'a2')
    report.html(document.querySelector(('#report')).then(() => {
      report.save('report.pdf')
    }))

  }
  const ApplyFunction = (id) => {
    navigate("/ListOfApplications/" + id, { state: { id: id } })
  }
  return (
    <div id="report">
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
                Id Category
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
          {offers.map((offer) => (
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



              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "green",
                    color: "#fff",
                  }}
                  onClick={(e) => { ViewDetailOffer(offer._id) }}
                  size="small"
                  label="View"
                ></Chip>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "blue",
                    color: "#fff",
                  }}
                  onClick={(e) => { UpdateOffer(offer._id) }}
                  size="small"
                  label="Update"
                ></Chip>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "red",
                    color: "#fff",
                  }}
                  onClick={(e) => { DeleteFunction(offer._id) }}
                  size="small"
                  label="Delete"
                ></Chip>
              </TableCell>
              <TableCell>
              <Chip
        sx={{
          pl: "4px",
          pr: "4px",
          // backgroundColor: "red",
          color: "green",
        }}
        onClick={(e) => { ApplyFunction() }}
        size="small"
        label="Apply"
      ></Chip>
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
export default ListOfOffersForCandidats;