//import React from "react";
import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Userservice from "../../service/userService";
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
function UpdateUser() {
  const location = useLocation()
  const [id, setid] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setdateOfBirth] = useState("")
  // const [country, setCountry] = useState("")
  // const [sexe, setSexe] = useState("")
  const [role, setRole] = useState("")
  const [photo, setphoto] = useState("")
  // const [ID_category, setIdCategory] = useState("")
  const onFileChange = event => { setphoto(event.target.files[0]) };
  const USSERV = new Userservice();
  const navigate = useNavigate();
  useEffect(() => {
    getUSERID(location.state.id);
    setid(location.state.id)
  }, []);
  //create the getAll functio from the Userservice
  const getUSERID = (id) => {
    USSERV.FindById(id).then((res) => {
      setName(res.data.data.name)
      setEmail(res.data.data.email)
      setPassword(res.data.data.password)
      setRole(res.data.data.role)
      setdateOfBirth(res.data.data.dateOfBirth)
      // setCountry(res.data.data.country)
      // setSexe(res.data.data.sexe)
      // setphoto(res.data.data.photo)
      // setIdCategory(res.data.data.ID_category)
    })
  }
  const UpdateUserFunction = () => {
    //  const data={"name":name,"email":email,"password":password,"role":role}
    // console.log("data is**:",data)
    console.log("update1")
    const formdata = new FormData();
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("dateOfBirth", dateOfBirth)
    // formdata.append("country", country)
    // formdata.append("sexe", sexe)
    // formdata.append("ID_Category", ID_category)
    formdata.append("photo", photo)
    formdata.append("role", role)
    console.log("formdata:", formdata)
    USSERV.Update(id, formdata).then((res) => {
      // USSERV.create(data).then(res => {
      console.log("okk edit of user ", res);
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
              Edit user
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
              label="dateOfBirth"
              variant="outlined"
              defaultValue="user1"
              fullWidth
              sx={{
                mb: 2,
              }}
              value={dateOfBirth} onChange={e => setdateOfBirth(e.target.value)}
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
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <label >Role</label>
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
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="offreur">Offreur</MenuItem>
                </Select>
              </FormControl>
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
              <Button color="primary" variant="contained" onClick={(e) => UpdateUserFunction(id)}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default UpdateUser