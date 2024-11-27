// function State() {
//     const [count, setCount] = useState(5)
//     return (
//       <>
//        <button onClick={() => setCount((count) => count + 5)}>
//             count is {count}
//           </button>
//           <p></p>
//       </>
//     )
//   }
  
//   export default State

import React, { useState } from 'react';

function State() {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 24);  
  };

  return (
    <div>
        Number of clicks
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  );
}


export default State;
