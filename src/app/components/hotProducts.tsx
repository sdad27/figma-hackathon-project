import Image from "next/image";
// import exp1 from "../../../public/explore1.png";
// import exp2 from "../../../public/explore2.png";
// import exp3 from "../../../public/explore3.png";
// import exp4 from "../../../public/explore4.png";
// import exp5 from "../../../public/explore5.png";
import { client } from "@/sanity/lib/client";

async function getData() {
    const fetchData = await client.fetch(`*[_type == "explore"]{
        "image1": image1.asset->url,
        "image2": image2.asset->url,
        "image3": image3.asset->url,
        "image4": image4.asset->url,
        "image5": image5.asset->url
        
  }`);
    return fetchData;
  }

export default async function HotProduct() {
    const data = await getData();
  return (
<div className="explore-section">
        <div className="explore-layout">
            <div className="side-texts">EXPLORE NEW AND POPULAR STYLES</div>
        </div>
        <div className="explore-container flex">
            <div className="explore-layout">
                <div className="side-text">EXPLORE NEW AND POPULAR STYLES</div>
            </div>
            <div className="explore-content">
                {data.map((val: { image1: string; image2: string; image3: string; image4: string; image5: string }, index: number) => {
                    return (
                        <div key={index} className="explore-grid">
                        <div className="featured-chair">
                            <Image src={val.image1} alt="exp1" width={300} height={520} className="chair-image"/>
                        </div>

                        <div className="chair-grid">
                           <div className="chair-item">
                                <Image src={val.image2} alt="exp2" width={250} height={250} className="chair-image"/>
                            </div>
                            <div className="chair-item">
                                <Image src={val.image3} alt="exp3" width={250} height={250} className="chair-image"/>
                            </div>
                            <div className="chair-item">
                                <Image src={val.image4} alt="exp4" width={250} height={250} className="chair-image"/>
                            </div>
                            <div className="chair-item">
                                <Image src={val.image5} alt="exp5" width={250} height={250} className="chair-image"/>
                            </div> 

                        </div>
                    </div>
                    )
})}

            </div>
        </div>
    </div>
  );
}

 