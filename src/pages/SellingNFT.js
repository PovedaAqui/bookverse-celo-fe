import { Grid } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import ActionAreaCard from "../components/ActionAreaCard";

const SellingNFT = ({address}) => {

    const [initiated, setInitiated] = useState([]);
    const [listingId, setListingId] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [ipfs, setIPFS] = useState([]);
    const [fetchInitiated, setFetchInitiated] = useState(true);
    const [fetchMetadata, setFetchMetadata] = useState(true);
    const [fetchListing, setFetchListing] = useState(true);
    const [fetchIPFS, setFetchIPFS] = useState(true);
    

    const initialURL = `http://localhost:3001/api/getListing`;
    const getInitiatedURL = `http://localhost:3001/api/getInitiated`;
    const metadataURL = `http://localhost:3001/api/getMetadata`;

    useEffect(() => {
        const getListing = () =>{
            fetch(initialURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({type: 'INITIATED'})
                })
                .then(response => response.json())
                .then(data => data.data.length>0 && setListingId((data.data).map(data2 => {
                    return data2;
                })))
                .then(setFetchListing(false))
        }
        fetchListing && !listingId.length && getListing()
    }, [])

    //console.log(listingId);

    useEffect(() => {
        let arrayInitiated = [];
        const getInitiated = () => {
            listingId.map(data => {
                fetch(getInitiatedURL,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({id: data})
                    })
                .then(response => response.json())
                .then(data => arrayInitiated.push(data.data))
                .then(data2 => data2===listingId.length && setInitiated(arrayInitiated))
                .then(setFetchInitiated(false))
        })}
        fetchInitiated && listingId!==null && listingId.length>0 && initiated.length==0 && getInitiated()
    }, [listingId])

   //console.log(initiated);

    useEffect(() => {
            let arrayMetadata = [];
            const getMetadata = () => {    
                initiated.map(data => {
                    fetch(metadataURL,
                        {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({nftAddress: data.nftAddress, tokenId: data.tokenId})
                        })
                    .then(response => response.json())
                    .then(data => arrayMetadata.push(data.data))
                    .then(data2 => data2===initiated.length && arrayMetadata.map(data => data.data.replace("ipfs://", "https://ipfs.io/ipfs/")))
                    .then(data3 => data3.length===initiated.length && setMetadata(data3))
                    .then(setFetchMetadata(false))                  
                })}
                fetchMetadata && initiated!==null && initiated.length>=listingId.length && getMetadata()
    }, [initiated])
    
    //console.log(metadata);

    useEffect(() => {
        let arrayIPFS = [];
        const getIPFS = () => {    
            metadata.map(data => {
                fetch(data)
                .then(response => response.json())
                .then(data => arrayIPFS.push(data))
                .then(data4 => data4===metadata.length && setIPFS(arrayIPFS))
                .then(setFetchIPFS(false))                  
            })}
            fetchIPFS && metadata!==null && metadata.length>0 && getIPFS()
}, [metadata])

    //console.log(ipfs);

    return (
        <div>
            <Grid container>
                {ipfs.length===metadata.length && ipfs.map(({name, description, image}, i1)=>
                {
                    return initiated.map(({tokenId, seller, price}, i2)=>{
                        if(i1===i2){
                            return (
                                <div key={i2}>
                                    {<Grid item xs={6} md={4} key={name}><ActionAreaCard name={name} description={description} image={image} tokenId={tokenId} address={address} seller={seller} listedPrice={price} listingId={(name + tokenId).replace(/ /g, '')}/></Grid>}
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