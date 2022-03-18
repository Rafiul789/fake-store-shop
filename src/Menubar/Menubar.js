import React from 'react';
import Test from '../Test/Test';

const Menubar = ({country}) => {
    console.log(country);
    return (
        <div>
            <h1>Hero Alom from menubar</h1>
            <Test country={country} ></Test>
        </div>
    );
};

export default Menubar;