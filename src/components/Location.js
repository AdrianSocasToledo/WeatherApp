import React from 'react';


const Location = (props) => {
    //Destructuring
    const { city , city2 } = props;
    return ( 
        <div><h1>{city}</h1></div>);
};

export default Location;