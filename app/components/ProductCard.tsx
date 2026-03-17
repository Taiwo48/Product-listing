import Link from "next/link";

interface Product {
  Id: number;
  Title: string;
  Description: string;
  Price: number;
  Image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={``}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer">
        <img
          src={product.Image}
          alt={product.Title}
          className="w-full h-40 object-contain mb-3"
        />
        <h3 className="font-semibold text-sm line-clamp-2">{product.Title}</h3>
        <p className="text-blue-600 font-bold mt-2">${product.Price}</p>
      </div>
    </Link>
  );
}