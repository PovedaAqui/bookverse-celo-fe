import React, { useEffect, useState } from 'react';
import ActionAreaCard from './components/ActionAreaCard';
import SearchAppBar from './components/SearchAppBar';

export const App = () => {

  const AppBar = () => {

    const apptitle = 'Bookverse';

    return(
      <div>
       <SearchAppBar apptitle={apptitle} color='primary' variant='contained' text='Connect Wallet' handle={()=>console.log('works')}/>
      </div>
    )
  };

  const Card = () => {

    return(
      <div>
        <ActionAreaCard description='Test'/>
      </div>
    )
  }

  return(
    <div>
      <AppBar />
    </div>
  );
};