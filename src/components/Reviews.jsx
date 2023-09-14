import React, { useState } from "react";
import review from "/src/components/dishes/review.json";
import  '@splinetool/react-spline';
import "/src/styles/Review.css";

const Reviews = () => {
  const [view, setView] = useState(review.reviews);

  return (
    <section
      id="Reviews"
      className="Reviews w-full max-w-full h-screen bg-white overflow-hidden"
    >
      <div className="container">
        <div className="title my-5 py-5 text-center">
          <h3 className="text-green-600">بخش نظرات</h3>
          <h2 className="text-blue-950">مشتریان درباره ما چه می گویند؟</h2>
        </div>
        <ul className="flex max-[768px]:flex-col">
          {view.map((view) => (
            <li
              className=" mx-5 my-8 py-3 px-6 shadow-md"
              key={view.id}
              data-aos="fade-up"
            >
              <div className="head flex items-center">
                <img src={view.image} alt="عکس پروفایل" />
                <h3>{view.name}</h3>
              </div>
              <div className="body">
                <p className="text-gray-400">{view.message}</p>
                <spline-viewer loading-anim url="https://prod.spline.design/29sXeiKbNrMjanuA/scene.splinecode"></spline-viewer>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
