import { useState } from 'react';
import Videoplat from '../assets/video-platform-desktop.svg';
import VideoIc from '../assets/video-platform.svg'
import Shabake from '../assets/shabake.svg'
import Shab2 from '../assets/cdn-desktop.svg'
import Faza from '../assets/faza abri.svg'
import Conti2 from '../assets/conti.svg'
import Conti from '../assets/paas-desktop.svg'
import Database from '../assets/database.svg'
import Data2 from '../assets/dbaas-desktop.svg'
import Cloud from '../assets/cloud-storage-desktop.svg'
import Faza2 from '../assets/cloud-computing-desktop.svg'
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";


const Product = () => {
  const [activeTab, setActiveTab] = useState("alpha");

  const tabs = [
    {
      id: "alpha",
      label: "سرور ابری",
      title: "سریع و آسان سرور بسازید",
      image: Faza2 , 
      icon: Faza , 
      content: (
        <p>
          با سرورهای ابری مقیاس‌پذیر و مقرون به صرفه‌ی ابر آروان در بهترین دیتاسنترهای ایران با منابع و سیستم‌عامل دلخواه به تعداد نامحدود سرور (ابرک) بسازید. <br />
          و به ‌شکل آنی منابع آن را افزایش دهید. شما می‌توانید به‌کمک فایروال و شبکه‌های خصوصی و عمومی سرور ابری آروان، سطوح دسترسی متفاوتی <br /> 
          برای سرور خود در نظر بگیرید و با گرفتن اسنپ‌شات به وضعیت قبلی آن بازگردید.
        </p>
      ),
    },
    {
      id: "delta",
      label: "شبکه توزیع محتوا",
      title: "سریع و امن تر دیده شوید",
      image: Shab2 ,
      icon: Shabake , 
   
      content: (
        <p>
          شبکه توزیع محتوای ابر آروان شبکه‎‌ای امن و گسترده برای تحویل محتوای وب‌سایت شماست تا به کمک آن برای کاربران‌تان در سراسر جهان در دسترس باشید. <br /> 
          با راه‌اندازی سریع، پایداری بالا و امکانات کامل این محصول مانند DNS و امنیت ابری، دیگر دغدغه‌ی تامین منابع زیرساختی و امنیت سرویس خود را نخواهید داشت.
        </p>
      ),
    },
    {
      id: "summary",
      label: "فضای ابری",
      title: "داده‌هایتان را در محیطی امن ذخیره کنید",
      image: Cloud ,
      icon: Faza , 
   
      content: (
        <p>
          ا فضای ابری آروان از نوع Object Storage، امکان ذخیره‌سازی هر نوع فایل یا داده‌ای را در محیط ابری، به‌شکل کاملن رمزنگاری شده خواهید داشت و از نقاط مختلف دنیا، به‌شکل پایدار <br/>
          به یک سامانه‌ی ذخیره‌سازی امن و مقیاس‌پذیر دسترسی پیدا می‌کنید؛ بدون آن‌که نگران زیرساخت یا از دست رفتن اطلاعات باشید.
        </p>
      ),
    },
    {
      id: "video-platform",
      label: "پلتفرم ویدئو",
      title: "از بارگذاری تا پخش زنده محتوای ویدیویی",
      image: Videoplat,
      icon:  VideoIc, 
      content: (
        <p>
          پلتفرم ویدیو ابر آروان بستری امن و در دسترس برای محتوای ویدیویی و صوتی شماست. با سرویس میزبانی ویدیو، فیلم‌ها و ویدیوهای خود را در فضای ابری نامحدود نگه‌داری کنید و آن را با کیفیت‌ها و فرمت‌های متفاوت به دست کاربران‌تان برسانید. <br/> 
          هم‌چنین‌ با پخش زنده‌ ابر آروان می‌توانید استریم خود را با کم‌ترین تاخیر و بهترین کیفیت، بدون اختلال در معرض دید میلیون‌ها کاربر قرار دهید.
        </p>
      ),
    },
    {
      id: "cloud-container",
      label: "کانتینر ابری",
      title: "راه‌اندازی آسان و پایدار اپلیکیشن‌ها",
      image: Conti ,
      icon: Conti2 , 
      content: (
        <p>
          کانتینر ابری یا سکوی ابری آروان مبتنی بر Container و بر اساس استانداردهای Kubernetes است. شما می‌توانید تنها با یک دستور در CLI ایده‌های نرم‌افزاری خود را توسعه دهید و آن‌ها را به محصول تبدیل کنید. <br/> 
          فرقی نمی‌کند نرم‌افزاری ساده یا پیچیده دیپلوی کنید؛ در کانتینر ابری (PaaS) آروان تمامی نیازمندی‌های زیرساختی شما به آسانی تامین می‌شود و با کنترل مداوم وضعیت زیرساخت، نرم‌افزارتان همیشه در دسترس خواهد بود.
        </p>
      ),
    },
    {
      id: "cloud-database",
      label: "دیتابیس ابری",
      title: "خانه امن داده‌های شما",
      image: Data2 ,
      icon: Database , 
      content: (
        <p>
          دیتابیس ابری آروان زیرساختی امن، پایدار و مدیریت‌شده است و به شما کمک می‌کند تا به‌سادگی چند کلیک و در سریع‌ترین زمان تمام کارهای مرتبط با راه‌اندازی، مدیریت، پشتیبان‌گیری <br/>
          و به‌روزرسانی پایگاه داده کسب‌وکارتان را انجام دهید و بدون دغدغه‌های زیرساختی روی توسعه‌ی محصولات و خدمات آنلاین خود تمرکز کنید.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-[#e6f7ff] w-full  py-12 px-4 mt-5" dir="rtl">
      {/* نوشته‌ها */}
      <div>
        <h1 className="text-[#348fc8] text-2xl mr-8">محصولات ابری آروان</h1>
        <h1 className="text-3xl md:text-5xl mr-8 mt-3">
          پوشش کامل نیازهای شما برای راه‌اندازی کسب‌وکاری آنلاین
        </h1>
      </div>

      {/* تب‌ها */}
      <div className="mt-8 w-full flex flex-col mr-5">
        {/* Tab headers */}
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-bold rounded-lg transition-colors
                ${activeTab === tab.id ? "bg-white border-gray-200" : "bg-transparent hover:bg-gray-100 text-black"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-8 rounded-b-lg mt-7">
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-right md:items-start gap-6"
                  >
                    <div>
                      <img src={tab.icon} alt="" className="w-[40px] h-auto" />
                    </div>

                    {/* متن */}
                    <div className="text-gray-700 leading-relaxed w-full md:w-2/5 mt-20 flex flex-col -mr-12">
                      <h2 className="text-xl font-semibold mb-3 ">{tab.title}</h2>
                      {tab.content}
                      <div className="flex mt-15 gap-2">
                        <a href="">بیشتر بدانید </a>{" "}
                        <IoIosArrowBack className="mt-1" />
                      </div>
                    </div>

                    {/* تصویر */}
                    <div className="flex-shrink-0 w-full md:w-3/5">
                      <img
                        src={tab.image}
                        alt={tab.label}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Product;
