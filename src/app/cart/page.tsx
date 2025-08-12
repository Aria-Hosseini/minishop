'use client';
import CartItemCard from "../components/CartItemCard";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  
  const {cartItems} = useCartContext()

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 h-150">
      
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit sticky top-20">
      <h2 className="text-lg font-bold mb-4">خلاصه سفارش</h2>

      <div className="flex justify-between mb-4">
      <span>مجموع کل:</span>
      <span className="font-bold"> تومان</span>
    </div>

      <div className="mb-4">
        <input
        type="text"
        placeholder="کد تخفیف"
        className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-[#243c82] focus:transition outline-none"
      />
      </div>

      <button className="w-full bg-[#2f55c4] text-white py-3 rounded-lg hover:bg-[#243c82] transition cursor-pointer">
        رفتن به پرداخت
      </button>
    </div>

          <div className="lg:col-span-2 space-y-4">
            {
              cartItems.map((item)=>(
                <CartItemCard key={item.id} {...item} />
              ))
            }
          </div>
          
    </div>
  );
}
