"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  InformationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiXiaohongshu } from "react-icons/si";

import { Button } from "@/components/ui/button";
import clsx from "clsx";


export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: "Products",
      href: "/products",
      icon: Squares2X2Icon,
    },
    {
      label: "About Us",
      href: "/about",
      icon: InformationCircleIcon,
    },
    {
      label: "Blogs",
      href: "/blog",
      icon: PencilSquareIcon,
    },
  ];


  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      {/* ===== TOP BAR ===== */}
      <div className="hidden md:flex relative items-center px-6 py-2 text-sm text-gray-500">
        {/* Left socials */}
        <div className="flex gap-4 items-center">
          <a className="hover:text-[#536B8F] transition-colors" href="#">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a className="hover:text-[#536B8F] transition-colors" href="#">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a className="hover:text-[#536B8F] transition-colors" href="#">
            <SiXiaohongshu className="h-4 w-4" />
          </a>
        </div>


        {/* TRUE CENTER promo */}
        <p className="absolute left-1/2 -translate-x-1/2 font-medium tracking-wide text-[#536B8F]">
          10% OFF FIRST ORDER — CODE: <span className="font-semibold">DA10OFF</span>
        </p>

        {/* Right search */}
        <div className="ml-auto">
          <input
            placeholder="Search products..."
            className="border rounded-full px-4 py-1 text-sm focus:ring-1 focus:ring-[#536B8F]"
          />
        </div>
      </div>


      {/* ===== MAIN NAV ===== */}
      <div className="relative mx-auto flex items-center px-4 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Eternal<span className="text-blue-600">Crystal</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "flex items-center gap-3 text-lg",
                  isActive(item.href)
                    ? "text-[#536B8F] font-semibold"
                    : "text-gray-700"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>

            );
          })}
        </nav>


        {/* Right Icons */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>

      </div>

      {/* ===== MOBILE MENU ===== */}
      {mobileOpen && (
        <nav className="md:hidden border-t bg-white">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "text-lg",
                  isActive(item.href)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/products"
              className="mt-2 rounded-full bg-blue-600 py-3 text-center text-white font-semibold"
            >
              Shop Now
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}

//old code which follow tutorial
// export const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState<boolean>(false);
//   const { items } = useCartStore();
//   const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMobileOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow">
//       <div className="container mx-auto flex items-center justify-between px-4 py-4">
//         <Link href="/" className="hover:text-blue-600">
//           My Ecommerce
//         </Link>
//         <div className="hidden md:flex space-x-6">
//           <Link href="/">Home</Link>
//           <Link href="/products" className="hover:text-blue-600">
//             Products
//           </Link>
//           <Link href="/checkout" className="hover:text-blue-600">
//             Checkout
//           </Link>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link href="/checkout" className="relative">
//             <ShoppingCartIcon className="h-6 w-6" />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//           <Button
//             variant="ghost"
//             className="md:hidden"
//             onClick={() => setMobileOpen((prev) => !prev)}
//           >
//             {mobileOpen ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <Bars3Icon className="h-6 w-6" />
//             )}
//           </Button>
//         </div>
//       </div>
//       {mobileOpen && (
//         <nav className="md:hidden bg-white shadow-md">
//           <ul className="flex flex-col p-4 space-y-2">
//             <li>
//               <Link href="/" className="block hover:text-blue-600">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/products" className="block hover:text-blue-600">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link href="/checkout" className="block hover:text-blue-600">
//                 Checkout
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </nav>
//   );
// };