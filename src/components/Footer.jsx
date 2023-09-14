import React from "react";
import "/src/styles/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="w-full  bg-white">
      <div className="container  max-w-[1200px] m-auto flex flex-wrap justify-center">
        <div className="w-1/4 flex-auto">
          <h3 className="text-3xl text-blue-950 py-6">شعبه ها</h3>
          <ul>
            <li>کرمان</li>
            <li>تهران</li>
            <li>مشهد</li>
            <li>شیراز</li>
            <li>یزد</li>
          </ul>
        </div>

        <div className="w-1/4 flex-auto">
        <h3 className="text-3xl text-blue-950 py-6">تماس با ما </h3>
          <ul>
            <li>کرمان</li>
            <li>تهران</li>
            <li>مشهد</li>
            <li>شیراز</li>
            <li>یزد</li>
          </ul>
        </div>


        <div className="w-1/4 flex-auto">
        <h3 className="text-3xl text-blue-950 py-6"> دسترسی سریع</h3>
          <ul>
            <li>خانه</li>
            <li>پرطرفدار ها</li>
            <li>درباره ما</li>
            <li>منو</li>
            <li>نظرات</li>
            <li>فرم ارسال نظرات</li>
          </ul>
        </div>


        <div className="w-1/4 flex-auto">
        <h3 className="text-3xl text-blue-950 py-6"> ما را دنبال کنید</h3>
          <ul>
            <li>تلگرام</li>
            <li>روبیکا</li>
            <li>واتساپ</li>
            <li>ایتا</li>
            <li>اینستاگرام</li>
          </ul>
        </div>

      </div>
      <div className="copy-write w-full h-20 text-center">
        <h2 className="mt-[20px]">
            <strong>Copyright @ 2023 Mr. Ehsan Tahami</strong>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
