import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, region, name, population } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <h4>Population: {population}</h4>
            <p> <small>Region: {region}</small> </p>
            <p><small>Area: {area} sqrt</small></p>
        </div>
    );
};

export default Country;