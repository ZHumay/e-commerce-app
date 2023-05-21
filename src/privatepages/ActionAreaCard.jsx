import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useQuery } from "react-query";
import { axiosInstance } from "../network/axiosInstance";
import { CartContext } from "../CartContext";

export default function ActionAreaCard() {
  const { data: products, isLoading } = useQuery("productsData", () =>
    axiosInstance.get("products")
  );
  const { items,setItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
  }, []);


  const isAdded = (productId) => {
    return items.some((item) => item.id === productId);
  };

  const handleRemoveFromBasket = (productId) => {
    removeFromCart(productId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={4}>
      {products?.data.map((product) => (
        <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
          {!isAdded(product.id) && (
            <Card sx={{ height: "100%" }} style={{ margin: "30px" }}>
              <CardMedia
                component="img"
                image={product.image}
                style={{ width: "40%", height: "auto", marginTop: "40px" }}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {`${product.price}$`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button
                    style={{
                      color: "#FF6B4C",
                      border: "1px solid #FF6B4C",
                      marginTop: "20px",
                    }}
                    variant="outlined"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                    <AddShoppingCartIcon style={{ marginLeft: "10px" }} />
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          )}
          {isAdded(product.id) && (
            <Card sx={{ height: "100%" }} style={{ margin: "30px" }}>
              <CardMedia
                component="img"
                image={product.image}
                style={{ width: "40%", height: "auto", marginTop: "40px" }}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {`${product.price}$`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button
                    style={{
                      color: "#FF6B4C",
                      border: "1px solid #FF6B4C",
                      marginTop: "20px",
                    }}
                    variant="outlined"
                    onClick={() => handleRemoveFromBasket(product.id)}
                  >
                    Remove from Basket
                    <RemoveShoppingCartIcon
                      style={{ marginLeft: "10px" }}
                    />
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
