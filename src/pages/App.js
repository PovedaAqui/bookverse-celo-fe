import React, { useEffect, useState } from 'react';
import SearchAppBar from '../components/SearchAppBar';
import MyBooks from './MyBooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    connectWallet,
    getCurrentWalletConnected,
    disconnectWallet
  } from "../util/interact.js";
import ShowNFT from './ShowNFT';
import SellingNFT from './SellingNFT';

const App = () => {
    
    const [walletAddress, setWallet] = useState("");
    const apptitle = 'Mercapp';

    useEffect(async() => {

        const { address } = await getCurrentWalletConnected();

        setWallet(address);

        addWalletListener();

    }, []);

    function addWalletListener() {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
            setWallet(accounts[0]);
            } else {
            setWallet("");
            }
        });
        } else {
        console.log("error");
        }
    }
    
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet(); 
        setWallet(walletResponse.address);
    };

    const WalletAddressSent = (
        walletAddress.substring(0, 5) + '…' + walletAddress.substring(walletAddress.length - 4)
    );

    const paramsWalletConnected = {id: 'walletButton', color: 'secondary',
    variant: 'text', text: WalletAddressSent, handle: disconnectWallet, colorIcon:'error'};
    const paramsWalletNotConnected = {id: 'walletButton', color: 'primary', variant: 'contained',
    text: 'Connect Wallet', handle: connectWalletPressed};    

    return (
        <Router>
            <div>
                {walletAddress.length>0 ? <SearchAppBar title={apptitle} data={paramsWalletConnected}/> : <SearchAppBar title={apptitle} data={paramsWalletNotConnected}/>}
                <div>
                    <Routes>
                        <Route path='/' element={walletAddress.length>0 && <MyBooks address={walletAddress}/>} />
                        <Route path='/shownft' element={<ShowNFT/>} />
                        <Route path='/sellingnft' element={<SellingNFT/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;