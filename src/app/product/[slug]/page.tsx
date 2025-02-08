import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
interface ProductPageProps {

params: Promise<{ slug: string }>;

}

async function getProduct(slug: string): Promise<Product> {

  return client.fetch( groq `
    *[_type == "products"]{
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
    `,{slug}
  )
}


export default async function ProductDetail({params}:ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex max-w-4xl w-full">
        {
          product.image && (
            <Image src={urlFor(product.image).url()} alt={product.title} width={400} height={400} />
          )
        }
        {/* Image Section */}
        <div className="w-1/2 p-4">
          {
            product.image && (
              <Image src={urlFor(product.image).url()} alt={product.title} width={400} height={400} />
            )
          }
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
          <p className="text-gray-700 mt-4">
            {product.description}
          </p>
          <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            Add To Cart
          </button>
          {/* {product.isNew && (
            <span className="text-sm text-green-600 font-medium mt-2 block">
              New Arrival
            </span>
          )}
          {product.isSale && (
            <span className="block text-sm text-red-600 font-medium mt-2">
              On Sale!
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
}
