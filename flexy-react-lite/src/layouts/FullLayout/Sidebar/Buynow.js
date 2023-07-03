import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import sidebarBuynow from "../../../assets/images/backgrounds/sidebar-buynow.png";

const Buynow = () => {
  //const customizer = useSelector((state)=> state.CustomizerReducer);

  return (
    <Box pb={5} mt={5}>
      <Box
        p={2}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.light,
          borderRadius: "10px",
        }}
        style={{ position: "relative" }}
      >
        <img
          src={sidebarBuynow}
          alt={sidebarBuynow}
          style={{
            position: "absolute",
            right: "-10px",
            top: "-18px",
          }}
        />
     
      </Box>
    </Box>
  );
};

export default Buynow;
