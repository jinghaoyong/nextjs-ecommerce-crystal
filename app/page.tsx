import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const products  = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 5,
  });
  console.log("Home()",products);
  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to My Ecommerce Store</h2>
            <p>Discover our exclusive collection of products.</p>
            <Button asChild variant="default">
              
              <Link href="/products">Browse all products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
