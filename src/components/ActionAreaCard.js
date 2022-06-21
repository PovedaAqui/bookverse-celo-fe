import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from './CircularProgress';
import Grid from '@mui/material/Grid';

export default function ActionAreaCard({...props}) {

  const { name, description, image } = props;
  let url = "";

  if(image!==null) {
    url = image.replace("ipfs://", "https://ipfs.io/ipfs/")
  } else {
    return image;
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Card sx={{ maxWidth: 345 , mt: 3}}>
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
        </Card>
      </Grid>
    </Grid>
  );
}