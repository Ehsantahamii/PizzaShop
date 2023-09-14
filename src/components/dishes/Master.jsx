import React, { useState } from 'react';
import Dish from '../Dish';
import data from '/src/components/dishes/data.json';
const Master = () => {

    const [item, setItem] = useState(data.products)

    return (
        <>
        <div className="container flex gap-4 justify-center overflow-x-hidden-hidden" >
            <Dish item = {item} />

        </div>
        </>

    );
};

export default Master;


