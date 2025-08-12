'use client';
import axios from "axios";
import { useEffect , useState } from "react";
import { Iproduct } from "./ProductCart";

interface CartItemCartprops {
    id: number;
    qnt: number;
}

export default function CartItemCard({id , qnt}:CartItemCartprops ) {

    const [data, setData] = useState({} as Iproduct);
    useEffect(() => {
        axios(`http://localhost:4565/product/${id}`).then((result) =>{
            const{data} = result;
            setData(data);
        })
    }, []);

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4">
      <img src={data.img}  className="w-20 h-20 rounded-lg object-cover" />

      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{data.name} </h3>
        <p className="text-sm text-gray-500"> {data.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
          <span>{qnt}</span>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
      </div>

      <div className="font-bold text-gray-800">
         تومان
      </div>
    </div>
  );
}
