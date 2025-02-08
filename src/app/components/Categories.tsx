import Image from "next/image";
// import Link from "next/link";

import { client } from "@/sanity/lib/client";

async function getCategoryData() {
  const fetchData = await client.fetch(`*[_type == "categories"]{
  sectionHeading,categoryName,ctaLink,quantity,
  "imageUrl":image.asset->url
}`);
  return fetchData;
}

export default async function Categories() {
  const data = await getCategoryData();
  return (
    <div className="categories-section">
        <h2 className="categories-title">Top Categories</h2>
        <div className="categories-grid">
          {data.map((val: { sectionHeading: string; categoryName: string; ctaLink: string; quantity: number; imageUrl: string }, index: number) => {
            return (
              <div key={index} className="category-card">
                <div className="category-image-container">
                  <Image src={val.imageUrl} alt={val.categoryName} width={424} height={424} className="category-image"/>
                  <div className="category-overlay">
                    <h3 className="category-name">{val.categoryName}</h3>
                    <p className="category-product">{val.quantity} Products</p>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
    </div>
  );
}
