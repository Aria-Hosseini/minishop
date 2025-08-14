"use client";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name, files } = e.target as HTMLInputElement;

    if (name === "image" && files && files.length > 0) {
      setNewProduct({ ...newProduct, image: URL.createObjectURL(files[0]) });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(newProduct);

    try {
      await axios.post("http://localhost:4565/product", {
        id: Math.floor(Math.random() * 1000).toString(),
        image: newProduct.image,
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
      });

      alert("محصول با موفقیت اضافه شد!");
    } catch (error) {
      console.error("خطا در ارسال محصول:", error);
    }
  };

  return (
    <main className="flex-1 p-6 overflow-auto">
      <h1 className="text-2xl font-bold mb-6">افزودن محصول جدید</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-4 max-w-lg"
      >
        <div>
          <label className="block mb-1 text-sm font-medium">نام محصول</label>
          <input
            name="name"
            type="text"
            className="w-full border rounded p-2"
            onChange={handleChangeProduct}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">قیمت</label>
          <input
            name="price"
            type="number"
            className="w-full border rounded p-2"
            onChange={handleChangeProduct}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">توضیحات</label>
          <textarea
            name="description"
            className="w-full border rounded p-2"
            onChange={handleChangeProduct}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">تصویر محصول</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChangeProduct}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ذخیره محصول
        </button>
      </form>
    </main>
  );
}
