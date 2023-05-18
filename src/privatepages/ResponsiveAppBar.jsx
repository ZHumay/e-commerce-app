import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import CartContext from '../CartContext';
import Products from './Products';
import Checkout from './Checkout';
const pages = ['Products',];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const {items}=useContext(CartContext)
  let navigate=useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    <Link to={Products}>Products</Link>
   {navigate("/products")} 
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const basket=()=>{
  <Link to={Checkout}>Basket</Link>
  {navigate("/checkout")}

}
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
          
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
       
              E-commerce
      
          </Typography>

    
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
          
                key={page}
                onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: 'white', display: 'block' }}
  
               >
                 {page}
               </Button>
           

            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Stack spacing={2} direction="row">
              <Button style={{backgroundColor:"#3DEADF"}} variant="contained">Login</Button>  

              <Button style={{backgroundColor:"#28ACCF"}} variant="contained">Register</Button>    
              <Button onClick={basket} style={{backgroundColor:"#FF6B4C"}} variant="contained">Basket:{items}</Button>    

              </Stack>
             </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;