import { NavLink } from "@/types";
import { categories } from "./categories";

export const mainNavLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  {
    label: "Collections",
    href: "/categories",
    children: categories.map((c) => ({
      label: c.name,
      href: `/categories/${c.slug}`,
    })),
  },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Deals", href: "/shop?sale=true" },
];

export const microNavLinks = [
  { label: "Home", href: "/categories/home-kitchen" },
  { label: "Living", href: "/categories/home-kitchen" },
  { label: "Tech", href: "/categories/electronics" },
  { label: "Beauty", href: "/categories/beauty" },
  { label: "Workspace", href: "/categories/office-supplies" },
  { label: "Family", href: "/categories/baby-products" },
  { label: "Travel", href: "/categories/travel" },
  { label: "Outdoor", href: "/categories/outdoor" },
  { label: "Wellness", href: "/categories/health-wellness" },
];

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  ...mainNavLinks,
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Deals", href: "/shop?sale=true" },
  ],
  categories: categories.slice(0, 6).map((c) => ({
    label: c.name,
    href: `/categories/${c.slug}`,
  })),
  customerCare: [
    { label: "Track Order", href: "/track-order" },
    { label: "Returns", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Support", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
