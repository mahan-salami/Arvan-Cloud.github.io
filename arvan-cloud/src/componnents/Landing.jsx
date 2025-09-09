import React, { useState } from 'react'
import Logo from '../assets/23.png'
import { LuBellRing } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const Landing = () => {
  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = [
    { name: "محصولات", items: ["محصول ۱", "محصول ۲", "محصول ۳"] },
    { name: "راهکار ها", items: ["راهکار ۱", "راهکار ۲"] },
    { name: "قیمت کذاری", items: ["پلن ۱", "پلن ۲"] },
    { name: "منابع دانش", items: ["مقاله ۱", "مقاله ۲"] },
    { name: "خدمات سازمانی", items: ["خدمت ۱", "خدمت ۲"] },
    { name: "دواپس", items: ["ابزار ۱", "ابزار ۲"] },
  ];

  return (
    <>
    <div className='bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] -mt-5 fixed top-0 left-0 w-full z-50 '>

      {/* بخش بالا */}
      <div className='flex justify-between items-center h-[100px] md:h-[140px] px-4 md:px-10 ml-6'>
        
        {/* سمت چپ: دکمه‌ها و آیکون‌ها */}
        <div className='flex items-center gap-4 md:gap-6'>
          {/* کره زمین و زبان */}
          <div className='relative'>
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setOpenLang(!openLang)}>
              <TbWorld className='text-lg md:text-xl' />
              <span className={`transition-transform ${openLang ? "rotate-180" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            {openLang && (
              <ul className="absolute top-10 left-0 bg-white shadow-md rounded-lg w-28 md:w-32 border z-50 text-right">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">فارسی</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">العربية</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">English</li>
              </ul>
            )}
          </div>

          <LuBellRing className='text-lg md:text-xl cursor-pointer animate-bell mt-5' />

          <div className='hidden sm:flex gap-4 md:gap-6 text-sm md:text-base'>
            <h1 className='cursor-pointer hover:text-[#362cff] transition delay-100'>اتاق خبر</h1>
            <h1 className='cursor-pointer hover:text-[#362cff] transition delay-100'>بلاگ</h1>
            <h1 className='cursor-pointer hover:text-[#362cff] transition delay-100'>تماس با ما</h1>
          </div>

          {/* دکمه‌های دسکتاپ */}

        </div>

        {/* سمت راست: لوگو و منوی موبایل */}
        <div className='flex items-center gap-4'>
          <img src={Logo} className='h-[40px] md:h-[50px] cursor-pointer' />
          <button className="sm:hidden text-3xl" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* منوی پایین دسکتاپ */}
      <div className='hidden sm:block px-4 md:px-10'>
        <ul className='flex gap-10 justify-end flex-wrap'>
          {menus.map((menu, idx) => (
            <li key={idx} className='relative' dir='rtl'>
              <button
                onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                className='flex items-center gap-1 cursor-pointer text-sm md:text-base -mt-8 hover:text-[#362cff] transition delay-100' >
                {menu.name}
                <span className={`transition-transform ${openMenu === idx ? "rotate-180" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              {openMenu === idx && (
                <ul className='absolute top-[0px] right-0 bg-white shadow-md rounded-sm border w-32 z-50 text-right'>
                  {menu.items.map((item, i) => (
                    <li key={i} className='p-2 hover:bg-gray-100 cursor-pointer'>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* منوی موبایل */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pb-4 bg-white shadow-md rounded-b-lg">
          <ul className="flex flex-col gap-3 text-right">
            {menus.map((menu, idx) => (
              <li key={idx} className='relative'>
                <button
                  onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                  className='flex items-center justify-between w-full text-base font-medium py-2 px-2'>
                  {menu.name}
                  <span className={`transition-transform ${openMenu === idx ? "rotate-180" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                {openMenu === idx && (
                  <ul className='mt-1 bg-white shadow-sm rounded-sm border w-full text-right'>
                    {menu.items.map((item, i) => (
                      <li key={i} className='p-2 hover:bg-gray-100 cursor-pointer'>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* دکمه‌های موبایل */}

        </div>
      )}
            <div className='hidden sm:flex gap-3 ml-15 -mt-9 mb-2'>
            <button className='bg-[#2b7675] py-2 px-4 rounded-xl text-white '>ثبت نام</button>
            <button className='bg-white border px-4 py-2 rounded-xl '>ورود</button>
          </div>
      {/* نوار پایینی */}
      <div className='flex flex-col sm:flex-row py-3 bg-[#2d1b5ce7] justify-between sm:justify-end items-center px-4 md:px-10'>
        <p className='text-amber-50 text-sm text-center sm:text-right mr-5'>
          دیتابیس ابری آروان‌کلاد را رایگان تجربه کنید! ۱ میلیون تومان اعتبار برای ۳ روز
        </p>
        <div className='flex bg-[#f61874] px-2 py-0.5 rounded-sm text-white mt-2 sm:mt-0 sm:mr-10'>
          <p>ویژه کاربران جدید</p>
        </div>
      </div>
    </div>






    </>
  )
}

export default Landing






