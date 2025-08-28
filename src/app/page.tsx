import ProductCart, { Iproduct } from "./components/ProductCart";

async function getProducts(): Promise<Iproduct[]> {
  try {
    const res = await fetch("http://localhost:4565/product", { cache: "no-store" });
    if (!res.ok) return [] as Iproduct[];
    return (await res.json()) as Iproduct[];
  } catch {
    return [] as Iproduct[];
  }
}

export default async function Home() {
  const products = await getProducts();
  const featured = products.slice(0, 4);

  return (
    <div className="container mx-auto p-6 space-y-10">
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#2f55c4] to-[#243c82] text-white">
        <div className="px-8 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">فروشگاه مینی‌شاپ</h1>
          <p className="text-white/90 mb-6">بهترین قیمت‌ها، ارسال سریع، انتخابی هوشمندانه</p>
          <a href="#featured" className="cursor-pointer inline-block bg-white text-[#243c82] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#eaeaea] transition">
            مشاهده محصولات
          </a>
        </div>
      </section>

      <section id="featured" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">محصولات پیشنهادی</h2>
          <a href="#" className="text-[#2f55c4] hover:underline">مشاهده همه</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCart key={p.id} {...p} />
          ))}
          {featured.length === 0 && (
            <div className="col-span-full text-center text-gray-500">محصولی برای نمایش وجود ندارد</div>
          )}
        </div>
      </section>
    </div>
  );
}
