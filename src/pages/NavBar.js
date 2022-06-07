import React, { useEffect, useState } from 'react';
import SearchAppBar from '../components/SearchAppBar';
import {
  connectWallet,
  getCurrentWalletConnected,
  disconnectWallet
} from "../util/interact.js";


export const NavBar = () => {

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
        <SearchAppBar id='walletButton' apptitle={apptitle} color='primary' variant='contained' text='Connect Wallet' handle={connectWalletPressed} startIcon={null}/>
      </div>
    )
  }

  const WalletAddressSent = (
    walletAddress.substring(0, 5) + '…' + walletAddress.substring(walletAddress.length - 4)
  );

  const AlreadyConnected = () => {

    return(
      <div>
        <SearchAppBar id='walletButton' apptitle={apptitle} color='secondary' variant='text' text={WalletAddressSent} handle={disconnectWallet} colorIcon='error'/>
      </div>
    )
  }

  return(
    <div>
      {walletAddress ? AlreadyConnected() : connectWalletChecker()}
      
    </div>
  )
};