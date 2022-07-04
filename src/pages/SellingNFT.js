import React from "react";
import { useState, useEffect } from "react";

const SellingNFT = () => {

    const [initiated, setInitiated] = useState([]);
    const [listingId, setListingId] = useState([]);
    const [metadata, setMetadata] = useState([]);
    const [fetchInitiated, setFetchInitiated] = useState(true);
    const [fetchMetadata, setFetchMetadata] = useState(true);
    const [fetchListing, setFetchListing] = useState(true);
    

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
                .then(data => setListingId((data.data).map(data2 => {
                    return data2;
                })))
                .then(setFetchListing(false))
        }
        fetchListing && getListing()
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
                .then(data2 => data2>=listingId.length && setInitiated(arrayInitiated))
                .then(setFetchInitiated(false))
        })}
        fetchInitiated && listingId!==null && listingId.length>0 && getInitiated()
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
                    .then(data2 => data2>=initiated.length && setMetadata(arrayMetadata))
                    .then(setFetchMetadata(false))                  
                })}
                fetchMetadata && initiated!==null && initiated.length>0 && getMetadata()
    }, [initiated])
    
    console.log(metadata);

    return (
        <div>
        </div>
    )
}

export default SellingNFT;