import React from 'react';
import { Grid, Divider } from '@mui/material';
import '../App.css';



const ShowNFT = ({...props}) => {

    return (
        <div>
            <Grid container>
                <Grid>
                    <h1>image</h1>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <ul className='ul'>
                    <li>name</li>
                    <li>description</li>
                </ul>
            </Grid>
        </div>
    )

}

export default ShowNFT;