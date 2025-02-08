"use client";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";



export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="product-box">
        <div className="container">
          <ul>
           
                {
                    products.map((product) => (
                      <li key={product._id}>
                        <div className="card">
                          <Link href={`/product/${product.slug.current}`}>
                              <div className="imageBody">
                              {
                                product.image && (
                                  <Image
                                    src={urlFor(product.image).url()}
                                    alt={product.title}
                                    width={312}
                                    height={312}
                                  />
                                )
                              }
                                {product.badge && (
                                  <div className={`badge ${product.badge.toLowerCase()}`}>
                                    {product.badge}
                                  </div>
                                )}
                              </div>
                              </Link>
                              <div className="details">
                                <div className="proInfo">
                                  <div className="proName">{product.title}</div>
                                  <div className="proPrice">${product.price}</div>
                                </div>
                                <div className="proCart">
                                  <Link href="#">
                                  <button
                                    className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
                                    aria-label={`Add ${product.title} to cart`}
                                    >
                                  <ShoppingCart className="h-5 w-5" />
                                </button>
                                  </Link>
                                </div>
                              </div>
                          
                        </div>
                      </li>
                    )
                    )}
            
          </ul>
        </div>
      </div>
    </div>
  );
}
