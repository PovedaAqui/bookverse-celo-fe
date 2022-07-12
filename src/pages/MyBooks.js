import React, { useState, useEffect } from 'react';
import ActionAreaCard from '../components/ActionAreaCard';
import { Grid } from '@mui/material';

const MyBooks = ({address}) => {
  
    const [metadata, setMetadata] = useState([]);

    const URL = `http://localhost:3001/api/tatumapi`;
    const chain = 'CELO';
    const params = { address: address, chain: chain };

    useEffect(() => {
        fetch(URL,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            .then(response => response.json())
            .then(data => setMetadata(data.data.map(data2 => {
              return data2;
            })))
    }, [])

    //console.log(metadata);
    
    return (
      <div>
        <Grid container>
          {metadata!=undefined && metadata!=null && metadata.map(({metadata, contractAddress}) => {
            return metadata.map(({metadata, tokenId}, i) => {
              return (
                <div key={i}>
                  {metadata!==null && tokenId!==null && tokenId!==undefined && <Grid item xs={6} md={4} key={metadata.name}><ActionAreaCard name={metadata.name} description={metadata.description} image={metadata.image} address={address} tokenId={tokenId} contractAddress={contractAddress} listingId={(metadata.name + tokenId).replace(/ /g, '')}/></Grid>}
                </div>
              );
            });
          })}
        </Grid>
      </div>
    );
}

export default MyBooks;