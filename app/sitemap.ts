import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://eternalcrystal.vercel.app/', lastModified: new Date(), changeFrequency: 'never', priority: 1.0 },
        { url: 'https://eternalcrystal.vercel.app/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: 'https://eternalcrystal.vercel.app/about', lastModified: new Date() },
        { url: 'https://eternalcrystal.vercel.app/contact', lastModified: new Date() },
    ];
}