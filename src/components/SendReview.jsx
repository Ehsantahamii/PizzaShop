import React from "react";
import "/src/styles/SendReview.css";

const SendReview = () => {
  return (
    <section id="Send-Review" className="review-form w-screen ">
      <div className="title w-full mt-9 text-center ">
        <h3 className="text-2xl  text-green-600">نظر دهید ! </h3>
        <h2 className="title w-full text-blue-950">
          آماده شنیدن نظراتتان هستیم
        </h2>
      </div>
      <div className="container shadow-lg py-8 max-w-[55%] max-[992px]:max-w-[65%] max-[768px]:max-w-[85%]   m-auto my-6 bg-white" 
              data-aos="zoom-in-up">
        <form action="/" method="post" className="w-full overflow-hidden" >
          <div className=" m-auto flex justify-center items-center">
            <div className="label-1 relative flex-1 ">
              <input
                type="text"
                name="نام"
                id="#"
                className=" bg-zinc-100 w-[90%] mx-4 my-5 p-1 rounded-md"
              />
            </div>
            <div className="label-2 relative flex-1 w-[300px] ">
              <input
                type="text"
                name="شماره موبایل"
                id="#"
                className=" bg-zinc-100 w-[90%]  mx-4 my-3 p-1 rounded-md"
              />
            </div>
          </div>

          <div className="m-auto flex justify-center items-center">
            <div className="label-3 relative flex-1 w-[300px]">
              <input
                type="text"
                name="نام"
                id="#"
                className=" bg-zinc-100 w-[90%] mx-4 my-5 p-1 rounded-md"
              />
            </div>
            <div className="label-4 relative flex-1 w-[300px]">
              <input
                type="text"
                name="شماره موبایل"
                id="#"
                className=" bg-zinc-100 w-[90%]  mx-4 my-3 p-1 rounded-md"
              />
            </div>
          </div>
          <div className="m-auto flex justify-center items-center">
            <div className="label-5 relative flex-1 w-[300px]">
              <input
                type="time"
                name="نام"
                id="#"
                className=" bg-zinc-100 w-[90%] mx-4 my-5 p-1 rounded-md"
              />
            </div>
            <div className="label-6 relative flex-1 w-[300px]">
              <input
                type="date"
                name="شماره موبایل"
                id="#"
                className=" bg-zinc-100 w-[90%]  mx-4 my-3 p-1 rounded-md"
              />
            </div>
          </div>
          <div className="m-auto flex justify-center items-center">
            <div className="label-7 relative flex-1 w-[300px]">
              <textarea
                type="text"
                name="نام"
                id="#"
                className=" bg-zinc-100 w-[90%] min-h-[150px] mx-4 my-5 p-1 rounded-md"
              />
            </div>
            <div className="label-8 relative flex-1 w-[300px]">
              <textarea
                type="text"
                name="نام"
                id="#"
                className=" bg-zinc-100 w-[90%] min-h-[150px] mx-4 my-5 p-1 rounded-md"
              />
            </div>
          </div>
          <div className="w-[96%] m-auto">
            <button className="bg-blue-950 text-white px-10 py-3 rounded-md" type="submit">ارسالش کن</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SendReview;
