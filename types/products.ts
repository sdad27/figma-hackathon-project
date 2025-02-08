export interface Product {
    _id: string;
    title: string;
    _type: "products";
    price: number;
    priceWithoutDiscount: number;
    badge: string;
    image?: {
        asset: {
            _ref: string;
            type: "image";
        };
    }
    description?: string;
    category?: {
        _ref: string;
        type: "categories";
    };
    slug: {
        _type: "slug";
        current: string;
    }
}