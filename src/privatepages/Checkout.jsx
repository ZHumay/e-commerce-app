import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Checkout() {
  const { items } = useContext(CartContext);

  return (
    <>
      <div>Checkout</div>

      {items.map((item) => (
        <div key={item.title}>
       <Card sx={{ maxWidth: 345 }} style={{border:"1px solid black"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        style={{ width: '40%',height:"200px", margin: '40px',padding:"40px" }}

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.category}
        </Typography>
      </CardContent>

    </Card>

        </div>
      ))}
    </>
  );
}

export default Checkout;
