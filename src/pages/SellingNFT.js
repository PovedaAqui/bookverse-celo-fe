import React from "react";
import { useState, useEffect } from "react";

const SellingNFT = () => {

    const [initiated, setInitiated] = useState([]);
    const [listingId, setListingId] = useState(null);
    

    const initialURL = `http://localhost:3001/api/getListing`;

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
        listingId!==null && getInitiated();
    }, [])

    const getInitiatedURL = `http://localhost:3001/api/getInitiated`;

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
    
    console.log(initiated);

    return (
        <div>
        </div>
    )
}

export default SellingNFT;