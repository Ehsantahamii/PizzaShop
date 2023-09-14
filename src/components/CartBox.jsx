import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import priceFormat from './PriceFormat';
import { BsXLg } from "react-icons/bs";
import '/src/styles/Navbar.css';

const CartBox = (props) => {

    const cart = useSelector((store) => store);
    const dispatch = useDispatch();

    return (
        <div className={` ${props.openCart ? ' cart-box  animate-[pulses_0.4s_ease]	shadow-lg' : ' cart-box-hide animate-[pulses_0.6s_ease]'}`}>
            <div className='container overflow-hidden'> 
                <BsXLg className=' absolute  w-6 h-6 top-3 right-5 text-green-600 cursor-pointer' onClick={() => setOpenBox(!props.setOpenCart)} />
                <div className="title w-full mt-9 text-center border-b-red-700 ">
                    <h3 className='text-3xl mb-2 text-green-600' > سبد خرید </h3>
                    <h5 className='text-base float-right'>جمع سبد :</h5>
                </div>
                <ul className='food-order w-full h-full p-3 mt-5  overflow-scroll '>
                    {
                        cart.map(item => {
                            console.log(item);

                            // item.quantity = 1;
                            return (
                                <li className='order relative shadow-lg flex py-3 my-10 justify-evenly items-center max-[992px]:flex-col max-[992px]:gap-16' key={item.id}>
                                    <div>
                                        <img src={item.image} alt="عکس فست فود" title='عکس سفارش' />
                                    </div>
                                    <div>{item.name}</div>
                                    <div className='add-remove-cart'>
                                        <button className='bg-slate-200 px-2 rounded-md mx-2 object-center' onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</button>
                                        <span>تعداد : {item.quantity}</span>
                                        <button className='bg-slate-200 px-2 rounded-md mx-2 object-center' onClick={() => {
                                            if (item.quantity > 1) {
                                                dispatch({ type: "DECREASE", payload: item })
                                            }else{
                                                dispatch({ type: "REMOVE", payload: item })
                                            }
                                        }}>-</button>
                                    </div>
                                    <h5>جمع : {priceFormat(item.price * item.quantity)}</h5>
                                    <button className='px-7 py-2 rounded-md text-white font-mono bg-red-600'
                                        onClick={() => dispatch({ type: "REMOVE", payload: item })}>حذف</button>

                                </li>
                            )
                        })
                    }


                </ul>

            </div>
        </div>
    );
};

export default CartBox;