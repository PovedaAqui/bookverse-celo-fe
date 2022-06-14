import React, { useEffect } from 'react'

const MyBooks = () => {

    const URL = `http://localhost:3001/api/tatumapi`;
    const address = '0x8926d4fDF7D1Ca0bB7d803f143fE2036245c57be';
    const chain = 'ETH';
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
            .then(data => console.log(data));
    }, [])

    

    return(<div>TEST</div>)
}

export default MyBooks;