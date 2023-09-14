import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import "/src/styles/PopularDishes.css";
import '/src/fonts/Graphik.otf';
import MenuMaster from './dishes/MenuMaster';



const Menu = () => {


    return (
        
        <section id='menu' className='popular-dishes relative w-full '>
            <div className="title w-full mt-9 text-center ">
                <h3 className='text-2xl  text-green-600' > منوی ما</h3>
                <h2 className='title w-full text-blue-950'>
                    بشقاب های امروز
                </h2>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MenuMaster />}/>
                </Routes>
            </BrowserRouter>

        </section>
    );
};

export default Menu;