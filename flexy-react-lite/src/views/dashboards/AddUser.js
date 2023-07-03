import React from "react";
import { useState, useEffect } from "react";
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
import UserService from "../../service/userService";
function AddUser() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setdateOfBirth] = useState("")
  const [country, setCountry] = useState("")
  const [sexe, setSexe] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [photo, setphoto] = useState("")
  const onFileChange = event => { setphoto(event.target.files[0]) };
  const USSERV = new UserService();
  const navigate = useNavigate();
  const AddUserFunction = () => {
    console.log("*****************OK")
    const formdata = new FormData();
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("dateOfBirth", dateOfBirth)
    // formdata.append("country", country)
    // formdata.append("sexe", sexe)
    // formdata.append("phone", phone)
    formdata.append("photo", photo)
    formdata.append("role", role)
    console.log("formdata:", formdata)
    USSERV.create(formdata).then(res => {
      console.log("okk add of user ", res);
      navigate("/dashboards/dashboard1/ListOfUsers")
    })
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
              Add User
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
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={password} onChange={e => setPassword(e.target.value)}
            />
            <TextField
              id="default-value"
              label="dataOfBirth "
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={dateOfBirth} onChange={e => setdateOfBirth(e.target.value)}
            />
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
            <div>
              <Button color="primary" variant="contained" onClick={AddUserFunction}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default AddUser