import { responsiveProperty } from '@mui/material/styles/cssUtils';
import React, { useEffect, useState } from 'react';

const Meta = [
  {
    "name": "CeloPunks Celo Connect Edition #377",
    "image": "https://ipfs.io/ipfs/QmRX4tFHKajU9nAxwHqJjkwtvBFCNRwJXNzdqrXUA16o3Z/377.png",
    "edition": 377
    // // "dna": "2cf8d6bd427cbbc6b544873c47ad45c549f295d7",
    // // "description": "Special CeloPunks Edition created for the Workshop at the Celo Connect to celebrate the presence of CeloPunks at the Barcelona conference. This edition live in 500 pieces on the Celo Blockchain and is free to mint. CeloPunks are frens of Celo but we are not affiliated neither with them nor with LarvaLabs.",
    // // "date": 1648755343525,
    // // "compiler": "HashLips Art Engine",
    // // "attributes": [
    // //   {
    // //     "value": "Celo Connect Dot Pattern ",
    // //     "trait_type": "Background"
    // //   },
    // //   {
    // //     "value": "Blue Woman ",
    // //     "trait_type": "Character"
    // //   },
    // //   {
    // //     "value": "EyeMask ",
    // //     "trait_type": "Eyes"
    // //   },
    // //   {
    // //     "value": "Ushanka ",
    // //     "trait_type": "Head"
    // //   },
    // //   {
    // //     "value": "Passion Red Lipstick ",
    // //     "trait_type": "Lip"
    // //   }
    // ]
  }
  ];

export const DefaultContainer = () => {

  return(
    <div>
      <Container1 />
      <Container2 />
    </div>
  )
};

const Container1 = () => {
  const [search, setSearch] = useState('');
  const [metadata, setMetadata] = useState('');

  useEffect(()=>{
    fetch(`https://api-eu1.tatum.io/v3/nft/address/balance/ETH/0x1070F9e5eDD7d77a2817bd71512Ec4Ede358105b`,
    {
      method: 'GET',
      headers: {
        'x-api-key': '5ff7b3e5-f465-4cc2-b887-fa0f2baf2e5b'
      }
    })
      .then(res => {
        return res.json();
      })
      .then((data) => {
        return (
          <div>
          {setMetadata(data)}
          <Container2 data = {data}/>
          </div>
          );
      });
  }, [search]);

  return(
  <div>
    <form>
      <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </form>
  </div>
  )
};

const Container2 = (props) => {

    return (
      <table style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Edition</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td><img src={item.image} /></td>
              <td>{item.edition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };  