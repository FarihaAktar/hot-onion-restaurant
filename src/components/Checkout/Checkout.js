import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Checkout.css'


const Checkout = () => {
    const { value } = useParams();
    const [meal, setMeal] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch(`http://localhost:5000/singleMeal/${value}`)
            .then(res => res.json())
            .then(data => setMeal(data[0]))
    }, [value]);


    return (
        <div className='delivery'>

            <div className='delivery-detail'>
                <h3>Edit Delivery Details</h3>
                <hr/>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='text' name="delivery" placeholder="Delivery To Door" required ref={register} />
                    <br />
                    <input className='text' name="road" id='priceName' placeholder="Enter Road/Block" required ref={register} />
                    <br />
                    <input className='text' name="flat" id='property' placeholder="Flat, Suit or Floor" required ref={register} />
                    <br />
                    <input className='text' name="business" id='property' placeholder="Business Name" required ref={register} />
                    <br />
                    <input className='text' name="instructor" id='priceName' placeholder="Add Delivery Instructor" required ref={register} />
                    <br />
                    <input className='submit' type="submit" value='Save & Continue'/>

                </form>
            </div>
            <div className='delivery-img'>
                <img src={meal.imageURL} alt=""/>
            </div>
        </div>
    );
};

export default Checkout;