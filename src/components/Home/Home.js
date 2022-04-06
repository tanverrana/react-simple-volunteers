import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    }
    const number = 56;
    return (
        <div>
            <button onClick={increaseCount}>Click Me</button><br />
            <p>Count={count}</p>
            <h4>My Number={number}</h4>
            <h2>Double Count={count * 2}</h2>
        </div>
    );
};

export default Home;