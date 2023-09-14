import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import "/src/styles/PopularDishes.css";
import '/src/fonts/Graphik.otf';
import Master from './dishes/Master';


const PopularDishes = () => {
    return (
        <section id='popular-dish' className='popular-dishes relative w-full '>
            <div className="title w-full mt-9 text-center ">
                <h3 className='text-2xl  text-green-600' > بشقاب های</h3>
                <h2 className='title w-full text-blue-950'>
                    پر طرفدار
                </h2>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Master />}/>
                </Routes>
            </BrowserRouter>

        </section>
    );
};

export default PopularDishes;