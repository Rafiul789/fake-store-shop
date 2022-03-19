import React from 'react';
import "./Menubar.css"

const Menubar = (props) => {
    
    return (
        <div>
             <div className="container">  <div className="row">  <div className="col-md-2 p-2">logo</div>   <div className="col-md-10 ms-4 menu-container d-flex justify-content-end "> <li className="item ms-4 mb-4">Home</li>
            <li className="item ms-4 mb-4">Contact</li>
            <li className="item ms-4 mb-4">Cart  <sup>{props.count}</sup></li>
            <li className="item ms-4 mb-4">Login</li>  </div>    </div>   </div>
           
                     
           
           
          
        </div>
    );
};

export default Menubar;