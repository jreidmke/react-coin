import {React, useState} from 'react';

const Coin = () => {
    const [rand, setRand] = useState(0);
    const flip = () => setRand(Math.random());
    const heads = rand > .5;
    return (
        <div>
            <h3>{heads ? 'H' : 'T'}</h3>
            <button onClick={flip}>Flip</button>
        </div>
    )
}