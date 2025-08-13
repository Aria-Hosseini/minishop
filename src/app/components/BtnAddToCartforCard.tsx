"use client";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../context/CartContext";

interface BtnAddToCartForCardProps {
  id: number;
}

export default function BtnAddroCartforCard ({ id }: BtnAddToCartForCardProps){
    
        const {handleAddtoCart} = useCartContext()

    return(
        <>
          <button
          onClick={()=>handleAddtoCart(id)}
          className="cursor-pointer absolute top-3 right-3 bg-[#2f55c4] text-amber-50 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 flex items-center justify-center z-100 hover:bg-amber-50 hover:text-[#2f55c4]"
        >
          <FiShoppingCart size={22} />
        </button>
        </>
    )
}