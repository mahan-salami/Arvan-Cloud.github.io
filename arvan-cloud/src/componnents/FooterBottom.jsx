import React from "react";
import { FaInstagram, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Globe } from "lucide-react";
import Arvan from '../assets/23-removebg-preview.png'
import Saman from '../assets/samandehi.webp'
import Nemad from '../assets/ETEMAD.png'
const FooterBottom = () => {
  return (
    <div className="bg-gray-200 border-t border-gray-300 px-6 sm:px-12 lg:px-20 py-6" dir="ltr">
      
      {/* بخش بالا: قوانین و شبکه‌های اجتماعی */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-300 pb-4">
        
        {/* قوانین */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <a href="#" className="hover:text-cyan-600">شرایط استفاده از خدمات</a>
          <span>|</span>
          <a href="#" className="hover:text-cyan-600">توافق‌نامه سطح خدمات</a>
          <span>|</span>
          <a href="#" className="hover:text-cyan-600">سیاست حفظ حریم خصوصی</a>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="flex gap-4 text-xl text-gray-700">
          <a href="#" className="hover:text-cyan-600"><FaGithub /></a>
          <a href="#" className="hover:text-cyan-600"><FaLinkedin /></a>
          <a href="#" className="hover:text-cyan-600"><FaTelegram /></a>
          <a href="#" className="hover:text-cyan-600"><FaInstagram /></a>
          <a href="#" className="hover:text-cyan-600"><FaXTwitter /></a>
        </div>
      </div>

      {/* بخش پایین: لوگو + نماد + انتخاب زبان */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6">
        
        {/* لوگو */}
        <div className="flex items-center gap-2">
          <img
            src={Arvan}
            alt="arvancloud"
            className="h-6"
          />
        </div>

        {/* نمادها */}
        <div className="flex items-center gap-4">
          <img src={Nemad} alt="نماد اعتماد" className="h-12 rounded bg-gray-100 p-1" />
          <img src={Saman} alt="samandehi" className="h-12 rounded bg-gray-100 p-1" />
        </div>

        {/* انتخاب زبان */}
        <div>
          <button className="flex items-center gap-2 border border-gray-400 rounded px-3 py-2 text-sm hover:bg-gray-100 transition">
            <span>فارسی</span>
            <Globe className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
