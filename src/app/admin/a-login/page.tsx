"use client";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Alogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e : any) => {
    e.preventDefault();

    const response = {
      token: "bdfshUcknalskncasjnkahbahBxjVXhaAUATSVSJCJSNCK",
      expier: 7,
    };

    Cookie.set("token", response.token, { expires: response.expier });
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm space-y-6 rounded-lg bg-white p-8 shadow-lg"
      >
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          ورود به پنل مدیریت
        </h2>

        <div>
          <label
            dir="rtl"
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            نام کاربری
          </label>
          <input
            dir="rtl"
            id="username"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="you@example.com"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            dir="rtl"
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            رمز عبور
          </label>
          <input
            dir="rtl"
            type="password"
            id="password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md cursor-pointer bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
