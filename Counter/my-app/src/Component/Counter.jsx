import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

 
  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
 
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{paddingTop:'250px', textAlign:'center', backgroundColor:'yellow', height:'100vh'}}>
      
      <h2 style={{fontFamily:'cursive', fontSize:'32px', fontWeight:'bold'}}>Counter</h2>
      
      <p style={{fontFamily:'cursive', fontSize:'22px', fontWeight:'bold', border:'1px solid black', color:'red'}}>Count: {count}</p>
      
      <button style={{color:'white', backgroundColor:'black', fontSize:'16px', fontFamily:'monospace', fontStyle:'italic', fontWeight:'bold'}} onClick={increment}>Increment</button>
      
      <button style={{margin:'5px', color:'white', backgroundColor:'black', fontSize:'16px', fontFamily:'monospace', fontStyle:'italic', fontWeight:'bold'}} onClick={reset}>Reset</button>
      
      <button style={{color:'white', backgroundColor:'black', fontSize:'16px', fontFamily:'monospace', fontStyle:'italic', fontWeight:'bold'}} onClick={decrement}>Decrement</button>
    
    </div>
  );
}

export default Counter;
