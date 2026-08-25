"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Heart, Menu, ShoppingBag, User, Search, X } from "lucide-react";
import { company } from "@/data/company";
import { mainNavLinks, microNavLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { searchProducts } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const searchResults = searchQuery.length > 0 ? searchProducts(searchQuery).slice(0, 5) : [];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-4 z-50 mx-auto max-w-[calc(100%-2rem)] transition-all duration-300 lg:max-w-6xl xl:max-w-7xl",
          scrolled && "top-2"
        )}
      >
        <div
          className={cn(
            "rounded-sm border border-border/60 bg-background/95 shadow-sm transition-all duration-300",
            scrolled && "border-border/80 bg-background/90 shadow-md backdrop-blur-md"
          )}
        >
          <Container className="px-4 sm:px-6">
            <div className={cn("flex items-center gap-4 transition-all duration-300", scrolled ? "h-12 lg:h-14" : "h-14 lg:h-16")}>
              <Link href="/" className="shrink-0">
                <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs lg:text-sm">
                  WEAVER
                  <span className="mx-1.5 font-normal text-muted-foreground">/</span>
                  ILLUMINATION
                </span>
              </Link>

              <nav className="hidden flex-1 justify-center lg:flex">
                <ul className="flex items-center gap-1">
                  {mainNavLinks.map((link) => (
                    <li
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        className="px-3 py-2 font-heading text-xs font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                      {link.children && activeDropdown === link.label && (
                        <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] border border-border bg-card py-2 shadow-lg">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-accent"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="ml-auto flex items-center gap-0.5">
                <div ref={searchRef} className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setSearchOpen(!searchOpen)}
                    aria-label="Search"
                  >
                    <Search className="h-[17px] w-[17px]" />
                  </Button>

                  {searchOpen && (
                    <div className="absolute right-0 top-full z-50 mt-2 w-72 border border-border bg-card p-3 shadow-lg sm:w-80">
                      <form onSubmit={handleSearchSubmit}>
                        <Input
                          type="search"
                          placeholder="Search products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                          className="h-9 text-sm"
                        />
                      </form>
                      {searchQuery.trim().length > 0 && (
                        <div className="mt-2 max-h-64 overflow-y-auto">
                          {searchResults.length > 0 ? (
                            searchResults.map((product) => (
                              <Link
                                key={product.id}
                                href={`/product/${product.slug}`}
                                className="flex items-center gap-3 px-1 py-2 transition-colors hover:bg-muted"
                                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                              >
                                <div className="relative h-9 w-9 shrink-0 overflow-hidden border border-border">
                                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="36px" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{product.name}</p>
                                  <p className="text-xs text-muted-foreground">{formatPrice(product.salePrice ?? product.price)}</p>
                                </div>
                              </Link>
                            ))
                          ) : (
                            <p className="px-1 py-2 text-sm text-muted-foreground">No results found.</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Button variant="ghost" size="icon" asChild className="relative hidden h-9 w-9 sm:inline-flex">
                  <Link href="/wishlist" aria-label="Wishlist">
                    <Heart className="h-[17px] w-[17px]" />
                    {wishlist.length > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center bg-accent text-[10px] font-bold text-accent-foreground">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                </Button>

                <Button variant="ghost" size="icon" asChild className="hidden h-9 w-9 sm:inline-flex">
                  <Link href="/profile" aria-label="Account">
                    <User className="h-[17px] w-[17px]" />
                  </Link>
                </Button>

                <Button variant="ghost" size="icon" asChild className="relative h-9 w-9">
                  <Link href="/cart" aria-label="Cart">
                    <ShoppingBag className="h-[17px] w-[17px]" />
                    {itemCount > 0 && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center bg-primary text-[10px] font-bold text-primary-foreground">
                        {itemCount}
                      </span>
                    )}
                  </Link>
                </Button>

                <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? <X className="h-[17px] w-[17px]" /> : <Menu className="h-[17px] w-[17px]" />}
                </Button>
              </div>
            </div>

            <nav className="hidden border-t border-border/50 lg:block">
              <ul className="flex items-center justify-center gap-6 py-2">
                {microNavLinks.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative pb-1 font-heading text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground",
                          isActive && "text-foreground"
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Container>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background/98 pt-24 lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-3 font-heading text-sm font-medium uppercase tracking-wider"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="ml-4 space-y-0.5 border-l border-border pl-4">
                      {link.children.slice(0, 8).map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-3 py-2 text-sm text-muted-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-4">
              <p className="mb-3 px-3 font-heading text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">Categories</p>
              <div className="flex flex-wrap gap-2 px-3">
                {microNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="border border-border px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
