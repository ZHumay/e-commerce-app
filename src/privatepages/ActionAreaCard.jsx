import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useQuery } from 'react-query';
import { axiosInstance } from '../network/axiosInstance';
import { BASE_API_URL } from '../env/api';

export default function ActionAreaCard() {
  const { data: products, isLoading } = useQuery('productsData', () =>
    axiosInstance.get('products')
  );


  const handleAddToCart = () => {
    
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={4}>
      {products?.data.map((product) => (
        <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%' }} style={{ margin: '30px' }}>
            <CardMedia
              component="img"
              image={product.image}
              style={{ width: '40%', height: 'auto', marginTop: '40px' }}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button
                  style={{ color: '#FF6B4C', border: '1px solid #FF6B4C', marginTop: '20px' }}
                  variant="outlined"
                  onClick={handleAddToCart}
                >
                  Add
                  <IconButton
                    color="primary"
                    style={{ color: '#FF6B4C', width: '22px', paddingLeft: '20px' }}
                    aria-label="add to shopping cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
