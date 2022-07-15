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
        try {
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
                setListingId(result.data);            
        } catch (error) {
            console.log(error)
        }
    }
        
    const getInitiated = async () => {
        try {
            const response = listingId!==null && listingId.map(async (data) => {
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
            setInitiated(result);
        } catch (error) {
            console.log(error)
        }
    }
            
    const getMetadata = async () => { 
        try {
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
            setMetadata(result.map(({data}) => data.replace("ipfs://", "https://ipfs.io/ipfs/")));
        } catch (error) {
            console.log(error)
        }
    }    
    
    const getIPFS = async () => {
        const response = metadata.map(async (data) => {
            const getData = await fetch(data)
            const result = await getData.json();
            return result;           
        })
        const result = await Promise.all(response)
        setIPFS(result);
    }

    useEffect(async () => {
        getListing()
    }, [])

    useEffect(() => {
        getInitiated()
    }, [listingId])

    useEffect(() => {
        getMetadata()
    }, [initiated])

    useEffect(() => {
        getIPFS()
    }, [metadata])
    

    return (
        <div>
            <Grid container sx={{paddingLeft: 32, paddingBottom: 3}} >
                {ipfs.length!=0 && ipfs.map(({name, description, image}, i1)=>
                    {
                        return initiated.map(({tokenId, listingId, seller, price, nftAddress}, i2) =>{
                            if(i1===i2){
                                return(
                                    <div key={i2}>
                                        <Grid item xs={6} md={4} key={name}><ActionAreaCard name={name} description={description} image={image} tokenId={tokenId} address={address} seller={seller} listedPrice={price} listingId={listingId} nftAddress={nftAddress}/></Grid>
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