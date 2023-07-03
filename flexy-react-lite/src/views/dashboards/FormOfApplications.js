import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";
import ApplicationService from "../../service/applicationService";
import OfferService from "../../service/offerService";
function Apply() {
  const location = useLocation()
  const [id, setid] = useState("")
  const [position, setPosition] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [offer, setOffer] = useState([])
  const [phone, setPhone] = useState("")
  const [resume, setResume] = useState("")
  const [ID_offer, setIDoffer] = useState("")
  const [applications, setApplications] = useState([])
  const onFileChange1 = event => { setResume(event.target.files[0]) };
  const USSERV = new ApplicationService();
  const SCORETOTAL = localStorage.getItem('totalScore')
  const Apply1 = (e) => {
    e.preventDefault()
    console.log("*****************OK")
    const formdata = new FormData();
    // formdata.append("position", position)
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("phone", phone)
    formdata.append("resume", resume)
    formdata.append("ID_offer", id)
    console.log("formdata:", formdata)
    USSERV.create(formdata).then(res => {
      console.log("okk add of user ", res);
      alert("The Supplier will contact you in within 1 month, Thank you for your patience .")

    })
  }


  // const cs = new OfferService()
  // useEffect(() => {
  //   return getAllCategoriesFromBack()
  // }, [])

  // const getAllCategoriesFromBack = (() => {
  //   //nous allons importer les services à partir de categoryService
  //   cs.GetAll().then((res) => {
  //     setOffer(res.data.data);
  //     console.log("*****list of categories***", res.data.data)

  //   })
  // })
  const os = new ApplicationService()

  useEffect(() => { 
    setid(location.state.id)
    
    // return getAllOffersFromBack()
   }, [])

  // const getAllOffersFromBack = (() => {
  //   //nous allons importer les services à partir de userService
  //   os.GetAll().then((res) => {
  //     console.log("listoffers", res.data.data)
  //     setOffer(res.data.data);
  //     if (res.data.data) {
  //       setIDoffer(res.data.data.ID_offer)
  //     }
  //   })
  // })
  const navigate = useNavigate()

  // const os = new OfferService();
  // useEffect(() => {
  //   return getAllOffersFromBack()
  // }, [])

  // const getAllOffersFromBack = (() => {
  //   //nous allons importer les services à partir de categoryService
  //   os.GetAll().then((res) => {
  //     setOffer(res.data.data);
  //     console.log("*****list of offers***", res.data.data)

  //   })
  // })
  // const navigate = useNavigate();

  // useEffect(() => {

  //   console.log("****id offer is ****",location.state.id)
  //   console.log("****score is ****",SCORETOTAL)
  //   getOFFERBYID(location.state.id)

  //   setIDoffer(location.state.ID_offer)
  //   // setIDoffer(location.state.id)

  // }, []);

  // const getOFFERBYID =(id)=>{
  //   USSERV.FindById(id).then((res)=>{
  //     setPosition(res.data.position)
  //     console.log("position offer  is",res.data.position)
  //     //setPosition(res.data.data.position)

  //   })
  // }

  return (
    <div>
      <br></br>
      <br></br>

      KONJOUR
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Apply for Offer :
            </Typography>
          </Box>

        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="default-value"
              label=" Id position"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={id}
            />
            <TextField
              id="default-value"
              label=" Name"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={name} onChange={e => setName(e.target.value)}
            />
            <TextField
              id="email-text"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={email} onChange={e => setEmail(e.target.value)}
            />

            <TextField
              id="phone"
              label="phone "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={phone} onChange={e => setPhone(e.target.value)}
            />


            <br></br>
            <div>
              <div calss="col-md-3">
                Your Resume (CV)
              </div>
              <div class="col-md-7">
                <input type="file" class="form-control" onChange={onFileChange1} />
              </div>
            </div>
            <br></br>

            <br></br>

          </form>
        </CardContent>
      </Card>
      <div>
        <Button color="primary" variant="contained"
          onClick={(e) => Apply1(e)}
        //  alert="You application is send"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Apply