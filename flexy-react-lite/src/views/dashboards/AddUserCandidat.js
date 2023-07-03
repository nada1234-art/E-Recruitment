import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"
import Alert from '@mui/material/Alert';

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
  Select,
  Table,
  TableBody,
  TableRow
} from "@material-ui/core";
import UserService from "../../service/userService";
import LoginService from "../../service/LoginService";

function AddUserCandidat() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setdateOfBirth] = useState("")
  const [role, setRole] = useState("")
  const [photo, setphoto] = useState("")
  const onFileChange = event => { setphoto(event.target.files[0]) };
  const USSERV = new UserService();
  const navigate = useNavigate();
  const AddUserFunction = (e) => {
    e.preventDefault()
    console.log("*****************OK")
    //const data={"name":name,"email":email,"password":password,"role":role,"dateOfBirth":dateOfBirth,"country":country,"sexe":sexe,"phone":phone}
    const formdata = new FormData();
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("dateOfBirth", dateOfBirth)
    formdata.append("photo", photo)
    formdata.append("role", role)
    console.log("formdata:", formdata)
    USSERV.create(formdata).then(res => {
      console.log("okk add of user ", res);
      // navigate("/dashboards/dashboard2/AboutUs")
      // alert("OK")
      navigate("/dashboards/dashboard2")
    })
  }


  
const LoginFunction= () => {
  navigate("/")
}
  return (
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={LoginFunction}>
              Sign In
            </span>
          </div>
          

          <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name} onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input type="text" className="form-control" placeholder="Last name" 
          value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password} onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Date of birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter your date of birth"
            value={dateOfBirth} onChange={e => setdateOfBirth(e.target.value)}
          />
        </div>
        <div className="mb-3">
              <div calss="col-md-3">
                Picture
              </div>
              <div class="col-md-7">
                <input type="file" class="form-control" onChange={onFileChange} />
              </div>
            </div>
        <div className="form-group mt-3">
          <Box
              sx={{
                marginLeft: "auto",
                mt: {
                  lg: 0,
                  xs: 2,
                },
              }}
            >
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
                <label >Why are you using Khademni ?</label>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  label="Role"
                >
                  <MenuItem value="role">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="user">To support someone else with their career</MenuItem>
                  <MenuItem value="candidat">To help plan my own career</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          
        
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e)=>AddUserFunction(e)} >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    
    
  )




};
export default AddUserCandidat