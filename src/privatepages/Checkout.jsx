import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Checkout() {

  let navigate=useNavigate()

  const handleOrderClick = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      window.alert('Your order is complete');
    } else {
      window.alert('You must register');
      navigate("/register")
    }
  };



  const { items, removeFromCart,setItems } = useContext(CartContext);
  const [productCounts, setProductCounts] = useState([]);


  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  }, []);

  const handleIncrementCount = (productId) => {
    setProductCounts((prevState) => ({
      ...prevState,
      [productId]: (prevState[productId] || 0) + 1,
    }));
  };

  const handleDecrementCount = (productId) => {
    setProductCounts((prevState) => {
      const currentCount = prevState[productId] || 0;
      const updatedCount = currentCount - 1;
      const newCount = updatedCount >= 0 ? updatedCount : 0;
  
      return {
        ...prevState,
        [productId]: newCount,
      };
    });
  };

  const handleRemoveFromBasket = (productId) => {
    removeFromCart(productId);
    setProductCounts((prevState) => {
      const updatedState = { ...prevState };
      delete updatedState[productId];
      return updatedState;
    });
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      const count = productCounts[item.id] || 0;
      totalPrice += item.price * count;
    });
    return totalPrice;
  };

  const orderfunc=()=>{
    alert("You must register")
    navigate("/register")
  }

  return (
    <>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid key={item.id} item xs={6} sm={6} md={4} lg={3}>
            <Card sx={{ height: "100%" }} style={{ margin: "30px" }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                style={{ width: "40%", marginTop: "40px" }}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {`${item.price}$`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {item.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => handleIncrementCount(item.id)}
                  startIcon={<AddIcon />}
                >
                  {productCounts[item.id] || 0}
                </Button>
                <Button onClick={() => handleDecrementCount(item.id)} variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </CardActions>
              <CardActions>
                <Button
                  style={{ color: "red" }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveFromBasket(item.id)}
                >
                  Remove from basket
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
      <div style={{ fontWeight: "bold", fontSize: 40, marginTop: 30 }}>
        Total Price: {`${calculateTotalPrice()}$`}
        <Button onClick={handleOrderClick} style={{backgroundColor:"#FF6B4C",border:" 1px solid #FF6B4C",color:"white",marginLeft:"20px",marginTop:"-5px"}} variant="outlined">Order </Button>

      </div>
    </>
  );
}

export default Checkout;
