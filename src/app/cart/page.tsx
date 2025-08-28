'use client';
import CartItemCard from "../components/CartItemCard";
import { useCartContext } from "../context/CartContext";
import { useEffect , useState } from "react";
import axios from "axios";
import { Iproduct } from "../components/ProductCart";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Cart() {
  
  const {cartItems} = useCartContext()

    const [data, setData] = useState<Iproduct[]>([]);

    useEffect(() => {
        axios(`http://localhost:4565/product`).then((result) =>{
            const{data} = result;
            setData(data);
        })
    }, []);

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            toast.error("سبد خرید شما خالی است!");
        }

        try {
            const orderItems = cartItems.map(item => {
                const product = data.find(p => p.id === item.id);
                return {
                    id: item.id,
                    name: product?.name || 'نامشخص',
                    price: product?.price || 0,
                    quantity: item.qnt,
                    totalPrice: (product?.price || 0) * item.qnt
                };
            });

            const totalAmount = orderItems.reduce((sum, item) => sum + item.totalPrice, 0);

            const response = await axios.post('/api/checkout', {
                products: orderItems,
                totalAmount: totalAmount,
                orderDate: new Date().toISOString()
            });

            if (response.status === 200 && cartItems.length > 0) {
              toast.success("سفارش شما با موفقیت ثبت شد!");
            }

        } catch (error) {
            toast.error("خطا در ثبت سفارش. لطفاً دوباره تلاش کنید.");
        }
    };

   
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



      <button 
        onClick={handleCheckout}
        className="w-full bg-[#2f55c4] text-white py-3 rounded-lg hover:bg-[#243c82] transition cursor-pointer"
      >
        رفتن به پرداخت
      </button>
    </div>

          <div className="lg:col-span-2 space-y-10">
            {
              cartItems.map((item)=>(
                <Link key={item.id} href={`/product/${item.id}`}>
                <CartItemCard key={item.id} {...item} />
                </Link>
              ))
            }
          </div>
          
    </div>
  );
}