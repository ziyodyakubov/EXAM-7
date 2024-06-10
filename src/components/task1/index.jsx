import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react'
import { Button,CardContent,IconButton,Typography,AspectRatio,Card } from '@mui/joy';
import { BookmarkAdd } from '@mui/icons-material';
import { Box, Select, MenuItem, FormControl, InputLabel,Pagination,Stack } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Task1() {
  const [products,setProducts] = useState([])
  const [limit,setLimit] = useState(3)
 
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products?limit=${limit}`).then(response=>{
            setProducts(response.data)
        })
    },[limit])

    const handleClick = (id) =>{
        console.log(id)
    }


  return (
    <>
    <div className="mt-[25px] mb-[30px]">
      <Box sx={{ display: 'flex',justifyContent:"start", mb: 5 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="select-limit-label">Select limit</InputLabel>
          <Select
            labelId="select-limit-label"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            label="Select limit"
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div className="flex items-center flex-wrap gap-x-[40px] gap-y-[30px] mb-[50px]">
      {
        products.map((item)=>(
    <Link to={`/task1/${item.id}`}>
      <Card onClick={()=>handleClick(item.id)} sx={{ width: 295, height: 420 }}>
      <div>
        <Typography level="title-lg">{item.title.length > 20 ? item.title.substring(0,19) + "..." : item.title}</Typography>
        <Typography level="body-sm">Count: {item.rating.count}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="250px" className="px-[30px] py-[10px]" maxHeight="1000px">
        <img
          className='py-[1px] px-[10px] hover:scale-105 transition-all'
          src={item.image}
          srcSet={item.image}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${item.price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
         ADD
        </Button>
      </CardContent>
    </Card>
          </Link>
        ))
}
      </div>
      <div className="flex justify-center">
          <Stack spacing={2}>
      <Pagination count={5} variant="outlined" shape="rounded" />
    </Stack>
      </div>
      </div>
      </>
  );
}



