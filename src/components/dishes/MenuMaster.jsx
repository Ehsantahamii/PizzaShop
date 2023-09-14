import React, { useState } from 'react';
import Dish from '../Dish';
import Filter from '../Filter';
import data from '/src/components/dishes/menuData.json';



const MenuMaster = () => {

    const [item, setItem] = useState(data.products);
    const [type, setType] = useState("");


    const filterProducts = (event) => {
        if (event.target.value === "") {
            setType(event.target.value);
            setItem(data.products)
        } else {
            setType(event.target.value);
            setItem(data.products.filter((products) => products.foodType.indexOf(event.target.value) >= 0));
        }
    }

    return (
        <>
            <Filter
                count={item.length}
                brand={type}
                filterProducts={filterProducts}
            />
            <div className="container flex gap-4 justify-center overflow-hidden" >
                <Dish item={item}  />
            </div>
        </>

    );
};

export default MenuMaster;


