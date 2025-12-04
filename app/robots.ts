import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{
            userAgent: "*",
            allow: "/",
            disallow: "/admin",
        },
        {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/admin",
        }],
        sitemap: "https://nextjs-ecommerce-crystal.vercel.app//sitemap.xml",
    };
}