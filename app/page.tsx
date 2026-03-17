"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Search from "./components/Search";

interface Product {
  Id: number;
  Title: string;
  Description: string;
  Price: number;
  Image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        
        const formatted = data.map((p: any) => ({
          Id: p.id,
          Title: p.title,
          Description: p.description,
          Price: p.price,
          Image: p.image,
        }));

        setProducts(formatted);
        setFiltered(formatted);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) return setFiltered(products);
    setFiltered(products.filter((p) => p.Title.toLowerCase().includes(query.toLowerCase())));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading products...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load products. Please try again.
      </div>
    );

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <Search onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtered.map((product) => (
          <ProductCard key={product.Id} product={product} />
        ))}
      </div>
    </main>
  );
}