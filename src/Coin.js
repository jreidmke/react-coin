import {React, useState} from 'react';

const Coin = () => {

    //flip stuff
    const [rand, setRand] = useState(0);
    const flip = () => setRand(Math.random());
    const heads = rand > .5;

    //counter stuff
    const [count, setCount] = useState(0);
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);

    return (
        <div>
            <h3>{heads ? 'H' : 'T'}</h3>
            <button onClick={flip}>Flip</button>
            <h6>Out of {count} flips, you got {headCount} heads and {tailCount} tails. Congratulations, fate is an illusion.</h6>
        </div>
    )
}

export default Coin