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
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import Checkout from './Checkout';
import Register from '../PublicPages/Register';
import LoginPage from '../PublicPages/LoginPage';
import Products from './Products';


function ResponsiveAppBar() {
  const { count } = useContext(CartContext);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const currentUser = localStorage.getItem('registeredUsers');
  const loggedInUsers = localStorage.getItem('loggedInUsers');

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('loggedInUsers');
  };

  const basket = () => {
    navigate('/checkout');
  };

  const register = () => {
    navigate('/register');
  };

  const login = () => {
    navigate('/login');
  };

// const openproduct=()=>{
//   <Products/>
// }
  const isUserLoggedIn = !!loggedInUsers;

  return (
    <AppBar style={{ backgroundColor: '#E58416' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
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
            {isUserLoggedIn && (
              <Button
                component={Link}
                to="/products"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Products
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Stack spacing={2} direction="row">
                  {loggedInUsers ? (
                    <Button
                      onClick={handleLogout}
                      style={{ backgroundColor: '#FF6B4C' }}
                      variant="contained"
                    >
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={login}
                        style={{ backgroundColor: '#3DEADF' }}
                        variant="contained"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={register}
                        style={{ backgroundColor: '#28ACCF' }}
                        variant="contained"
                      >
                        Register
                      </Button>
                    </>
                  )}
                  <Button
                    onClick={basket}
                    style={{ backgroundColor: '#FF6B4C' }}
                    variant="contained"
                  >
                    Basket: {count}
                  </Button>
                </Stack>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
