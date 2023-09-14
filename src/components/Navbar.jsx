import { useState, React } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import CartBox from './CartBox';
import logo from '/src/images/logo.svg';
import { BiSearch } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { PiHamburgerBold } from "react-icons/pi";
import { BsXLg } from "react-icons/bs";
import '/src/styles/Navbar.css';
import '/src/fonts/Lalezar.ttf';

function Navbar() {

    const [makeVisible, setVisible] = useState(false);
    const [openBox, setOpenBox] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <>
            <nav className='shadow-md p-2 bg-white fixed w-full h-16 z-50 Lalezar' >
                <div className='navbar container  flex justify-between h-full items-center '>
                    <div className='icons flex '>
                        <span className='bg-slate-100 p-2 rounded-full cursor-pointer ml-1' onClick={() => setOpenBox(!openBox)}>
                            <BiSearch />
                        </span>
                        <span className='bg-slate-100 p-2 rounded-full cursor-pointer ml-1'>
                            <BiSolidHeart />
                        </span>
                        <span className='bg-slate-100 p-2 rounded-full cursor-pointer ml-1' onClick={() => setOpenCart(!openCart)}>
                            <MdShoppingCart />
                        </span>
                        <span
                            className={` ${makeVisible ?
                                'bg-slate-100 p-2 rounded-full cursor-pointer hidden rotate-icon' : 'bg-slate-100 p-2 rounded-full cursor-pointer hidden'}`}
                            onClick={() => setVisible(!makeVisible)}>
                            <PiHamburgerBold />
                        </span>
                    </div>

                    <div className='nav-items w-2/4'>
                        <ul className="flex justify-around ">
                            <Link
                                activeClass="into-active rounded-md"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >

                                <li className='p-2 rounded-md cursor-pointer hover:bg-green-700 hover:text-white'><a href="#">خانه</a></li>
                            </Link>

                            <Link
                                activeClass="into-active rounded-md"
                                to="popular-dish"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >

                                <li className='p-2 rounded-md cursor-pointer'><a href="#">پرطرفدار ها</a></li>
                            </Link>

                            < Link
                                activeClass="into-active rounded-md"
                                to="about-us"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <li className='p-2 rounded-md cursor-pointer '><a href="#">درباره ما</a></li>
                            </Link>

                            <Link
                                activeClass="into-active rounded-md"
                                to="menu"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >

                                <li className='p-2 rounded-md cursor-pointer hover:bg-green-700 hover:text-white'><a href="#">منو</a></li>
                            </Link>
                            <Link
                                activeClass="into-active rounded-md"
                                to="Reviews"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >

                                <li className='p-2 rounded-md cursor-pointer '><a href="#">نظرات</a></li>
                            </Link>


                            <Link
                                activeClass="into-active rounded-md"
                                to="Send-Review"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}

                            >

                                <li className='p-2 rounded-md cursor-pointer'><a href="#">سفارشات</a></li>
                            </Link>


                        </ul>
                    </div>
                    <div className='logo'>
                        <a href='#'>
                            <img src={logo} alt="logo" title='لوگو' />
                        </a>
                    </div>

                </div>
            </nav>


            <div className={` ${makeVisible ? ' dropdown-menu fixed z-40  shadow-sm nav-showing  ' : ' dropdown-menu nav-hidden'}`}>
                <ul className='text-center shadow-md p-2'>
                    <Link
                        activeClass=" into-active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >
                        <li className=' p-3'>خانه</li>

                    </Link>

                    <Link
                        activeClass=" into-active"
                        to="popular-dish"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >

                        <li className=' p-3'>پرطرفدارها</li>
                    </Link>


                    <Link
                        activeClass=" into-active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >

                        <li className=' p-3'>درباره ما</li>
                    </Link>
                    <Link
                        activeClass="into-active bg-green-700"
                        to="menu"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >
                        <li className=' p-3'>منو</li>
                    </Link>
                    <Link
                        activeClass=" into-active"
                        to="Reviews"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >

                        <li className=' p-3'>نظرات</li>
                    </Link>

                    <Link
                        activeClass=" into-active"
                        to=""
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >

                        <li className=' p-3'>سفارشات</li>
                    </Link>

                </ul>
            </div>
            <div className={` ${openBox ? 'search-box fixed w-full h-full bg-gray-500 bg-opacity-90 animate-[pulses_0.3s_ease] z-50' : 'search-box absolute w-full h-full bg-gray-500 bg-opacity-70 animate-[pulses_0.3s_ease] z-50 hidden'}`}
            >
                <BsXLg className=' absolute w-6 h-6 top-3 right-5 text-white cursor-pointer' onClick={() => setOpenBox(!openBox)} />
                <article className='absolute top-1/3 left-2/4 '>
                    <label className='relative' htmlFor="">
                        <BiSearch className='absolute left-4 bottom-0.5 text-white cursor-pointer' />
                        <input autoComplete='on' className='w-96 bg-transparent border-b-2 text-white placeholder:text-white p-1' type="search" name="searchbox" id="src" placeholder='جستجو کنید ...' />
                    </label>

                </article>
            </div>
            <CartBox openCart={openCart} setOpenCart={setOpenCart} />


        </>
    );
};

export default Navbar;


{/* <Link
    activeClass=" into-active"
    to=""
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}

>

</Link> */}

