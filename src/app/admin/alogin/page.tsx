'use client';

import { useState } from 'react';
import { FiEye, FiEyeOff, FiLock, FiUser } from 'react-icons/fi';
import Cookie from "js-cookie";
import { redirect } from 'next/navigation';

export default function Alogin() {
  const [showPassword, setShowPassword] = useState(false);

  const [useName , setUserName] = useState("")
  const [password , setPassword] = useState("")

  const handlesubmitalogin = ()=>{

    const response ={
        token : "snclnalnksancalkcnalksncalkncakcnalkcnznxlaknslkNl",
        expier : 5 ,
    }

    Cookie.set("token", response.token ,{expires : response.expier});
    redirect("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div dir="rtl" className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-3">
              <FiLock className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">ورود ادمین</h1>
            <p className="text-slate-500 text-sm mt-1">لطفاً اطلاعات ورود خود را وارد کنید</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">نام کاربری / ایمیل</label>
              <div className="relative">
                <input
                  onChange={(e)=>setUserName(e.target.value)}
                  type="text"
                  placeholder="مثال: admin یا admin@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 focus:bg-white px-4 py-3 pr-11 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                />
                <FiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">رمز عبور</label>
              <div className="relative">
                <input
                  onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="رمز عبور"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 focus:bg-white px-4 py-3 pr-11 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-slate-100 text-slate-500"
                  aria-label={showPassword ? 'عدم نمایش رمز' : 'نمایش رمز'}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 select-none">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-slate-700">مرا به خاطر بسپار</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                فراموشی رمز؟
              </a>
            </div>

            <button
              onClick={handlesubmitalogin}
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition"
            >
              ورود
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} مدیریت فروشگاه</p>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-4">
            توسعه یافته توسط آریا حسینی
        </p>
      </div>
    </div>
  );
}
