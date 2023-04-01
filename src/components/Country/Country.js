import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, region, name, population, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p> <small>Region: {region}</small> </p>
            <p><small>Area: {area} sqrt</small></p>
        </div>
    );
};

export default Country;