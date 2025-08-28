import Link from "next/link";
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
  const featured = products.slice(0 , 5);

  return (
    <div className="container mx-auto p-6 space-y-10">
    <section
      className="relative rounded-2xl overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/img/hh.jpg')" }}
    >
      <div dir="rtl" className="px-8 py-16 md:py-20 bg-black/40">
        <h1 dir="rtl" className="text-3xl md:text-4xl font-extrabold mb-3">فروشگاه مینی‌شاپ</h1>
        <p dir="rtl" className="text-white/90 mb-6">بهترین قیمت‌ها، ارسال سریع، انتخابی هوشمندانه</p>
        <Link href={"/product"}>
          <button className="cursor-pointer inline-block bg-white text-[#243c82] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#eaeaea] transition">
           مشاهده محصولات
          </button>
        </Link>
      </div>
    </section>


      <section>
          
        <div className="parent max-h-70">
          <div className="div1 flex items-center justify-center text-2xl text-shadow-4xs text-white rounded-2xl h-70 bg-cover bg-center" style={{ backgroundImage: "url('/img/pic1.png')" }}>
          <span className="text-shadow-4xs">انواع تیشرت</span>
          </div>
          <div className="div2 flex items-center justify-center text-2xl text-shadow-4xs text-white rounded-2xl h-70 bg-cover bg-center" style={{ backgroundImage: "url('/img/pic2.png')" }}>
          <span>انواع لباس زنانه</span>
          </div>
          <div className="div6 flex items-center justify-center text-2xl text-shadow-2xs  text-white rounded-2xl h-70 bg-cover bg-center" style={{ backgroundImage: "url('/img/pic3.png')" }}>
          <span>انواع کت و شلوار</span>
          </div>
          <div className="div7 flex items-center justify-center text-2xl text-shadow-2xs  text-white rounded-2xl h-70 bg-cover bg-center" style={{ backgroundImage: "url('/img/pic4.png')" }}>
          <span>انواع هودی</span>
          </div>
        </div>
    
      </section>

      <section id="featured" className="space-y-6">
        <div className="flex flex-row-reverse items-center justify-between bg-[#FCF3F3] p-6">
           <h2 className="text-xl font-bold text-[#D24D42]">محصولات جدید</h2>
            <Link href={"/product"}>
            <button className="cursor-pointer bg-[#D24D42] text-white rounded-md px-6 py-2 hover:bg-[#B13C32] transition">
            مشاهده همه
          </button>
          </Link>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-8xl mx-auto">
          {featured.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
          <ProductCart key={item.id} {...item} />
          </Link>   
          ))}
          {featured.length === 0 && (
            <div className="col-span-full text-center text-gray-500">محصولی برای نمایش وجود ندارد</div>)}
        </div>

      </section>
    </div>
  );
}
