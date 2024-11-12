import React from 'react'
import Slider from "react-slick";
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';



const cardData = [
  { title: "Card 1", description: "How to work with prototype design with adobe xd featuring tools", image: "image1.png" },
  { title: "Card 2", description: "Create multiple artboard by using figma prototyping tools development", image: "image2.png" },
  { title: "Card 3", description: "Convert your web layout theming easily with sketch zeplin extension", image: "imagess.png" },
  { title: "Card 4", description: "How to work with prototype design with adobe xd featuring tools", image: "image1.png" },
  { title: "Card 5", description: "Create multiple artboard by using figma prototyping tools development", image: "image2.png" },
  { title: "Card 6", description: "Convert your web layout theming easily with sketch zeplin extension", image: "imagess.png" }


];
export default function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  return (
    <Box sx={{ maxWidth: "1401px", mx: 'auto',maxHeight:"595px",textAlign:'center',top:"150px", position:'relative'}}>
       <Box
              component="img"
              src="Title.png"
              alt="text"             
            />
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 400, minHeight:350, mx: 'auto', mb: 2 ,mt:5}}>
          <CardMedia
            component="img"
            height="140"
            image={card.image}
            alt={card.title}
            sx={{
              minHeight:200
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Slider>
  </Box>
  )
}
