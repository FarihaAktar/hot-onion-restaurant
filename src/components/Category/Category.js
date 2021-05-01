import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Property from '../Property/Property';
import './Category.css'

const Category = () => {
    const [foods, setFoods] = useState();
    const { key } = useParams();
    

    useEffect(() => {
        fetch(`http://localhost:5000/category/${key}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [key])

    return (
        <div className='category'>
            {
                foods?.map(food => <Property key={food._id} food={food}></Property>)
            }
        </div>
    );
};

export default Category;