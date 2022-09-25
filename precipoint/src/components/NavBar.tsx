import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';



export default function NavBar() {

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
           PreciPoint Challenge By Yassine With love
          </Typography>
          
        </Toolbar>
      </AppBar>
    <br />
    <br />
    </>
  );
}