import React, { useState, useEffect } from 'react';
import ActionAreaCard from '../components/ActionAreaCard';

const MyBooks = ({address}) => {

    const [metadata, setMetadata] = useState('');

    const URL = `http://localhost:3001/api/tatumapi`;
    const chain = 'CELO';
    const params = { address: address, chain: chain };

    useEffect(() => {
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
            .then(data => setMetadata(data.data));
    }, [])

    const data = Array.from(metadata);

    return (
        <div>
          {
            data.map(data2 => {
              return (data2.metadata.map(({metadata}) => {
                return (setMetadata(metadata))
              }))
            }
            )
          }
          <ActionAreaCard name={metadata.name} description={metadata.description} image={metadata.image}/>
        </div>
    )
}

export default MyBooks;