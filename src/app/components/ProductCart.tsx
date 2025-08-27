"use client";
import Image from "next/image";
import { IoCartSharp } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export interface Iproduct {
  id: number;
  name: string;
  price: number;
  image: string;
  qnt: number;
  description: string;
  featurs: string;
  category: string;
  stock: number;
}

interface ProductCartProps extends Iproduct {
  onAddToCart?: (product: Iproduct) => void;
}

export default function ProductCart({
  id,
  name,
  price,
  image,
  stock,
}: ProductCartProps) {
  const { handleAddtoCart } = useCartContext();

  const handleAdd = (id: number) => {
    handleAddtoCart(id);
    toast.success("محصول به سبد خرید اضافه شد");
  };

  return (
    <div className="w-64 bg-[#fcfcfc] rounded-[18px] overflow-hidden border-4 border-[#e2ca83]/70 shadow-md transition-all duration-500 flex flex-col
        hover:scale-[1.03] hover:rotate-[1deg] hover:-translate-y-2 hover:shadow-[20px_20px_40px_0_rgba(226,202,131,0.6)]
        hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-3deg)]">

      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover p-3 mb-10 shadow-lg transition-transform duration-500 border-b-4 border-[#e2ca83]/70"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-4 text-right">
        <h2 className="text-base font-bold text-[#150705] mb-1 hover:text-[#d24d41] transition-colors duration-300">
          {name}
        </h2>

        <p className="text-sm text-gray-600 mb-2">
          موجودی:{" "}
          <span
            className={`font-semibold ${
              stock > 1 ? "text-green-600" : "text-red-600"
            }`}
          >
            {stock > 0 ? `${stock} عدد` : "ناموجود"}
          </span>
        </p>

        <p className="text-[#d24d41] font-bold text-lg mb-3">
          {price} تومان
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={() => handleAdd(id)}
            className="cursor-pointer flex items-center gap-2 bg-[#d24d41] hover:bg-[#150705] text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md"
          >
            <IoCartSharp size={18} />
            <span>افزودن به سبد</span>
          </button>
        </div>
      </div>
    </div>
  );
}
