import React, { useState, useEffect } from 'react'
import offerService from '../../service/offerService';
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
function ViewDetailOfferCandidat() {
  const [id, setid] = useState();
  const [offer, setoffer] = useState([])
  const [position, setPosition] = useState("")
  const [deadline, setDeadline] = useState("")
  const [contract, setContract] = useState("")
  const [skills, setSkills] = useState("")
  const [ID_category, setIDCategory] = useState("")
  const os = new offerService()
  const location = useLocation();
  useEffect(() => {
    setid(location.state.id)
    console.log("the id is:", location.state.id);
    os.FindById(location.state.id).then((res) => {
      setoffer(res.data.data);
      setPosition(res.data.data.position)
      setDeadline(res.data.data.deadline)
      setContract(res.data.data.contract)
      setSkills(res.data.data.skills)
      setIDCategory(res.data.data.ID_category)
      // console.log("user", user);
      // console.log("email", email)
    }
    )
  }, [])
  const navigate = useNavigate()
  const ApplyFunction = (id) => {
    if (ID_category == "6479f4de8bc8838c5dcf84e4") { navigate("/dashboards/dashboard2/Quizz/" + id, { state: { id: id } }) }
    else if (ID_category == "6489a8aa6af4eb3cc2e79449") { navigate("/dashboards/dashboard2/QuizzDataScience/" + id, { state: { id: id } }) }

    // navigate("/dashboards/dashboard2/Quizz/" + id, { state: { id: id } })
  }
  // const goToForm = (id) => {
  //  navigate("/dashboards/dashboard2/FormOfApplications/" + id, { state: { id: id } }) 

  //   // navigate("/dashboards/dashboard2/Quizz/" + id, { state: { id: id } })
  // }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Offer details:
        <br></br>
        {offer.position}
      </h1>
      <div>
        <Table
          aria-label="simple table"
          sx={{
            mt: 3,
            whiteSpace: "nowrap",
          }}
        >
          {/* <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Customer Details
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead> */}
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
                }}></TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell>{offer._id}</TableCell> */}
              {/* <TableCell><Avatar src={"http://localhost:3000/storages/" + user.photo}></Avatar></TableCell> */}
              <TableCell>{offer.position}</TableCell>
              <TableCell>{offer.deadline}</TableCell>
              <TableCell>{offer.contract}</TableCell>
              <TableCell>{offer.skills}</TableCell>

            
              <TableCell>
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "blue",
                    color: "white",
                  }}

                  onClick={(e) => { ApplyFunction(offer._id) }}
                  size="small"
                  label="Apply"
                ></Chip>
                {/* <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "blue",
                    color: "white",
                  }}

                  onClick={(e)=>{goToForm(offer._id)}}
                  size="small"
                  label="Apply"
                ></Chip> */}
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
        <br></br>
      </div>
    </div>
  )
}
export default ViewDetailOfferCandidat