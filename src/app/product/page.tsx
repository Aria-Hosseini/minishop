import Link from "next/link";
import ProductCart, { Iproduct } from "../components/ProductCart";

export default async function ProductArchive() {
  
  const result = await fetch("http://localhost:4565/product");
  const data = await result.json() as Iproduct[];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-right">آرشیو محصولات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
          <ProductCart key={product.id} {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
