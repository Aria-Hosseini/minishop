import Link from "next/link";
import ProductCart, { Iproduct } from "../components/ProductCart";

interface IstoreProps {
  params : Promise<{}>
  searchParams : {title : string}
}

export default async function ProductArchive({searchParams}: IstoreProps) {

  const title = (await searchParams).title ?? ""

  const result = await fetch(`http://localhost:4565/product?_title=${title}`);
  const data = (await result.json()) as Iproduct[];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-right">آرشیو محصولات</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {data.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <ProductCart key={product.id} {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
