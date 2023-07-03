//import React from "react";
import {React, useState,useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Categoryservice from "../../service/categoryService";
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
function UpdateCategory() {
 const location = useLocation()
  const [id, setid] = useState("")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const [ListOfOffers,setListOfOffers] = useState("")
 const onFileChange = event => { setPhoto(event.target.files[0]) };
  const CATSERV = new Categoryservice();
  const navigate = useNavigate();
  useEffect(() => {
    getCATID(location.state.id);
    setid(location.state.id)
  }, []);
  //create the getAll functio from the Userservice
  const getCATID =(id)=>{
    CATSERV.FindById(id).then((res)=>{
      setName(res.data.data.name)
      setDescription(res.data.data.description)
      setPhoto(res.data.data.photo)
      setListOfOffers(res.data.data.ListOfOffers)
    })
  }
  const UpdateCategory = ()=>{
  //  const data={"name":name,"email":email,"password":password,"role":role}
  // console.log("data is**:",data)
    console.log("update1")
   const formdata= new FormData();
   formdata.append("name",name)
   formdata.append("description",description)
   formdata.append("photo",photo)
   formdata.append("ListOfOffers",ListOfOffers)
   console.log("formdata:",formdata)
     CATSERV.Update(id,formdata).then((res) => {
       // USSERV.create(data).then(res => {
    console.log("okk edit of user ", res);
    navigate("/dashboards/dashboard1/ListOfCategories")
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
          Edit category
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
              label="Default Text"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={name} onChange={e => setName(e.target.value)}
            />
            <TextField
              id="description-text"
              label="Description"
              type="description"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={description} onChange={e => setDescription(e.target.value)}
            />
                
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
          <div>
           <div calss="col-md-3">
            Picture
           </div>
           <div class="col-md-7">
           <input type="file" class="form-control" onChange={onFileChange} />
                </div>
          </div>
                <br></br>
            <div>
              <Button color="primary" variant="contained" onClick={(e)=>UpdateCategory(id)}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default UpdateCategory