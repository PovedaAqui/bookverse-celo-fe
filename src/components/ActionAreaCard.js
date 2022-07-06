import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from './CircularProgress';
import { Link} from 'react-router-dom';

export default function ActionAreaCard({...props}) {

  const { name, description, image, tokenId, contractAddress, address, listingId} = props;
  let url = "";

  console.log(tokenId);

  if(image!==null && image.includes("ipfs://")) {
    url = image.replace("ipfs://", "https://ipfs.io/ipfs/")
  } else {
    return image;
  }

  const params = {'name': {name}, 'description': {description}, 'image': {url}, 'tokenId': {tokenId}, 'contractAddress': {contractAddress}, 'address': {address},
'listingId': {listingId}}


  return (
      <Card sx={{minWidth: 245, maxWidth: 345, mt: 3, ml: 3}}>
        <Link to='/shownft' state={params} style={{textDecoration: 'none'}}>
          <CardActionArea>
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
        </Link>
      </Card>
  );
}