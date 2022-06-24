import React from 'react';
import { Grid, Divider, TextField, Button } from '@mui/material';
import '../App.css';
import { useLocation } from 'react-router-dom';


const ShowNFT = () => {

    let location = useLocation();
    const {name} = location.state.name;
    const {description} = location.state.description;
    const {url} = location.state.image;
    // const {name, description, image} = params;
    console.log(url);

    return (
        <div>
            <Grid container spacing={2} pl={40} pt={10}>
                <Grid pr={8} pt={5}>
                    <img style={{ width: "90%", height: "90%"}} src={url}/>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid pt={2}>
                <ul className='ul'>
                    <li>{name}</li>
                    <li>{description}</li>
                    <li className='li'>{<TextField id="outlined-basic" label="PRICE" variant="outlined" defaultValue="0.0" helperText="$CELO" type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}/>}</li>
                    <li><Button variant="contained" onClick={() => console.log('TEST')}>Start listing</Button></li>
                </ul>
                </Grid>
            </Grid>
        </div>
    )

}

export default ShowNFT;