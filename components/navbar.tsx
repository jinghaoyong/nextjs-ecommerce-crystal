"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blog" },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      {/* ===== TOP BAR ===== */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-sm text-gray-500">
        <div className="flex gap-4">
          <a className="hover:text-blue-600" href="#">FB</a>
          <a className="hover:text-blue-600" href="#">IG</a>
          <a className="hover:text-blue-600" href="#">TT</a>
        </div>

        <p className="font-medium text-blue-600">
          10% OFF FIRST ORDER — CODE: DA10OFF
        </p>

        <input
          placeholder="Search products..."
          className="border rounded-full px-4 py-1 text-sm focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Eternal<span className="text-blue-600">Crystal</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative font-medium transition-colors",
                isActive(item.href)
                  ? "text-blue-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* <Link
            href="/products"
            className="ml-4 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Shop Now
          </Link> */}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
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
