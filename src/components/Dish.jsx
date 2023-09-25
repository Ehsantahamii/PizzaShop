import { IoIosEye } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import priceFormat from './PriceFormat';
import '../styles/PopularDishes.css';



const rating = stars => '☆☆☆☆☆★★★★★'.slice(5 - stars, 10 - stars);


const Dish = (props) => {

    const cart = useSelector((store) => store);
    const dispatch = useDispatch();

    return (

        props.item.map((item) =>

            <div className='dish relative text-center rounded-md shadow-lg bg-white overflow-hidden'
                key={item.key} data-aos="fade-up">
                <span className='absolute bg-slate-200 -left-full top-2  p-2 rounded-full cursor-pointer'>
                    <IoIosEye className=' w-5 h-5' />
                </span>
                <img src={item.image} alt="فست فود" loading='lazy' />
                <h4 className='text-2xl'>{item.name}</h4>
                <span className='flex justify-center py-4 text-yellow-400'>
                    {rating(2)}
                </span>
                <div className="price flex justify-around ">
                    <button className='px-8 py-2 rounded-md text-white bg-blue-950 hover:bg-green-700 '
                        onClick={() => dispatch({ type: "ADD", payload: item })}>افزودن به سبد</button>
                    <div className='text-green-600 text-l'> {priceFormat(item.price)}<br /> تومان</div>
                </div>

            </div>


        )


    );
};

export default Dish;