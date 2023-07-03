import React, { useState } from "react";
import {
  experimentalStyled,
  useMediaQuery,
  Container,
  Box,
} from "@material-ui/core";
import { Outlet } from "react-router-dom";
import HeaderCandidat from "./Header/HeaderCandidat";
import SideBarCandidat from "./Sidebar/SideBarUser";
import Footer from "./Footer/Footer";
import { TopbarHeight } from "../../assets/global/Theme-variable";

const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%",
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px",
  },
}));

const FullLayoutCandidat = () => {
  //
  const [isSidebarcandidatOpen, setSidebarcandidatOpen] = useState(true);
  const [isMobileSidebarcandidatOpen, setMobileSidebarcandidatOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <MainWrapper>
      <HeaderCandidat
        sx={{
          paddingLeft: isSidebarcandidatOpen && lgUp ? "265px" : "",
          backgroundColor: "#ffffff",
        }}
        toggleSidebarcandidat={() => setSidebarcandidatOpen(!isSidebarcandidatOpen)}
        toggleMobileSidebarcandidat={() => setMobileSidebarcandidatOpen(true)}
      />

      {/* <SideBarCandidat
        isSidebarcandidatOpen={isSidebarcandidatOpen}
        isMobileSidebarcandidatOpen={isMobileSidebarcandidatOpen}
        onSidebarcandidatClose={() => setMobileSidebarcandidatOpen(false)}
      /> */}

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            // paddingLeft: isSidebarcandidatOpen && lgUp ? "280px!important" : "",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayoutCandidat;
