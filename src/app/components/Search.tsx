import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/product?title=${encodeURIComponent(search)}`);
  };

  return (
    <div className="hidden md:flex flex-1 mx-4">
      <div className="relative w-full max-w-md">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="جستجوی محصولات..."
          className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-gray-800 text-right transition-all duration-200"
        />
        <button onClick={handleSearch}>
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
