import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React from 'react'

const Card = ({Reptile}) => {
  return (
    <Box>
      <Link href="http://localhost:3000/details" sx={{
        textDecoration:"none"
      }}>
      
         <CardMedia
        component="img"
        height="100%"
        image={Reptile}
        alt="reptile"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" align="center" component="div" color="red">
          PERFUMES
        </Typography>
        <Typography gutterBottom variant="h5" align="center" component="div" >
        Lizards are a widespread group of squamate reptiles
        </Typography>
        <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary" >
          it's womens love
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </Link>
    </Box>
  )
}

export default Card