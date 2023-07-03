import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Link } from 'react-router-dom';
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined";

import PersonAdd from "@material-ui/icons/PersonAdd";
import Settings from "@material-ui/icons/Settings";
import Logout from "@material-ui/icons/Logout";
import logoicn from "../../../assets/images/khademni.png";


import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
  ListItemIcon,
  Chip
} from "@material-ui/core";

import userimg from "../../../assets/images/users/user.png";
import categoryimg from "../../../assets/images/users/category.png";
import offerimg from "../../../assets/images/users/offer.png";
import { Login } from "@material-ui/icons";
const HeaderCandidat = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // 4
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  // 5
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };

  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  const AddUserFunction = () => {
    navigate("/dashboards/dashboard1/AddUser")
  }
  const Login = () => {
    navigate("/dashboards/dashboard1/Login")
  }
  const AboutUs = () => {
    navigate("/dashboards/dashboard1/AboutUs")
  }
  
  return (
 
    <AppBar >
      <Toolbar
      style={{ 
         background: 'linear-gradient(90.04deg, #1b84a4 0.03%, #FFC0CB 99.96%)'
         }}>
      <img alt="Logo" src={logoicn} {...props} width={"20%"} />
      <Box alignContent="flex-end" display="flex" 
      style={{ 
        marginLeft: '55%',
         marginRight: '40px',
         }}>
       <Chip
      sx={{
        pl: "4px",
        pr: "4px",
        color: "blue",
      }}
      onClick={(e) => {  navigate("/")}}
      size="small"
      label="Login"
    ></Chip>
      <Chip
        sx={{
          pl: "4px",
          pr: "4px",
          color: "blue",
        }}
        onClick={(e) => { navigate("/AddUserCandidat")}}
        size="small"
        label="Register"
      ></Chip>
      <Chip
        sx={{
          pl: "4px",
          pr: "4px",
          color: "blue",
        }}
        onClick={(e) => { navigate("/dashboards/dashboard2/AboutUs")}}
        size="small"
        label="About us"
      ></Chip>
      </Box>
      <Box
          sx={{
            width: "1px",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "25px",
            ml: 1,
          }}
        ></Box>
      <Button
      aria-label="menu"
      color="inherit"
      aria-controls="profile-menu"
      aria-haspopup="true"
      onClick={handleClick4}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          src={userimg}
          alt={userimg}
          sx={{
            width: "30px",
            height: "30px",
          }}
        />
      </Box>
    </Button>
    <Menu
      id="profile-menu"
      anchorEl={anchorEl4}
      keepMounted
      open={Boolean(anchorEl4)}
      onClose={handleClose4}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      sx={{
        "& .MuiMenu-paper": {
          width: "250px",
          right: 0,
          top: "70px !important",
        },
      }}
    >
      <MenuItem onClick={handleClose4}>
        <Avatar
          sx={{
            width: "35px",
            height: "35px",
          }}
        />
        <Box
          sx={{
            ml: 2,
          }}
        >
          My account
        </Box>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleClose4}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={(e)=> navigate('/dashboards/dashboard2/Contact')}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Contact Us
      </MenuItem>
      <MenuItem onClick={(e)=>navigate('/')}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
      </Toolbar>
    </AppBar>

      
  );
};

export default HeaderCandidat;
