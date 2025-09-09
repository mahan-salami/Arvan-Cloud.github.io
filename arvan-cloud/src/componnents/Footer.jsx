import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 sm:px-12 lg:px-20" dir="rtl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm text-gray-700">
        
        {/* ستون محصولات */}
        <div>
          <h3 className="text-cyan-600 font-bold mb-4">محصولات</h3>
          <ul className="space-y-2">
            {[
              "سرور ابری",
              "شبکه توزیع محتوا",
              "سرویس میزبانی ویدیو",
              "فضای ابری",
              "کانتینر ابری",
              "دیتابیس ابری",
              "پردازش لبه",
              "سرور اختصاصی",
              "سرور مجازی",
              "گواهینامه SSL رایگان",
              "سرویس پخش زنده",
              "هاست بکاپ",
              "هاست دانلود",
              "Shell ابری",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className={`hover:text-cyan-600 transition ${
                    item === "سرویس پخش زنده" ? "font-bold text-pink-600" : ""
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ستون راهکارها */}
        <div>
          <h3 className="text-cyan-600 font-bold mb-4">راهکارها</h3>
          <ul className="space-y-2">
            {[
              "خدمات داوپس",
              "خدمات سازمانی",
              "CDN بانکی",
              "امنیت ابری",
              "خدمات مالی",
              "ارز دیجیتال",
              "کوچ ابری",
              "آموزش آنلاین",
              "بازی پس از دنیستر",
              "فروشگاه آنلاین",
              "استارتاپ‌ها",
              "ابر خصوصی",
              "سازمان‌های بزرگ",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-cyan-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ستون منابع */}
        <div>
          <h3 className="text-cyan-600 font-bold mb-4">منابع</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                مستندات محصولات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                راهنمای فنی
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                مستندات API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                گزارش تغییرات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                نقشه شبکه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                پرسش‌های رایج
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                وضعیت سرویس
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                آروان آکادمی
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                رادار ابر آروان
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition inline-flex items-center gap-1">
                Looking Glass{" "}
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">
                  جدید
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-600 transition">
                نشانی‌های IP
              </a>
            </li>
          </ul>
        </div>

        {/* ستون آروان */}
        <div>
          <h3 className="text-cyan-600 font-bold mb-4">آروان</h3>
          <ul className="space-y-2">
            {[
              "درباره آروان",
              "مسئولیت اجتماعی",
              "دغدغه اجتماعی",
              "حقوق شفاف",
              "ساختار سازمانی",
              "قصه‌ی آروان",
              "مسیر رشد در آروان",
              "چشم‌انداز",
              "آروانی نوشتن",
              "گزارش شفافیت",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-cyan-600 transition">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="hover:text-cyan-600 transition inline-flex items-center gap-1">
                فرصت‌های شغلی{" "}
                <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">
                  در حال جذب
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* ستون ارتباطات */}
        <div>
          <h3 className="text-cyan-600 font-bold mb-4">ارتباطات</h3>
          <ul className="space-y-2">
            {[
              "تماس با ما",
              "انجمن کاربری",
              "اتاق خبر",
              "وبلاگ",
              "آروان‌تک",
              "در رسانه‌ها",
              "رویدادهای ابری",
              "حمایت از استارت‌آپ‌ها",
              "حمایت‌های آموزشی",
              "مسابقه کشف باگ",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-cyan-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
