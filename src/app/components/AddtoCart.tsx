"use client";
import { FaTrashCan } from "react-icons/fa6";
import { useCartContext } from "../context/CartContext";

interface IAddtoCartProps {
  id: number;
}

export default function AddtoCart({ id }: IAddtoCartProps) {
  const { handleIncreaseProductQnt, getProductQnt ,handleDecreaseProductQnt ,handleRemoveProduct , handleAddtoCart} = useCartContext();

  return (
    <div className="flex items-center gap-3">

      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => handleDecreaseProductQnt(id)}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-bold cursor-pointer"
        >
          −
        </button>
        <span className="px-4 py-2 min-w-[40px] text-center">
          {getProductQnt(id)}
        </span>
        <button
          onClick={() => handleIncreaseProductQnt(id)}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-bold cursor-pointer"
        >
          +
        </button>
      </div>
      {getProductQnt(id) > 0 && (

      <button className="py-2 px-3 bg-red-700 rounded-md text-amber-50 text-sm cursor-pointer"
       onClick={()=>handleRemoveProduct(id)}
       ><FaTrashCan size={22}/></button>

      )}


      <button 
      onClick={()=>handleAddtoCart (id)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-200 hover:shadow-lg cursor-pointer"
      >
        افزودن به سبد خرید
      </button>
      
    </div>
  );
}