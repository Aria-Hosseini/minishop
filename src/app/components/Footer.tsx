import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* درباره ما */}
          <div>
            <h3 className="text-lg font-semibold mb-4">درباره ما</h3>
            <p className="text-gray-400">
              فروشگاه آنلاین ما ارائه‌دهنده بهترین محصولات با کیفیت بالا و قیمت مناسب است.
            </p>
          </div>

          {/* لینک‌های سریع */}
          <div>
            <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          {/* تماس با ما */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
            <p className="text-gray-400">ایمیل: support@store.com</p>
            <p className="text-gray-400">تلفن: ۱۲۳۴۵۶۷۸۹۰</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} فروشگاه. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;