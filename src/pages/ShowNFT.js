import React from 'react';
import { Grid, Divider, TextField, Button } from '@mui/material';
import '../App.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ShowNFT = () => {

    const [listing, setListing] = useState([]);
    const [price, setPrice] = useState('');
    const [tx, setTx] = useState('');
    const [listed, setListed] = useState('');
    const [trigger, setTrigger] = useState(false);
    const [approve, setApprove] = useState(false);
    const [pending, SetPending] = useState([]);
    const [tx2, SetTx2] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [success, setSuccess] = useState(false);

    let location = useLocation();
    const {name} = location.state.name;
    const {description} = location.state.description;
    const {url} = location.state.image;
    const {tokenId} = location.state.tokenId;
    const {contractAddress} = location.state.contractAddress;
    const {address} = location.state.address;
    const {listingId} = location.state.listingId;

    const addressTrim = (
        address.substring(0, 5) + '…' + address.substring(address.length - 4)
    );

    //Initial checking

    const initialURL = `http://localhost:3001/api/getListing`;
    const initialParams = { chain: 'CELO', type: 'INITIATED' };

    useEffect(() => {
        fetch(initialURL,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({initialParams})
            })
            .then(response => response.json())
            .then(data => setListed(data.data))
    }, [])
    
    console.log(listed);
    console.log(listingId);
    //In this case contractAddress = nftAddress
    const URL = `http://localhost:3001/api/marketplace`;
    const params = { address: address, contractAddress: contractAddress, tokenId: tokenId, price: price, operation: 'sell', listingId: listingId };

    useEffect(() => {
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
    trigger && fetchListing();
    }, [trigger])

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
        listing.signatureId && pendingTx();
    }, [listing])


   useEffect(() => {
    const sendTx = async () => {
        const txConfig = JSON.parse(tx.serializedTransaction);
        txConfig.from = address;
        txConfig.nonce = undefined;
        txConfig.gasPrice = txConfig.gasPrice ? parseInt(txConfig.gasPrice).toString(16) : undefined;
        //console.log(txConfig);
        console.log(await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [txConfig],
          }));
    }
    tx.serializedTransaction && sendTx();
   }, [tx])

   const approveURL = `http://localhost:3001/api/approve`;
    const approveParams = { tokenId: tokenId };

    useEffect(() => {
        const sendApprove = () => {        
            fetch(approveURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(approveParams)
                })
                .then(response => response.json())
                .then(data => SetPending(data.data))
        }
    approve && sendApprove();
    }, [approve])

    useEffect(() => {
   
        const pendingTx2 = () => {

            const {signatureId} = pending;
    
            fetch(`http://localhost:3001/api/kms2`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({pending: signatureId})
                })
                .then(response => response.json())
                .then(data => SetTx2(data.data))
        }
        pending.signatureId && pendingTx2();
    }, [pending])

    console.log(tx2);

    useEffect(() => {
        const sendTx2 = async () => {
            const tx2Config = JSON.parse(tx2.serializedTransaction);
            tx2Config.from = address;
            tx2Config.nonce = undefined;
            tx2Config.gasPrice = tx2Config.gasPrice ? parseInt(tx2Config.gasPrice).toString(16) : undefined;
            //console.log(txConfig);
            console.log(await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [tx2Config],
              }));
        }
        tx2!==null && tx2.serializedTransaction && sendTx2();
       }, [tx2])


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
                    </ul>
                    {!listed.includes(listingId) && 
                        <ul className='ul'>
                            <li className='li'>{<TextField disabled id="outlined-disabled" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                                value={price}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>}</li>
                            <li><Button variant="contained" onClick={()=>setApprove(true)}>SELL</Button></li>
                            {console.log("option1")}
                        </ul> 
                    }
                    {!listed.includes(listingId) && tx2==("Already approved") &&
                        <ul className='ul'>
                            <li className='li'>{<TextField required id="outlined-basic" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                                value={price} onChange={(e) => setPrice(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>}</li>
                            <li><Button variant="contained" onClick={()=>setTrigger(true)}>CONFIRM</Button></li>
                            {/* {console.log("option2")} */}
                        </ul>                        
                    }
                    {listed.includes(listingId) &&
                        <ul className='ul'>
                            <li className='li'>{<TextField disabled id="outlined-disabled" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                                value={price}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>}</li>
                            <li><Button variant="contained" onClick={()=>console.log("CANCEL")}>CANCEL</Button></li>
                            {/* {console.log("option3")} */}
                        </ul> 
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default ShowNFT;