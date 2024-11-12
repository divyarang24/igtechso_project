import React from "react";
import { Box, Grid, TextField, Container, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: { xs: "100%", md: "64.27vw" },
          background:
            "linear-gradient(106.43deg, #E0F5FA -1.4%, #FFFDE6 100.87%)",
          borderBottomRightRadius: { xs: "0%", md: "20%" },
          position: "absolute",
          zIndex: 0,
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: 5, md: 20 },
          ml: { xs: "auto", md: "260px" },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="text.png"
              alt="text"
              sx={{
                width: { xs: "100%", md: "690px" },
                height: { xs: "auto", md: "395px" },
              }}
            />

            <Box sx={{ mb: 3 ,mt:5,borderRadius:"10px"}}>
              <TextField
                variant="outlined"
                placeholder="Search Course Name"
                fullWidth
                sx={{
                  backgroundColor: 'white'
                }}
                
                InputProps={{
                  endAdornment: <SearchIcon sx={{ mr: 1 }} />,
                }}
              />
            </Box>

          
              <Box
              component="img"
              src="media.png"
              alt="text"
             
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ position: "relative", left: "20%" }}>
            <Box
              component="img"
              src="pattern.png"
              alt="Pattern"
              sx={{
                position: "absolute",
                top: { xs: 0, md: 0 },
                left: { xs: "50%", md: "60%" },
                transform: { xs: "translateX(-50%)", md: "none" },
                width: { xs: "150px", md: "302px" },
                height: { xs: "auto", md: "346.17px" },
                opacity: 0.5,
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", md: "710px" },
                // width: { xs: "100%", md: "575px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",

                top: { xs: 0, md: 10 },
                left: { xs: 0, md: 80 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 15,
                  left: "20%",
                  width: "70%",
                  height: "100%",
                  border: "4px solid yellow",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
              />

              <Box
                component="video"
                src="advertise.mp4" e
                controls
                autoPlay
                muted
                loop
                sx={{
                  position: "relative",
                  height: "100%",
                  // width: "100%",
                  borderRadius: "8px",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
