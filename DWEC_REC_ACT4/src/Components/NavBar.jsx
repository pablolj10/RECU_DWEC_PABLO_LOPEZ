import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };


  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleHome}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Home/>
          </IconButton>
          <Typography variant="h6" component="div">
            
            

            {/* <Button color="inherit" onClick={handleListado}>Listado</Button>
            <Button variant="contained" onClick={handleInfo}>Info</Button> */}

          </Typography>
          <Typography variant="h6" component="div">
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};