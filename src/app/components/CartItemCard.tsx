'use client';
import axios from "axios";
import { useEffect , useState } from "react";
import { Iproduct } from "./ProductCart";
import { useCartContext } from "../context/CartContext";
import { FaTrashCan } from "react-icons/fa6";
import toast from "react-hot-toast";

interface CartItemCartprops {
    id: number;
    qnt: number;
}

export default function CartItemCard({id , qnt}:CartItemCartprops ) {

  const {handleIncreaseProductQnt , handleDecreaseProductQnt , handleRemoveProduct} = useCartContext()

  const handledeletcart = (id : number) => {
    handleRemoveProduct(id);
    toast.error("محصول از سبد خرید حذف شد");
  }

    const [data, setData] = useState({} as Iproduct);
    useEffect(() => {
        axios(`http://localhost:4565/product/${id}`).then((result) =>{
            const{data} = result;
            setData(data);
        })
    }, []);

  return (
 
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-row-reverse items-center gap-4">
      <img
        src={data.image}
        alt={data.name}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="flex-1 text-right">
        <h3 className="font-bold text-gray-800">{data.name}</h3>
        <p className="text-sm text-gray-500">{data.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={()=> handleDecreaseProductQnt(id)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <span>{qnt}</span>
        <button onClick={()=> handleIncreaseProductQnt(id)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>

       <button className="py-2 px-3 text-red-700 text-sm cursor-pointer"
       onClick={()=>handledeletcart(id)}
       ><FaTrashCan size={22}/></button>
      </div>
    </div>
    
 
    );
  }