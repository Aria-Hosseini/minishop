"use client";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type ProductForm = {
  name: string;
  price: number | string;
  image: string;
  description: string;
  featurs: string;
  category: string;
  stock: number | string;
};

type ProductListItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  featurs: string;
  category: string;
  stock: number;
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"add" | "list">("add");
  const [form, setForm] = useState<ProductForm>({
    name: "",
    price: "",
    image: "",
    description: "",
    featurs: "",
    category: "",
    stock: "",
  });
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductListItem[]>([]);
  const [fetching, setFetching] = useState(false);

  const isFormValid = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      Number(form.price) > 0 &&
      form.image.trim().length > 0 &&
      form.category.trim().length > 0 &&
      Number(form.stock) >= 0
    );
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("تمام فیلدهای ضروری را تکمیل کنید");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        price: Number(form.price),
        image: form.image.trim(),
        description: form.description.trim(),
        featurs: form.featurs.trim(),
        category: form.category.trim(),
        stock: Number(form.stock),
        qnt: 0,
      };
      await axios.post("http://localhost:4565/product", payload, { headers: { "Content-Type": "application/json" } });
      toast.success("محصول با موفقیت افزوده شد");
      setForm({ name: "", price: "", image: "", description: "", featurs: "", category: "", stock: "" });
      // Refresh list if on list tab
      if (activeTab === "list") {
        await fetchProducts();
      }
    } catch (err) {
      toast.error("خطا در افزودن محصول");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    setFetching(true);
    try {
      const { data } = await axios.get<ProductListItem[]>("http://localhost:4565/product");
      setProducts(data);
    } catch (err) {
      toast.error("خطا در دریافت لیست محصولات");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (activeTab === "list") {
      fetchProducts();
    }
  }, [activeTab]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">داشبورد ادمین</h1>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("add")}
          className={`cursor-pointer px-4 py-2 rounded-lg border ${
            activeTab === "add" ? "bg-[#2f55c4] text-white" : "bg-white"
          }`}
        >
          افزودن محصول
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`cursor-pointer px-4 py-2 rounded-lg border ${
            activeTab === "list" ? "bg-[#2f55c4] text-white" : "bg-white"
          }`}
        >
          مشاهده محصولات
        </button>
      </div>

      {activeTab === "add" && (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">نام محصول</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block mb-1">قیمت</label>
            <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block mb-1">آدرس تصویر</label>
            <input name="image" value={form.image} onChange={handleChange} className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block mb-1">دسته بندی</label>
            <input name="category" value={form.category} onChange={handleChange} className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block mb-1">موجودی</label>
            <input name="stock" type="number" value={form.stock} onChange={handleChange} className="w-full border rounded-lg p-2" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">توضیحات</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full border rounded-lg p-2" rows={3} />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">ویژگی‌ها</label>
            <textarea name="featurs" value={form.featurs} onChange={handleChange} className="w-full border rounded-lg p-2" rows={2} />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button disabled={loading || !isFormValid} type="submit" className="cursor-pointer bg-[#2f55c4] text-white px-6 py-2 rounded-lg disabled:opacity-50">
              {loading ? "در حال ذخیره..." : "ذخیره"}
            </button>
          </div>
        </form>
      )}

      {activeTab === "list" && (
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">لیست محصولات</h2>
            <button onClick={fetchProducts} className="cursor-pointer bg-[#2f55c4] text-white px-4 py-2 rounded-lg disabled:opacity-50" disabled={fetching}>
              {fetching ? "در حال به‌روزرسانی..." : "به‌روزرسانی"}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-right">
              <thead>
                <tr className="border-b">
                  <th className="p-2">#</th>
                  <th className="p-2">نام</th>
                  <th className="p-2">قیمت</th>
                  <th className="p-2">دسته</th>
                  <th className="p-2">موجودی</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, idx) => (
                  <tr key={p.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{idx + 1}</td>
                    <td className="p-2">{p.name}</td>
                    <td className="p-2">{p.price}</td>
                    <td className="p-2">{p.category}</td>
                    <td className="p-2">{p.stock}</td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td className="p-4 text-center" colSpan={5}>محصولی یافت نشد</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}