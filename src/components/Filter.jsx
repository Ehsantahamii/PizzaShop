import React from 'react';
import "/src/styles/PopularDishes.css";


const Filter = (props) => {
    return (
        <div className='filter'>
        <div className='container max-w-2xl flex justify-center items-center gap-2' >
            <p>انتخاب کنید :</p>
            <select value={props.type}  className='w-2/6 ' onChange={props.filterProducts}>
                <option value="">همه</option>
                <option value="pizza">پیتزا ها</option>
                <option value="burgur">برگر ها</option>
                <option value="fried"> سوخاری ها</option>
                <option value="soda">نوشیدنی ها</option>

            </select>
        </div>
    </div>
);
};

export default Filter;