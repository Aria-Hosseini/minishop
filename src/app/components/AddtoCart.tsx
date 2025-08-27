"use client";
import { FaTrashCan } from "react-icons/fa6";
import { useCartContext } from "../context/CartContext";
import toast from "react-hot-toast";

interface IAddtoCartProps {
  id: number;
}

export default function AddtoCart({ id }: IAddtoCartProps) {
  const { handleIncreaseProductQnt, getProductQnt ,handleDecreaseProductQnt ,handleRemoveProduct , handleAddtoCart} = useCartContext();

  const handleAdd = (id : number) =>{
    handleAddtoCart(id);
    toast.success('محصول به سبد خرید اضافه شد');
  }
  
  const handleDel = (id : number)=>{
    handleRemoveProduct(id);
    toast.error("محصول از سبد خرید حذف شد")
  }
  return (
    <div className="flex items-center gap-3">

      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <button
          onClick={() => handleDecreaseProductQnt(id)}
          className="px-3 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 text-[13px] font-bold cursor-pointer"
        >
          −
        </button>
        <span className="px-4 py-2 text-gray-800 min-w-[35px] text-[13px] text-center">
          {getProductQnt(id)}
        </span>
        <button
          onClick={() => handleIncreaseProductQnt(id)}
          className="px-3 py-2 text-gray-800 bg-gray-100 hover:bg-gray-300 text-[13px] font-bold cursor-pointer"
        >
          +
        </button>
      </div>
      
      {getProductQnt(id) > 0 && (

      <button className="py-2 px-3 bg-red-700 rounded-md text-amber-50 text-sm cursor-pointer w-[127px] flex flex-row items-center justify-center"
       onClick={()=>handleDel(id)}
       ><FaTrashCan size={19}/></button>

      )}


      {getProductQnt(id) === 0 && (
      <button 
      onClick={()=>handleAdd(id)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-[13px] shadow hover:bg-blue-700 transition-all duration-200 hover:shadow-lg cursor-pointer"
      >
        افزودن به سبد خرید
      </button>
      )}

      
    </div>
  );
}