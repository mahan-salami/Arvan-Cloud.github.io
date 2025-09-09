import React from 'react'
import Cloud from '../assets/Firewall-companies-in-hyderabad.png'

const Slider = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-[#5f61c9] w-[90%]  mx-auto  mt-60 rounded-sm p-4 md:p-5'>

      {/* تصویر */}
      <img 
        src={Cloud} 
        alt=""  
        className='w-full md:w-[480px] mb-6 md:mb-0 md:mr-10'
      />

      {/* متن و دکمه‌ها */}
      <div className='flex flex-col text-right' dir='rtl'>
        <h1 className='text-amber-50 text-4xl md:text-6xl font-bold mr-5'>زیرساخت یکپارچه ابری</h1>
        <h2 className='text-amber-50 text-2xl md:text-6xl mt-2 md:mt-4  mr-5'>جهانی امن‌تر، سریع‌تر و دردسترس‌تر</h2>
        <p className='mt-5  mr-5'>با استفاده از زیرساخت یکپارچه، پایدار، امن و همیشه در دسترس ابر آروان، بدون دغدغه‌های زیرساختی به وب‌سایت و سرویس‌های خود سرعت ببخشید و تجربه‌ی کاربران‌تان را به شکل چشم‌گیری بهبود دهید.</p>

        {/* دکمه‌ها */}
        <div className='flex flex-col md:flex-row gap-3 mt-6'>
          <button className='px-4 py-2 bg-[#3eaeae] rounded-lg text-white md:mr-5'>شروع کنید</button>
          <button className='px-4 py-2 bg-[#0a063ec2] rounded-lg text-white'>تماس با فروش</button>
        </div>
      </div>

    </div>
  )
}

export default Slider
