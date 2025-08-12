"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const {cartTotalQnt} = useCartContext()
  const megaMenuItems = [
    {
      category: 'الکترونیک',
      items: [
        { name: 'موبایل', href: '/products/mobile' },
        { name: 'لپ‌تاپ', href: '/products/laptop' },
        { name: 'تبلت', href: '/products/tablet' },
      ],
    },
    {
      category: 'پوشاک',
      items: [
        { name: 'مردانه', href: '/products/men' },
        { name: 'زنانه', href: '/products/women' },
        { name: 'بچگانه', href: '/products/kids' },
      ],
    },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50 font-vazir" dir="rtl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between flex-row-reverse">
        {/* لوگو */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-orange-300 transition-colors duration-200">
          فروشگاه
        </Link>

        {/* سرچ */}
        <div className="hidden md:flex flex-1 mx-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-gray-800 text-right transition-all duration-200"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* منوی موبایل و دکمه‌های ورود/ثبت‌نام/سبد خرید */}
        <div className="flex items-center space-x-reverse space-x-4">
          <div className="hidden md:flex space-x-reverse space-x-4">
            <Link
              href="/login"
              className="text-white px-4 py-2 rounded-lg hover:bg-orange-300 hover:text-blue-900 transition-all duration-200"
            >
              ورود
            </Link>
            <Link
              href="/register"
              className="bg-orange-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-orange-500 shadow-md hover:shadow-lg transition-all duration-200"
            >
              ثبت‌نام
            </Link>
            <Link
              href="/cart"
              className="flex items-center text-white px-4 py-2 rounded-lg hover:bg-orange-300 hover:text-blue-900 transition-all duration-200"
            >
              <FaShoppingCart className="ml-2" />
              <span>{cartTotalQnt}</span>
              سبد خرید
            </Link>
            <Link href={'/product'} className="flex items-center text-white px-4 py-2 rounded-lg hover:bg-orange-300 hover:text-blue-900 transition-all duration-200">
              فروشگاه 
            </Link>
            <button
              className="text-white px-4 py-2 rounded-lg hover:bg-orange-300 hover:text-blue-900 transition-all duration-200"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              {isMegaMenuOpen ? 'بستن منو' : 'دسته‌بندی‌ها'}
            </button>
          </div>
          <button
            className="md:hidden text-white hover:text-orange-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 text-right text-gray-800"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button
              className="text-blue-900 hover:text-orange-400 text-right transition-colors duration-200"
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              {isMegaMenuOpen ? 'بستن دسته‌بندی‌ها' : 'دسته‌بندی‌ها'}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMegaMenuOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className="flex flex-col space-y-4 pr-4 pt-2">
                {megaMenuItems.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-semibold text-blue-900 text-right">{category.category}</h3>
                    <ul className="mt-2 space-y-2">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-blue-900 hover:text-orange-400 block text-right transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/login"
              className="text-blue-900 hover:text-orange-400 text-right transition-colors duration-200"
            >
              ورود
            </Link>
            <Link
              href="/register"
              className="bg-orange-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-orange-500 text-center shadow-md hover:shadow-lg transition-all duration-200"
            >
              ثبت‌نام
            </Link>
            <Link
              href="/cart"
              className="flex items-center text-blue-900 hover:text-orange-400 text-right transition-colors duration-200"
            >
              <FaShoppingCart className="ml-2" />
              سبد خرید
            </Link>
          </div>
        </div>
      </div>

      {/* مگا منو برای دسکتاپ */}
      <div
        className={`hidden md:block bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMegaMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {megaMenuItems.map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-blue-900 text-right">{category.category}</h3>
                <ul className="mt-2 space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-blue-900 hover:text-orange-400 block text-right transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;