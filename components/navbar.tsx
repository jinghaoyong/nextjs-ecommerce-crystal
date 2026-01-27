"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
Bars3Icon,
XMarkIcon,
ShoppingCartIcon,
InformationCircleIcon,
PencilSquareIcon,
SparklesIcon,
AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiXiaohongshu } from "react-icons/si";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /** promo animation state */
  const [animatePromo, setAnimatePromo] = useState(false);
  const promoRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Products", href: "/products", icon: SparklesIcon },
    { label: "About Us", href: "/about", icon: InformationCircleIcon },
    { label: "Blogs", href: "/blog", icon: PencilSquareIcon },
    { label: "Custom", href: "/custom", icon: AdjustmentsVerticalIcon },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  /** 🔥 RELIABLE TAB / FOCUS AWARE ANIMATION */
  useEffect(() => {
    const replay = () => {
      setAnimatePromo(false);

      // force layout so transition can restart
      promoRef.current?.getBoundingClientRect();

      requestAnimationFrame(() => {
        setAnimatePromo(true);
      });
    };

    replay(); // first load

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        replay();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("focus", replay);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("focus", replay);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      {/* ===== TOP BAR ===== */}
      <div className="hidden md:flex relative items-center px-6 py-2 text-sm text-gray-500">
        {/* Left socials */}
        <div className="flex gap-4 items-center">
          {/* <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-[#536B8F]"
          >
            <FaFacebookF className="h-4 w-4" />
          </a> */}


          <a
            href="https://www.instagram.com/eternalcrystal_/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-[#536B8F]"
          >
            <FaInstagram className="h-4 w-4" />
          </a>
          
          <a
            href="https://xhslink.com/m/5Te6oJtVVS8"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-[#536B8F]"
          >
            <SiXiaohongshu className="h-4 w-4" />
          </a>
        </div>

        {/* TRUE CENTER promo (do NOT animate this container) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div
            ref={promoRef}
            className={clsx(
              "transition-all duration-700 ease-out",
              animatePromo
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
          >
            <p className="text-sm font-medium tracking-wide text-[#536B8F]">
              10% OFF FIRST ORDER — CODE
              <span className="ml-1 rounded bg-[#EEF2F7] px-2 py-0.5 font-semibold tracking-wider text-[#2F3E5C]">
                DA10OFF
              </span>
            </p>
          </div>
        </div>

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
        <Link
  href="/"
  className="text-xl tracking-wide flex items-center gap-1"
>
  {/* <span className="font-light text-[#536B8F]"></span> */}
  <span className="font-extrabold text-[#536B8F] drop-shadow-[0_1px_2px_rgba(83,107,143,0.4)]">
    Eternal Crystal
  </span>
</Link>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 text-lg",
                  isActive(item.href)
                    ? "text-[#536B8F] font-semibold"
                    : "text-gray-700"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

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
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-blue-600 py-3 text-center text-white font-semibold"
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