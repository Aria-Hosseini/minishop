'use client';
import CartItemCard from "../components/CartItemCard";
import { useCartContext } from "../context/CartContext";
import { useEffect , useState } from "react";
import axios from "axios";
import { Iproduct } from "../components/ProductCart";


export default function Cart() {
  
  const {cartItems} = useCartContext()

    const [data, setData] = useState<Iproduct[]>([]);

    useEffect(() => {
        axios(`http://localhost:4565/product`).then((result) =>{
            const{data} = result;
            setData(data);
        })
    }, []);

   
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 h-150">
      
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit sticky top-20">
      <h2 className="text-lg font-bold mb-4">خلاصه سفارش</h2>

      <div className="flex justify-between mb-4">
      <span>مجموع کل:</span>
      <span className="font-bold">{cartItems.reduce((total , item)=>{

        let SelectedProduct = data.find((product)=>product.id == item.id)
        
        return total + (SelectedProduct?.price || 0) * item.qnt
          },0)}
          
        </span>
      </div>

<div className="mb-4 flex">
  <input
    type="text"
    placeholder="کد تخفیف"
    className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:ring focus:ring-[#243c82] outline-none"
  />
  <button
    type="button"
    className="bg-[#2f55c4] text-white px-4 rounded-r-lg hover:bg-[#243c82] transition flex items-center justify-center"
    style={{ aspectRatio: '1', minWidth: '3rem' }} // مربع بودن دکمه
  >
    ✓
  </button>
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