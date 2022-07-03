import React from "react";
import { useState, useEffect } from "react";

const SellingNFT = () => {

    const [initiated, setInitiated] = useState([]);
    const [listingId, setListingId] = useState([]);
    const [metadata, setMetadata] = useState([]);
    

    const initialURL = `http://localhost:3001/api/getListing`;
    const getInitiatedURL = `http://localhost:3001/api/getInitiated`;
    const metadataURL = `http://localhost:3001/api/getMetadata`;

    useEffect(() => {
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
    }, [])

    //console.log(listingId);

    useEffect(() => {
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
                .then(data => setInitiated(data.data))
        })}
        listingId!==null && listingId.length>0 && getInitiated()
    }, [listingId])

    console.log(initiated);

    useEffect(() => {
       
            const {nftAddress, tokenId} = initiated;
            const getMetadata = () => {    
                fetch(metadataURL,
                    {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({nftAddress: nftAddress, tokenId: tokenId})
                    })
                .then(response => response.json())
                .then(data => setMetadata(data.data))
            }
            //tokenId!==undefined && nftAddress!==undefined && getMetadata();             
    }, [initiated])
    
    //console.log(metadata);

    return (
        <div>
        </div>
    )
}

export default SellingNFT;