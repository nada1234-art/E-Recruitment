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
// import CategoryService from "../../service/categoryService";
import UserService from "../../service/userService";
function Contact (){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")
  
  const CATSERV = new UserService();
  const navigate = useNavigate();
  
  const sendMail=()=>{
    const data={"name":name,"email":email,"subject":subject,"description":description}
    CATSERV.sendMail(data).then(res => {
    console.log("okk add of user ", res);
    navigate("/dashboards/dashboard2")
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
               Send mail
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
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={name} onChange={e => setName(e.target.value)}
                />
              <TextField
                  id="default-value"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={email} onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  id="default-value"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={subject} onChange={e => setSubject(e.target.value)}
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
                  
                 
              <br></br>
                    <br></br>
                <div>
                  <Button color="primary" variant="contained" onClick={sendMail}>
                    Send
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )
                }
export default Contact