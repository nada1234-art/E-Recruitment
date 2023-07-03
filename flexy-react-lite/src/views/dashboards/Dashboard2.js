import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Card, CardContent, Typography, Button, Grid, Avatar, TableCell, Chip } from "@material-ui/core";
import {
  BlogCard,
  SalesOverview,
  ProductPerformance,
  DailyActivities,
  
} from "./dashboard1-components";

// import SearchBar from './components/SearchBar'
import CategoryService from "../../service/categoryService";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const Dashboard2 = () => {
  // 2
  const [nada, setNada] = useState([])
  
  const [query, setquery] = useState("")
  const [searchInput, setsearchInput] = useState("")
  useEffect(() => {
    getAllCategoriesFromBack()
  }, []);
  const cs = new CategoryService()
  const getAllCategoriesFromBack = (() => {
    //nous allons importer les services à partir de categoryService
    cs.GetAll().then((res) => {
      // setCategories(res.data.data);
      console.log("*****list of categories***", res.data.data);
      // setCategories(res.data.data);
      setNada(res.data.data)
      // console.log("*****after set categ***",nada);

    })
  })
const navigate = useNavigate()
  const ViewDetailCategory = (id) => {
    navigate("/dashboards/dashboard2/ViewDetailCategoryCandidate/" + id, { state: { id: id } })
  }
  const handleChange = (e) => { e.preventDefault(); setsearchInput(e.target.value); }

  return (
    
    <Box>
          <br></br>
          <br></br>
          <br></br>



      <div>
      
      <input placeholder='Search ..' onChange={event => setquery(event.target.value)}
      style={{ width: 500 ,
      height: 40,
      boxSizing: 30,
      borderRadius: 20,
      marginLeft: '30%',
      marginRight: '85%'
    }}
      freeSolo
      autoComplete
      autoHighlight></input>
    </div>
    <br></br>

      <Grid container spacing={0}>

        <Grid container>
          {nada.filter((post) => {
            if (query === "") { return post }
            else if (post.name.toLowerCase().includes(query.toLocaleLowerCase())) { return post }
          }).map((blog, index) => (
            <Grid
              key={index}
              item
              xs={12}
              lg={4}
              sx={{
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  p: 0,
                  width: "100%",
                }}
              >
                <img src={'http://localhost:3000/file/category/' + blog.photo} alt="img" width="100%" />

                <CardContent
                  sx={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "h4.fontSize",
                      fontWeight: "500",
                    }}
                  >
                    {blog.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      mt: 1,
                    }}
                  >
                    {blog.description}
                  </Typography>
                  <Button
                  
                    variant="contained"
                    sx={{
                      mt: "15px",
                    }}
                    onClick={(e) => { ViewDetailCategory(blog._id) }}
                  >
                    View offers
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard2;
