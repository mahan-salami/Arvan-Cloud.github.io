import React from 'react'
import Weblog from '../assets/weblog.svg'
import Docs from '../assets/docs.svg'
import Anjo from '../assets/users.svg'
import Help from '../assets/help.svg'
import Ban from '../assets/banner.svg'

const Rahkar1 = () => {
  return (
    <>
      <section className='py-10 px-4 sm:px-16 lg:px-32 bg-white w-full mt-10' dir='rtl'>

        {/* --- بنر --- */}
        <section className='relative bg-gradient-to-r from-[#0d4a4a] to-[#0d3c3c] rounded-2xl w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-16 mb-20'>
          
          {/* متن سمت راست */}
          <div className='z-10 max-w-xl text-center lg:text-right'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-relaxed'>
              تجربه‌ای نو از توسعه فنی زیرساخت
            </h1>
            <p className='text-white/90 text-sm sm:text-base mb-8 leading-loose'>
              با استفاده از خدمات <span className="font-semibold">DevOps آروان‌کلاد</span>،
              پیاده‌سازی و نگه‌داری سرویس‌های پیچیده‌ی کسب‌وکار خود را به ما بسپارید
              و زیرساختی به‌روز و مطابق با استانداردهای جهانی تحویل بگیرید.
            </p>
            <button className="bg-white text-slate-800 hover:bg-gray-200 font-medium px-6 py-3 rounded-xl shadow-md transition">
              درخواست مشاوره
            </button>
          </div>

          {/* تصویر خطوط تزئینی */}
          <img
            src={Ban}
            alt="banner-lines"
            className="absolute left-0 bottom-0 w-full lg:w-[60%] opacity-70 pointer-events-none"
          />
        </section>

        {/* --- بخش باکس‌ها --- */}
        <div className='text-right mb-8'>
          <h1 className='text-[#21b5c3] text-lg sm:text-xl'>دسترسی‌های مفید</h1>
          <h1 className='text-2xl sm:text-3xl font-semibold'>هر آن‌چه درباره محصولات ابر آروان باید بدانید</h1>
        </div>

        {/* container */}
        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8'>

          {/* باکس وبلاگ */}
          <div className='flex flex-col bg-white shadow-lg w-70 sm:w-1/2 lg:w-1/5 h-42 rounded-lg border border-[#dddddd] p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={Weblog} alt="وبلاگ" className='w-6 h-6' />
              <h1 className='text-xl'>وبلاگ</h1>
            </div>
            <p className='text-sm text-gray-500'>
              در وبلاگ ابر آروان به گزارش‌ها، مقالات و یادداشت‌هایی در حوزهٔ رایانش و زیرساخت ابری دسترسی دارید.
            </p>
          </div>

          {/* باکس راهنمای فنی */}
          <div className='flex flex-col bg-white shadow-lg w-70 sm:w-1/2 lg:w-1/5 h-42 rounded-lg border border-[#dddddd] p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={Help} alt="راهنمای فنی" className='w-6 h-6' />
              <h1 className='text-xl'>راهنمای فنی</h1>
            </div>
            <p className='text-sm text-gray-500'>
              در راهنمای ابر آروان برای مشکلات فنی شما در کار با محصولات ابری، راه‌حل‌های متنوعی ارائه داده‌ایم.
            </p>
          </div>

          {/* باکس مستندات */}
          <div className='flex flex-col bg-white shadow-lg w-70 sm:w-1/2 lg:w-1/5 h-42 rounded-lg border border-[#dddddd] p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={Docs} alt="مستندات فنی" className='w-6 h-6' />
              <h1 className='text-xl'>مستندات فنی</h1>
            </div>
            <p className='text-sm text-gray-500'>
              مستندات کامل برای هر یک از محصولات و قابلیت‌های ابر آروان از طریق API را در این بخش جست‌وجو کنید.
            </p>
          </div>

          {/* باکس انجمن */}
          <div className='flex flex-col bg-white shadow-lg w-70 sm:w-1/2 lg:w-1/5 h-42 rounded-lg border border-[#dddddd] p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <img src={Anjo} alt="انجمن" className='w-6 h-6' />
              <h1 className='text-xl'>انجمن</h1>
            </div>
            <p className='text-sm text-gray-500'>
              در انجمن کاربری ابر آروان با کارشناسان و متخصصین ابری آروان درباره محصولات ما گفت‌وگو و تبادل نظر کنید.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Rahkar1
