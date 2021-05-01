import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css'


const Property = ({ food }) => {
    const { name, price, imageURL, _id } = food;
    return (
        <Link to={'/singleMeal/' + _id}>
            <div className='property'>
                <img src={imageURL} alt="" />
                <h4>{name}</h4>
                <h6>How We Dream About Our Future</h6>
                <h4>${price}</h4>
            </div>
        </Link>

    );
};

export default Property;