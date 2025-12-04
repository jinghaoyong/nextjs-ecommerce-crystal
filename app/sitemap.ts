import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://nextjs-ecommerce-crystal.vercel.app//', lastModified: new Date(), changeFrequency: 'never', priority: 1.0 },
        { url: 'https://nextjs-ecommerce-crystal.vercel.app//products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: 'https://nextjs-ecommerce-crystal.vercel.app//about', lastModified: new Date() },
        { url: 'https://nextjs-ecommerce-crystal.vercel.app//contact', lastModified: new Date() },
    ];
}