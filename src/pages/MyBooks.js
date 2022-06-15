import React, { useState, useEffect } from 'react';

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
            .then(data => setMetadata(data));
    }, [])

    console.log(metadata);
    const data = Array.from(metadata);

    return (
        <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({name, description, image}) => {
                return(
                  <tr key={data.id}>
                    <td>{name}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
}

export default MyBooks;