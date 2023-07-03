//import React from "react";
import {React, useState,useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Offerservice from "../../service/offerService";
import CategoryService from "../../service/categoryService"
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
function UpdateOffer() {
 const location = useLocation()
  const [id, setid] = useState("")
  const [position, setPosition] = useState("")
  const [deadline, setDeadline] = useState("")
  const [contract, setContract] = useState("")
  const [skills, setSkills] = useState("")
  const [ID_category,setIdCategory] = useState("")
  const [categories,setCategories]=useState([])
  const [obj,setObj]=useState("")//objet oxialaire pour stoker id de category et l'envoyer vers la case categorie
//  const onFileChange = event => { setPhoto(event.target.files[0]) };
  const CATSERV = new Offerservice();
  const navigate = useNavigate();
  useEffect(() => {
    getCATID(location.state.id);
    setid(location.state.id)
    getAllCategoriesFromBack()
  }, []);
  const cs = new CategoryService()
  const getAllCategoriesFromBack=(()=>{
    //nous allons importer les services à partir de categoryService
    cs.GetAll().then((res)=>{
      setCategories(res.data.data);
      console.log("*****list of categories***",res.data.data)
    
    } )
  })
  //create the getAll functio from the Userservice
  const getCATID =(id)=>{
    CATSERV.FindById(id).then((res)=>{
      setPosition(res.data.data.position)
      setDeadline(res.data.data.deadline)
      setContract(res.data.data.contract)
      setSkills(res.data.data.skills)
      setIdCategory(res.data.data.ID_category)

    })
  }
  const UpdateOffer = ()=>{
  //  const data={"position":position,"email":email,"password":password,"role":role}
  // console.log("data is**:",data)
    console.log("update1")
   const formdata= new FormData();
   formdata.append("position",position)
   formdata.append("deadline",deadline)
   formdata.append("contract",contract)
   formdata.append("skills",skills)   
   formdata.append("ID_category",obj)


   console.log("formdata:",formdata)
     CATSERV.update(id,formdata).then((res) => {
       // USSERV.create(data).then(res => {
    console.log("okk edit of offer ", res);
    navigate("/dashboards/dashboard1/ListOfOffers")
      } )
    }
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
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
          Edit Offer
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
              label="Position"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={position} onChange={e => setPosition(e.target.value)}
            /> 
            <TextField
              id="default-value"
              label="Deadline"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={deadline} onChange={e => setDeadline(e.target.value)}
            /> 
            <TextField
              id="default-value"
              label="Contract"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={contract} onChange={e => setContract(e.target.value)}
            /> 
            <TextField
              id="default-value"
              label="Skills"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{  
                mb: 2,
              }}
              value={skills} onChange={e => setSkills(e.target.value)}
            /> 
            {/* <TextField
              id="default-value"
              label="Id category"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={ID_category} onChange={e => setIdCategory (e.target.value)}
            />  */}
             <td><select id="cars" onChange={e =>setObj(e.target.value)} >
            {categories.map((car) => (
            <option value={car._id}  key={car._id} >
                {car.name}
            </option>
            ))}
        </select></td>
            <Box
            sx={{
              marginLeft: "auto",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
          </Box>
          <br></br>
      
                <br></br>
            <div>
              <Button color="primary" variant="contained" onClick={(e)=>UpdateOffer(id)}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default UpdateOffer