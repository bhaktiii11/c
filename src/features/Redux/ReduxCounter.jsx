import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from "../features/CounterSlice";
import { increment,decrement } from '../CounterSlice';

export default function ReduxCounter() {
    const count = useSelector((state) => state.counterKey.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>ReduxCounter</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
