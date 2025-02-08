import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Fetch product data from Sanity
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`
      *[_type == "products" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        price,
        priceWithoutDiscount,
        badge,
        "image": image.asset->url,
        "categoryName": category->title,
        description,
        inventory,
        tags
      }
    `,
    { slug }
  );
}

// Product detail page component
export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  // Destructure `slug` from `params`
  const { slug } = params;

  // Fetch the product using the `slug`
  const product = await getProduct(slug);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex max-w-4xl w-full">
        {/* Image Section */}
        <div className="w-1/2 p-4">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={400}
              height={400}
            />
          )}
        </div>

        {/* Product Details Section */}
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            ${product.price}
          </button>
          {product.priceWithoutDiscount && (
            <p className="text-sm text-gray-500 line-through mt-2">
              Original Price: ${product.priceWithoutDiscount}
            </p>
          )}
          <p className="text-gray-700 mt-4">{product.description}</p>
          <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}