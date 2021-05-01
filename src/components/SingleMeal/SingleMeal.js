import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './SingleMeal.css'

const SingleMeal = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleMeal/${id}`)
            .then(res => res.json())
            .then(data => setMeal(data[0]))
    }, [id])
     
    return (
        <div className='single-meal'>
            <div className='meal'>
                <h1>Healthy Meal</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi totam nulla voluptas quasi iure nesciunt fuga molestias ullam neque, ea necessitatibus, officiis enim cumque eius sunt nobis harum asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, dicta doloribus! Officia quasi consequuntur ad vero nulla expedita atque non!</p>
                <h2>${meal.price}</h2>
                <Link to={'/checkout/' + meal._id}>
                    <button className='add-btn'>ADD</button>
                </Link>
            </div>
            <div className='meal-img'>
                <img src={meal.imageURL} alt="" />
            </div>
        </div>
    );
};

export default SingleMeal;