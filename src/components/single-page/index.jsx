import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography}from '@mui/material';

export default function SinglePage() {
  const {id} = useParams()

  const [products,setProducts] = useState([])
 
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`).then(response=>{
            setProducts(response.data)
        })
    },[])

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>;
    }


  return (
    <div className="flex justify-center">
      <Card sx={{ maxWidth: 645, maxHeight: 800 }} className='mt-[25px]'>
      <CardMedia
       className='py-[45px] px-[200px]'
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography className='h-[60px]' variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className='mt-[50px] flex gap-[10px]'>
        <Button variant="contained">${product.price}</Button>
        <Button variant="contained" color="success">ADD</Button>
      </CardActions>
    </Card>
    </div>
  );
}

