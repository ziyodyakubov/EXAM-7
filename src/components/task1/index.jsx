import React from 'react'
import { useEffect,useState} from 'react'
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import axios from 'axios';



export default function Task1() {

  const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`).then(response=>{
            setProducts(response.data)
        })
    },[])

    const handleClick = (id) =>{
      console.log("bosildi",id)
    }


  return (

      <div className="flex items-center flex-wrap gap-x-[40px] gap-y-[30px] mt-[25px] mb-[50px]">
      {
        products.map((item)=>(
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
          className='py-[1px] h-[10px] px-[10px] hover:scale-105 transition-all'
          
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
        ))
}
      </div>
  );
}



