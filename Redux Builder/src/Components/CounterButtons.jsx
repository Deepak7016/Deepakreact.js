import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { increment,decrement } from '../Store/action';


const CounterButtons = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(increment(1));
    };

    const handleReduce = () => {
        dispatch(decrement(1));
    };

    return (
        <div>
           
            <Button onClick={handleAdd} variant="primary">Inc (+)</Button>{' '} &nbsp;
            <Button  onClick={handleReduce} variant="success">Dec (-)</Button>
        </div>
    );
};

export default CounterButtons;