import Image from "next/image";
import AddtoCart from "@/app/components/AddtoCart";
import { Iproduct } from "@/app/components/ProductCart";
import ScrollingText from "@/app/components/singleProductPage/InfinitScrolltitles";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const result = await fetch(`http://localhost:4565/product/${id}`, { cache: "no-store" });
  if (!result.ok) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-gray-700">محصول یافت نشد</div>
      </div>
    );
  }
  const data = (await result.json()) as Iproduct;

  return (
    <div className="w-full flex flex-row items-center justify-center p-6 pb-24 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        <div className="md:col-span-4 order-1 md:order-3">
          <h1 className="text-xl font-bold text-[#4B2775] mb-3 md:hidden text-right">
            {data.name}
          </h1>

          <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md mb-4">
            <img
              src={data.image}
              alt="عکس محصول"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden">
              <img src={data.image} alt="preview" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden">
              <img src={data.image} alt="preview" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-20 rounded-lg bg-gray-100 overflow-hidden">
              <img src={data.image} alt="preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 text-right order-2 md:order-2">
          <h1 className="text-2xl font-bold text-[#4B2775] mb-3 hidden md:block">
            {data.name}
          </h1>

          <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
            <span>امتیاز</span>
            <span className="text-yellow-500">★ ۴.۵</span>
          </div>

          <p className="text-xl text-[#7C87CD] font-semibold mb-4 hidden md:block">
            تومان {data.price}
          </p>

          <div className="mb-6 space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg text-sm">
              دسته بندی:{" "}
              <span className="text-[#4B2775] font-medium">
                {data.category && data.category.trim().length > 0
                  ? data.category
                  : "دسته بندی محصول تعیین نشده"}
              </span>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-sm">
              {data.featurs && data.featurs.trim().length > 0
                ? data.featurs
                : "ویژگی‌های محصول ثبت نشده"}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {data.description && data.description.trim().length > 0
              ? data.description
              : "توضیحات محصول وارد نشده"}
          </p>
        </div>

        <div className="md:col-span-3 bg-[#f1f1f1] rounded-xl shadow-md p-5 flex flex-col justify-between order-4 md:order-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[#4B2775] font-semibold text-sm">مینی شاپ</span>
              <span className="text-gray-600 text-sm">فروشنده</span>
            </div>

            <div dir="rtl" className="text-black text-sm font-medium">
              {data.stock && data.stock > 0 ? (
                data.stock < 2
                  ? `تنها ${data.stock} عدد در انبار باقی مانده`
                  : `عدد موجود است ${data.stock}`
              ) : (
                <span className="text-red-600 font-semibold">ناموجود</span>
              )}
            </div>

            <div className="text-white w-full py-3 rounded-lg text-center font-bold cursor-pointer transition">
              <AddtoCart id={data.id} />
            </div>

            <div dir="rtl" className="border-t pt-3 text-gray-500 text-sm">
              گارانتی ۱۲ ماهه معتبر
            </div>
            <div dir="rtl" className="border-t pt-3 text-gray-500 text-sm">
              ارسال توسط فروشنده
            </div>

            <ScrollingText
              items={[
                "100 نفر این محصول را پسندیده‌اند",
                "ارسال به سراسر کشور",
                "فروش ویژه!",
                "تضمین کیفیت و اصالت کالا",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-md p-4 flex items-center justify-between z-50">
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold text-[#4B2775]">
            تومان {data.price}
          </p>
          <p className="text-sm text-gray-600">
            {data.stock && data.stock > 0 ? `${data.stock} عدد موجود` : "ناموجود"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AddtoCart id={data.id} />
        </div>
      </div>
    </div>
  );
}
