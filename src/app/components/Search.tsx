"use client";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Array<{ id: number; name: string }>>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const router = useRouter();

  const debouncedValue = useDebounce(search, 300);

  useEffect(() => {
    const q = debouncedValue.trim();
    if (q.length === 0) {
      setResults([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    // json-server supports name_like filter for partial match
    fetch(`http://localhost:4565/product?name_like=${encodeURIComponent(q)}`, {
      signal: controller.signal,
      cache: 'no-store',
    })
      .then(async (res) => (res.ok ? res.json() : []))
      .then((data: Array<{ id: number; name: string }>) => {
        setResults(data.slice(0, 8));
        setOpen(true);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [debouncedValue]);

  const handleSearch = () => {
    if (search.trim().length === 0) return;
    router.push(`/product?title=${encodeURIComponent(search.trim())}`);
    setOpen(false);
  };

  return (
    <div className="hidden md:flex flex-1 mx-4">
      <div className="relative w-full max-w-md">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          type="text"
          placeholder="جستجوی محصولات..."
          className="w-full py-2 pr-10 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white text-gray-800 text-right transition-all duration-200"
        />
        <button onClick={handleSearch}>
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </button>

        {open && (
          <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto text-right">
            {loading && (
              <div className="px-4 py-3 text-sm text-gray-500">در حال جستجو...</div>
            )}
            {!loading && results.length === 0 && (
              <div className="px-4 py-3 text-sm text-gray-500">موردی یافت نشد</div>
            )}
            {!loading && results.map((item) => (
              <button
                key={item.id}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  router.push(`/product/${item.id}`);
                  setOpen(false);
                }}
                className="cursor-pointer w-full text-right px-4 py-2 hover:bg-gray-50 text-gray-800"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
