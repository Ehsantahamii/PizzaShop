import React from 'react';
import bigburgur from '/src/images/bigburgur.jpg';
import { TbTruckDelivery } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import '../styles/AboutUs.css';



const AboutUs = () => {
    return (
        <section id='about-us' className='about-us bg-white  mt-20 py-10 overflow-hidden'>
            <div className="title w-full mt-9 text-center ">
                <h3 className='text-2xl  text-green-600' >درباره ما</h3>
                <h2 className='title w-full text-blue-950'>چرا باید ما را انتخاب کنید ؟</h2>
            </div>
            <div className='container flex flex-row-reverse items-center px-6'>
                <aside className='w-1/2'  data-aos="fade-left">
                    <img src={bigburgur} alt="همبرگر بزرگ" className='w-auto h-auto' />
                </aside>
                <aside className='w-1/2'  data-aos="fade-right">
                    <h3 className='py-5 text-5xl'>بهترین فست فود کشور !</h3>
                    <div className='text-zinc-400  leading-relaxed'>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                            حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                        </p>
                    </div>
                    <div className='w-full'>

                        <ul className='flex mt-8 flex-wrap'>
                            <li className='flex  m-1.5 px-5 py-4 items-center bg-stone-100 rounded-md  '>
                                <TbTruckDelivery className='text-green-900 w-8 h-8' />
                                <p className='mr-2 '>تحویل رایگان</p>
                            </li>
                            <li className='flex m-1.5 px-6 py-4 items-center bg-stone-100 rounded-md ' >
                                <FaDollarSign className='text-green-900 w-8 h-8' />
                                <p className='mr-2 '> پرداخت سریع</p>
                            </li>
                            <li className='flex m-1.5 px-6 py-4 items-center bg-stone-100 rounded-md '>
                                <BsHeadset className='text-green-900 w-8 h-8' />
                                <p className='mr-2 '>پشتیبانی 24 ساعته</p>

                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='mt-8 px-4 py-2 bg-blue-950 hover:bg-green-700 text-white rounded-md'>اطلاعات بیشتر ...</button>
                    </div>
                </aside>
            </div>

        </section>


    );
};

export default AboutUs;