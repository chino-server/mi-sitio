import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ImgMediaCard({img, name}) {

  const [counter, setCounter]= React.useState (0)
  const handlerUpCounter = ()=>{
    let stock = 5
    if (counter < stock){
      setCounter (counter +1)
    }
   
  }

  const handlerCounterDown = ()=>{
    if (counter > 0){
      setCounter (counter -1)
    }
   
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handlerUpCounter}>Comprar</Button>
        <p>{counter}</p>
        <Button size="small" onClick={handlerCounterDown}>Descomprar</Button>
      </CardActions>
    </Card>
  );
}
