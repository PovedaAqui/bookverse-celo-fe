import { Grid } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import ActionAreaCard from "../components/ActionAreaCard";

const SellingNFT = ({address}) => {

    const [listingId, setListingId] = useState([]);
    const [initiated, setInitiated] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [ipfs, setIPFS] = useState([]);

    const initialURL = `http://localhost:3001/api/getListing`;
    const getInitiatedURL = `http://localhost:3001/api/getInitiated`;
    const metadataURL = `http://localhost:3001/api/getMetadata`;
        
    const getListing = async () => {
        const response = await fetch(initialURL,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({type: 'INITIATED'})
            })
            const result = await response.json();
            return result.data;
    }
        
    const getInitiated = async () => {
        const response = listingId.map(async (data) => {
            const getInit = await fetch(getInitiatedURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id: data})
                })
                const result = await getInit.json();
                return result.data;
        })
        const result = await Promise.all(response);
        return result;
    }
            
    const getMetadata = async () => { 
        const response = initiated.map(async ({nftAddress, tokenId}) => {
            const getMeta = await fetch(metadataURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({nftAddress: nftAddress, tokenId: tokenId})
                })
                const result = await getMeta.json();
                return result.data;
        })
        const result = await Promise.all(response)
        return result.map(({data}) => data.replace("ipfs://", "https://ipfs.io/ipfs/"));
    }    
    
    const getIPFS = async () => {
        const response = metadata.map(async (data) => {
            const getData = await fetch(data)
            const result = await getData.json();
            return result;           
        })
        const result = await Promise.all(response)
        return result;
    }

    useEffect(() => {
        Promise.all([getListing(), getInitiated(), getMetadata(), getIPFS()]).then(result => {
            setListingId(result[0])
            setInitiated(result[1])
            setMetadata(result[2])
            setIPFS(result[3])
        });
    }, [])

    return (
        <div>
            <Grid container>
                {ipfs.length!=0 && ipfs.map(({name, description, image}, i1)=>
                    {
                        return initiated.map(({tokenId, listingId, seller, price}, i2) =>{
                            if(i1===i2){
                                return(
                                    <div key={i2}>
                                        <Grid item xs={6} md={4} key={name}><ActionAreaCard name={name} description={description} image={image} tokenId={tokenId} address={address} seller={seller} listedPrice={price} listingId={listingId}/></Grid>
                                    </div>
                                )
                                    
                            }
                        })                 
                    })}
            </Grid>
        </div>
    )
}

export default SellingNFT;