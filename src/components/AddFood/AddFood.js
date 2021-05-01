import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddFood = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit } = useForm();

    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'e4f7c12dda67d538b427793c9790ef80');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const onSubmit = data => {
        // console.log(data);
        const FoodData = {
            category: data.category,
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        console.log(FoodData)
        if(FoodData.imageURL !== null){
            const url = 'http://localhost:5000/addFood';
            fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(FoodData)
            })
            .then(res => {
                console.log('server site response', res);
                alert("Product is submitted successfully")
            })
        }
        else{
            alert("Your file is not ready yet..Please wait!")
        }
    };

    return (
        <div>
            <h1>add food</h1>

            <form className='item2' onSubmit={handleSubmit(onSubmit)}>
                <input className='input-text' name="name" placeholder='Enter Name' required ref={register} />
                <br />
                <input className='input-text' name="price" id='priceName' placeholder="Enter Price" required ref={register} />
                <br/>
                <input className='input-text' name="category" id='property' placeholder="Enter Category" required ref={register} />
                <br />
                <input className='input-file' name="exampleRequired" type='file'  onChange={handleImageUpload} />
                <input className='input-submit' type="submit" />

            </form>
        </div>
    );
};

export default AddFood;