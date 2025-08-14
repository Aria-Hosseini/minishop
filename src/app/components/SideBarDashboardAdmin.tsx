import Link from "next/link";
import { FiHome, FiPlusSquare, FiShoppingBag, FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function SidebarDashboardAdmin (){
    return(
        <>
       <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-6 py-4 font-bold text-xl border-b">پنل ادمین</div>
        <nav className="flex-1 px-4 py-6 space-y-4">

          <Link href={"/admin/dashboard"} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FiHome /> داشبورد
          </Link>

          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FiShoppingBag /> محصولات
          </a>
          
          <Link href={"/admin/dashboard/add-product"} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <FiPlusSquare /> افزودن محصول
          </Link>

        </nav>
        <button
        onClick={()=>{Cookies.remove("token"), redirect("/admin/alogin")}}
         className="flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50">
          <FiLogOut /> خروج
        </button>
      </aside>
        </>
    )
}