import React from 'react'
import Global from '../assets/globe.svg'

const stats = [
  { value: '۹۹.۹۹٪', label: 'آپ‌تایم در محصولات' },
  { value: '۵۰۰ میلیون', label: 'درخواست در ساعت' },
  { value: '+۴۰ وبسایت', label: 'پاپ‌سایت در دنیا' },
  { value: '+۲۰۰ هزار', label: 'مشتری فعال' },
]

const Jahan = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-slate-900 to-slate-700 w-full h-[1000px] py-22 px-16 flex flex-col md:flex-row items-center justify-between gap-10 ' dir='rtl'>
        
        {/* متن سمت راست */}
        <div className='flex flex-col z-20 text-right max-w-xl mb-90'>
          <h1 className='text-[#43d9f4] text-2xl mb-4'>شبکه ابرآوران</h1>
          <h1 className='text-white text-5xl mb-6'>گستره‌ای به وسعت جهان</h1>
          <p className='text-[#a7e4e9c6] leading-8'>
            ابر آروان با در اختیار داشتن ۴۰ پاپ‌سایت در بیش از <br/>۳۰ کشور و ۴ دیتاسنتر در نقاط مختلف ایران به<br/>
            کسب‌وکارهای مختلف امکان می‌دهد تا به‌کمک امن‌ترین و پایدارترین<br/>
            زیرساخت‌های ابری سرویس‌های خود را توسعه دهند.
          </p>
        </div>

        {/* عکس کره زمین */}
        <div className='w-full md:w-2/4 -mt-90  flex justify-center mb-70 md:-mt-5'>
          <img src={Global} alt="globe" className="w-full h-auto mb-30" />
        </div>
      </section>

      {/* بخش آمار پایین */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center -mt-90 md:text-sm '>
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* عدد + خط کنارش */}
            <div className="flex items-right text-right justify-end">
               <h1 className="text-white text-sm font-bold  md:text-sm  sm:text-sm lg:text-sm">{item.value}</h1>
              <div className="w-1 h-4 bg-[#32ddff] rounded-sm ml-4"></div>
             
            </div>
            {/* توضیح */}
            <p className="text-gray-300 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Jahan
