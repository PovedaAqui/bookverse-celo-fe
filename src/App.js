import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ActionAreaCard from './components/ActionAreaCard';
import SearchAppBar from './components/SearchAppBar';
import {
  connectWallet,
  getCurrentWalletConnected,
} from "./util/interact.js";


export const App = () => {

  const [walletAddress, setWallet] = useState("");
  const apptitle = 'Bookverse';

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
          //setStatus("👆🏽 Write a message in the text-field above.");
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

  const connectWalletChecker = () => {

    return(
      <div>
        <SearchAppBar id='walletButton' apptitle={apptitle} color='primary' variant='contained' text='Connect Wallet' handle={connectWalletPressed}/>
      </div>
    )
  }

  const AlreadyConnected = () => {

    return(
      <div>
        <SearchAppBar id='walletButton' apptitle={apptitle} color='primary' variant='contained' text={walletAddress} handle={null}/>
      </div>
    )
  }

  return(
    <div>
      {walletAddress ? AlreadyConnected() : connectWalletChecker()}
      
    </div>
  )
};