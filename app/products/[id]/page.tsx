import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import Script from "next/script";
import Stripe from "stripe";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Keep your working pattern
  const { id } = await params;

  // Fetch product from Stripe
  const product = await stripe.products.retrieve(id, { expand: ["default_price"] });
  const plainProduct = JSON.parse(JSON.stringify(product));

  // Use proper type instead of 'any'
  const priceData: Stripe.Price = plainProduct.default_price
    ? (plainProduct.default_price as Stripe.Price)
    : { unit_amount: 0, currency: "MYR" } as Stripe.Price;

  // JSON-LD for SEO
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: plainProduct.name,
    image: plainProduct.images,
    description: plainProduct.description || `Buy ${plainProduct.name} from EternalCrystal Malaysia.`,
    sku: plainProduct.id,
    brand: {
      "@type": "Brand",
      name: "EternalCrystal",
    },
    offers: {
      "@type": "Offer",
      url: `https://nextjs-ecommerce-crystal.vercel.app/products/${plainProduct.id}`,
      priceCurrency: priceData.currency.toUpperCase(),
      price: priceData.unit_amount ? priceData.unit_amount / 100 : 0,
      availability: "https://schema.org/InStock",
    },
  };

  // Meta info for SEO
  const title = `${plainProduct.name} | EternalCrystal`;
  const description =
    plainProduct.description ||
    `Buy ${plainProduct.name} from EternalCrystal Malaysia. Delivery across Malaysia & Singapore. Customizable crystals and bracelets.`;

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://nextjs-ecommerce-crystal.vercel.app/products/${plainProduct.id}`} />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {plainProduct.images[0] && <meta property="og:image" content={plainProduct.images[0]} />}
        <meta property="og:url" content={`https://nextjs-ecommerce-crystal.vercel.app/products/${plainProduct.id}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {plainProduct.images[0] && <meta name="twitter:image" content={plainProduct.images[0]} />}
      </head>

      {/* JSON-LD structured data */}
      <Script
        id="product-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />

      {/* Render product detail */}
      <ProductDetail product={plainProduct} />
    </>
  );
}
