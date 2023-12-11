export type PageType = {
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    slug: Slug;
}

export interface ProductType {
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
    shopifyId: string;
    slug: Slug;
    title: string;
    _type: string;
    inStock: boolean;
    featuredImage: ImageReference;
    images: ImageReference[];
}

interface ImageReference {
    _type: "image";
    asset: AssetReference;
    _key?: string;
}

interface AssetReference {
    _ref: string;
    _type: "reference";
}

interface Slug {
    current: string;
    _type: "slug";
}
