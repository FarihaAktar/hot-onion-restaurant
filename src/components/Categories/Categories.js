import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    
    return (
        <div>
            <ul>
                <li>
                    <Link to='/category/Breakfast'>Breakfast</Link>
                </li>
                <li>
                    <Link to='/category/Lunch'>Lunch</Link>
                </li>
                <li>
                    <Link to='/category/Dinner'>Dinner</Link>
                </li>
            </ul>
        </div>
    );
};

export default Categories;