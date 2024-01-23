import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    };

    const increment = () => {
        setCount(count + 1);
    };

    const print = () => {
        console.log('hello world');
        console.log('count', count);
    }

    useEffect(() => {
        print();
    }, [count])
    

    return (
        <>
            <div>
                <h1>{count}</h1>
            </div>
            <div>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default Counter;
