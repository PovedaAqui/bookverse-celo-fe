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
    const [pending, setPending] = useState([]);
    const [tx2, setTx2] = useState(null);
    const [approved, setApproved] = useState(null);
    const [trigger2, setTrigger2] = useState(false);
    const [cancel, setCancel] = useState([]);
    const [tx3, setTx3] = useState(null);
    const [state, setState] = useState([]);
    const [trigger3, setTrigger3] = useState(false);
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
    const {seller} = location.state.seller;
    let {listedPrice} = location.state.listedPrice;

    const addressTrim = (
        address.substring(0, 5) + '…' + address.substring(address.length - 4)
    );

    //Initial checking

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
            .then(data => setListed(data.data))
    }, [])

    //console.log(listed);

    useEffect(() => {
        fetch(initialURL,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({type: 'CANCELLED'})
            })
            .then(response => response.json())
            .then(data => setState(data.data))
    }, [listed])
    
    //Sell operation
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
        console.log(await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [txConfig],
          }));
    }
    tx.serializedTransaction && sendTx();
   }, [tx])

   //Approval operation

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
                .then(data => setPending(data.data))
        }
    approve && sendApprove();
    }, [approve])

    useEffect(() => {
   
        const pendingTx2 = () => {

            const {signatureId} = pending;
    
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
                .then(data => setTx2(data.data))
        }
        pending.signatureId && pendingTx2();
    }, [pending])

    useEffect(() => {
        const sendTx2 = async () => {
            const tx2Config = JSON.parse(tx2.serializedTransaction);
            tx2Config.from = address;
            tx2Config.nonce = undefined;
            tx2Config.gasPrice = tx2Config.gasPrice ? parseInt(tx2Config.gasPrice).toString(16) : undefined;
            const approved = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [tx2Config],
              })
            approved!==null && setApproved(approved);
        }
        tx2!==null && tx2.serializedTransaction && sendTx2();
       }, [tx2])

    //Cancel operation

    const cancelURL = `http://localhost:3001/api/marketplace2`;
    const cancelParams = { operation: 'cancel', listingId: listingId };

    useEffect(() => {
        const cancelListing = () => {
        
            fetch(cancelURL,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cancelParams)
                })
                .then(response => response.json())
                .then(data => setCancel(data.data))
        }
    trigger2 && cancelListing();
    }, [trigger2])

    useEffect(() => {
   
        const pendingTx3 = () => {

            const {signatureId} = cancel;
    
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
                .then(data => setTx3(data.data))
        }
        cancel.signatureId && pendingTx3();
    }, [cancel])

    useEffect(() => {
        const sendTx3 = async () => {
            const tx3Config = JSON.parse(tx3.serializedTransaction);
            tx3Config.from = address;
            tx3Config.nonce = undefined;
            tx3Config.gasPrice = tx3Config.gasPrice ? parseInt(tx3Config.gasPrice).toString(16) : undefined;
            console.log(await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [tx3Config],
              }))
        }
        tx3!==null && tx3.serializedTransaction && sendTx3();
       }, [tx3])

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
                    {seller!=undefined && address!=undefined && address!=null && address!=seller &&
                        <ul className='ul'>
                            <li className='li'>{<TextField disabled id="outlined-basic" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                                value={listedPrice = (Number(listedPrice)+0.015)}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>}</li>
                            <li><Button variant="contained" onClick={()=>setTrigger3(true)}>BUY</Button></li>
                        </ul>                        
                    }
                    {!listed.includes(listingId) && !approved && address===seller &&
                        <ul className='ul'>
                            <li className='li'><Button variant="contained" onClick={()=>setApprove(true)}>SELL</Button></li>
                        </ul> 
                    }
                    {!listed.includes(listingId) && approved &&
                        <ul className='ul'>
                            <li className='li'>{<TextField required id="outlined-basic" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                                value={price} onChange={(e) => setPrice(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>}</li>
                            <li><Button variant="contained" onClick={()=>setTrigger(true)}>CONFIRM</Button></li>
                        </ul>                        
                    }
                    {listed.includes(listingId) && !state.includes(listingId) && address===seller &&
                        <ul className='ul'>
                            <li className='li'><Button variant="contained" onClick={()=>setTrigger2(true)}>CANCEL</Button></li>
                        </ul>
                    }
                    {listed.includes(listingId) && !approved && state.includes(listingId) && address===seller &&
                        <ul className='ul'>
                            <li className='li'><Button variant="contained" onClick={()=>setApprove(true)}>SELL</Button></li>
                        </ul> 
                    }
                    {listed.includes(listingId) && approved && state.includes(listingId) && address===seller &&
                        <ul className='ul'>
                            <li className='li'>{<TextField required id="outlined-basic" label="PRICE" variant="outlined" helperText="$CELO" type="number"
                                value={price} onChange={(e) => setPrice(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>}</li>
                            <li><Button variant="contained" onClick={()=>setTrigger(true)}>CONFIRM</Button></li>
                        </ul>                        
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default ShowNFT;