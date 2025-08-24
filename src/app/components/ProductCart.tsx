import Image from "next/image";
import BtnAddroCartforCard from "./BtnAddToCartforCard";

export interface Iproduct {
  id: number;
  name: string;
  price: number;
  image: string;
  qnt: number;
  description : string;
  featurs : string;
  category : string;
  stock : number;
}

interface ProductCartProps extends Iproduct {
  onAddToCart?: (product: Iproduct) => void;
}

export default function ProductCart({
  id,
  name,
  price,
  image,
  qnt,

}: ProductCartProps) {

  return (
    <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 bg-white">

      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 text-right">
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="text-gray-700 font-semibold">{price} تومان</p>
      </div>

     <BtnAddroCartforCard id={id} />

    </div>
  );
}
