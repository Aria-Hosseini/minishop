import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer dir='rtl' className="bg-[#ffcbc3] text-[#150705] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">درباره ما</h3>
            <p className="text-[#150705]">
              فروشگاه آنلاین ما ارائه‌دهنده بهترین محصولات با کیفیت بالا و قیمت مناسب است.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#150705] hover:text-white">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#150705] hover:text-white">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#150705] hover:text-white">
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
            <p className="text-[#150705]">ایمیل: support@store.com</p>
            <p className="text-[#150705]">تلفن: ۱۲۳۴۵۶۷۸۹۰</p>
          </div>
        </div>
       <div className="mt-8 text-center text-[#150705]">
        Developed with <span className="text-red-500">❤️</span> by{' '}
        <a
        href="https://www.linkedin.com/in/aria-hosseini/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-500 transition-colors"
        >
        the-Aria
        </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;