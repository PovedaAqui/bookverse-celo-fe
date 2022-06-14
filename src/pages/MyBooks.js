import React, { useEffect } from 'react'

const MyBooks = ({address}) => {

    const URL = `http://localhost:3001/api/tatumapi`;
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