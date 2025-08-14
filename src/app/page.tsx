'use client';

import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';
import Image from 'next/image';

export default function Home() {
  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen flex flex-col">
    
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">بهترین فروشگاه آنلاین</h2>
          <p className="text-blue-100 mb-6">خرید سریع، آسان و مطمئن</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 shadow">
            شروع خرید
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-bold mb-6">دسته‌بندی‌ها</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {['موبایل', 'لپ‌تاپ', 'لوازم خانگی', 'مد و پوشاک'].map((cat, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer">
              {cat}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-bold mb-6">محصولات جدید</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full h-48">
                <Image src={`/img/img${id}.jpg`} alt="product" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">محصول {id}</h4>
                <p className="text-blue-600 font-bold mt-2">120,000 تومان</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">پیشنهاد ویژه امروز</h3>
          <p className="mb-6">تخفیف 30٪ فقط تا پایان امروز</p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">
            خرید کنید
          </button>
        </div>
      </section>

    </div>
  );
}
