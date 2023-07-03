import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import OfferService from "../../service/offerService";
function AddOfferUser() {
  const [position, setPosition] = useState("")
  const [deadline, setDeadline] = useState("")
  const [contract, setContract] = useState("")
  const [skills, setSkills] = useState("")
  const [ID_category, setIdCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [obj, setObj] = useState("")

  const OFSERV = new OfferService();

  const cs = new CategoryService()

  useEffect(() => {
    return getAllCategoriesFromBack()
  }, [])

  const getAllCategoriesFromBack = (() => {
    //nous allons importer les services à partir de categoryService
    cs.GetAll().then((res) => {
      setCategories(res.data.data);
      console.log("*****list of categories***", res.data.data)

    })
  })

  const navigate = useNavigate();
  const AddOfferFunction = () => {
    console.log("OK")
    const data = { "position": position, "deadline": deadline, "contract": contract, "skills": skills, "ID_category": obj }
    console.log("data in create offer is", data)
    //  console.log("deadline",deadline)
    //  console.log("contract",contract)
    //  console.log("skills",skills)
    //  console.log("ID_category",ID_category)
    //  console.log("position",position)


    const formdata = new FormData();
    formdata.append("position", position)
    formdata.append("deadline", deadline)
    formdata.append("contract", contract)
    formdata.append("skills", skills)
    formdata.append("ID_category", obj)


    OFSERV.create(data).then(res => {

      console.log("okk add of user ", res.data);
      navigate("/dashboards/dashboard1/ListOfOffers")
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
              Add Offer
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
              defaultValue="offer1"
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
              fullWidth
              sx={{
                mb: 2,
              }}
              value={skills} onChange={e => setSkills(e.target.value)}
            />
            {/* <TextField
                  id="ID_Category"
                  label="ID Category "
                  variant="outlined"
                  defaultValue="user1"
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  value={ID_category} onChange={e => setIdCategory(e.target.value)}
                /> */}
            <td>
              <label>Category :   </label>
              <select id="cars" onChange={(e) => setObj(e.target.value)} >
              {categories.map((cat) => (
                <option value={cat._id} key={cat._id} >
                  {cat.name}
                </option>
              ))}
              </select>
            </td>
           
            <br></br>
            <div>
              <Button color="primary" variant="contained" onClick={AddOfferFunction}>
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default AddOfferUser