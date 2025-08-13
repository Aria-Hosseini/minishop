import AddtoCart from "@/app/components/AddtoCart";
import { Iproduct } from "@/app/components/ProductCart";

interface ProductProps {
  params :Promise <{id : string}>;
  searchParams : Promise <{}>
  
}
export default async function SingleProduct({params}:ProductProps) {

  const {id} = await params;

  const result = await fetch(`http://localhost:4565/product/${id}`);
  const data = await result.json() as Iproduct;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        <div className="text-right order-2 md:order-1">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-4">
            تومان {data.price}  
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            توضیحات
          </p>
          
          <AddtoCart id={data.id} />
          
        </div>

        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden order-1 md:order-2">
          <img
            src={data.image}
            alt="عکس محصول"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}