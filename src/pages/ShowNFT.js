import React from 'react';
import { Grid, Divider, TextField, Button } from '@mui/material';
import '../App.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ShowNFT = () => {

    const [listing, setListing] = useState([]);
    const [price, setPrice] = useState('');
    const [tx, setTx] = useState([]);

    let location = useLocation();
    const {name} = location.state.name;
    const {description} = location.state.description;
    const {url} = location.state.image;
    const {tokenId} = location.state.tokenId;
    const {contractAddress} = location.state.contractAddress;
    const {address} = location.state.address;

    const addressTrim = (
        address.substring(0, 5) + '…' + address.substring(address.length - 4)
    );

    const URL = `http://localhost:3001/api/marketplace`;
    const params = { address: address, contractAddress: contractAddress, tokenId: tokenId, price: price, operation: 'sell' };

    const fetchListing = () => {
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
            .then(data => setListing(data.data))
    }

    useEffect(() => {
   
        const pendingTx = () => {

            const {signatureId} = listing;
    
            fetch(`http://localhost:3001/api/kms`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({listing: signatureId})
                })
                .then(response => response.json())
                .then(data => setTx(data.data))
        }
        pendingTx();
    }, [listing])

   useEffect(() => {
    const sendTx = async () => {
        const txConfig = JSON.parse(tx.serializedTransaction);
        txConfig.from = address;
        txConfig.nonce = undefined;
        txConfig.gasPrice = txConfig.gasPrice ? parseInt(txConfig.gasPrice).toString(16) : undefined;
        console.log(await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [txConfig],
          }));
    }
    sendTx();
   }, [tx])
   

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
                    <li>tokenId={tokenId}</li>
                    <li>owner={addressTrim}</li>
                    <li className='li'>{<TextField required id="outlined-basic" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                        value={price} onChange={(e) => setPrice(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}/>}</li>
                    <li><Button variant="contained" onClick={fetchListing}>Start listing</Button></li>
                </ul>
                </Grid>
            </Grid>
        </div>
    )

}

export default ShowNFT;