import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CircularProgress from './CircularProgress';

export default function ActionAreaCard({...props}) {

  const { name, description, image } = props;
  let url = "";

  if(image!==null) {
    url = image.replace("ipfs://", "https://ipfs.io/ipfs/")
  } else {
    return image;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>console.log("TEST")}>
        {url===null ? <CircularProgress/> : <CardMedia
          component="img"
          height="200"
          image={url}
          alt="jpeg"
        />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Sell
        </Button>
      </CardActions>
    </Card>
  );
}