import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
        <div>
           <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
        </nav>
    );
};
