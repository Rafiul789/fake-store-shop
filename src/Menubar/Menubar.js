import React from 'react';
import "./Menubar.css"

const Menubar = () => {
    
    return (
        <div>
            <h1>Menubar</h1> <div className="container">
            <div className="row"> <div className="col-md-2 p-2">logo</div>
            <div className="col-md-10 ms-4 menu-container d-flex justify-content-around-end ">         <li className="item ms-4 mb-4">Home</li>
            <li className="item ms-4 mb-4">Contact</li>
            <li className="item ms-4 mb-4">Cart</li>
            <li className="item ms-4 mb-4">Login</li>  </div>  </div>
            </div>
           
          
        </div>
    );
};

export default Menubar;