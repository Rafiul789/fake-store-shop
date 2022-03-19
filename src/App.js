import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menubar from './Menubar/Menubar';
import Allproduct from './Allproducts/Allproduct';

function App() {

 const[count,setCount]=useState(0)
    const setCartCount=()=>{
      setCount(count+1)
    }
    return (
    <div className="App">
    <Menubar count={count} ></Menubar>
    <Allproduct  setCartCount={setCartCount} ></Allproduct>
    </div>
  );
}

export default App;
