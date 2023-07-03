import React from "react";
import { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
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
import CategoryService from "../../service/categoryService";
function AddCategory (){
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [ListOfOffers, setListOfOffers] = useState("")
  const [photo, setphoto] = useState("")
  const onFileChange = event => { setphoto(event.target.files[0]) };
  const CATSERV = new CategoryService();
  const navigate = useNavigate();
  const AddCategoryFunction = ()=>{
    console.log("OK")
  const formdata = new FormData();
   formdata.append("name",name)
   formdata.append("description",description)
   formdata.append("photo",photo)
        CATSERV.create(formdata).then(res => {
    console.log("okk add of user ", res);
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
               Add Category
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
                  label=" Name"
                  variant="outlined"
                  defaultValue="category1"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={name} onChange={e => setName(e.target.value)}
                />
                <TextField
                  id="default-value"
                  label="Description"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={description} onChange={e => setDescription(e.target.value)}
                />
                  
                  {/* <TextField
                  id="listOfOffers"
                  label="List of offers"
                  variant="outlined"
                  defaultValue="user1"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={ListOfOffers} onChange={e => setListOfOffers(e.target.value)}
                /> */}
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
                  <Button color="primary" variant="contained" onClick={AddCategoryFunction}>
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      );
    };
export default AddCategory