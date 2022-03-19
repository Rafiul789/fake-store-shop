import React,{useState} from 'react';

const Test = (props) => {
   

const [count,setCount]=useState(0);

console.log(count)
    return (
        <div>
            
            <div  className="count  mt-5">   <h1>{count}</h1>
            <button  onClick={()=>setCount(count+1)}  className="ms-3 p-3">+</button><button onClick={()=>setCount(count-1)}  className="ms-3 p-3"  > - </button></div>
        </div>
    );
};

export default Test;