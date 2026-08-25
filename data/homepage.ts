import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-main.jpg",
    headline: "FIND THE\nLIGHT.",
    description:
      "Thoughtful products, everyday essentials and beautiful discoveries for the spaces and moments that matter.",
    ctaText: "Discover More",
    ctaLink: "/shop",
    secondaryCtaText: "Shop New Arrivals",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const editorialStatement = {
  heading: "BRING MORE\nLIGHT INTO\nEVERYDAY.",
  description:
    "A curated collection of products designed to make everyday spaces, routines and moments a little better.",
};

export const shopBySpace = [
  {
    id: "home",
    title: "AT HOME",
    description: "Objects that make everyday spaces feel better.",
    image: "/spaces/at-home.jpg",
    href: "/categories/home-kitchen",
    aspect: "tall" as const,
  },
  {
    id: "work",
    title: "AT WORK",
    description: "Tools and details for a clearer workspace.",
    image: "/spaces/at-work.jpg",
    href: "/categories/office-supplies",
    aspect: "wide" as const,
  },
  {
    id: "go",
    title: "ON THE GO",
    description: "Compact essentials for life in motion.",
    image: "/spaces/on-the-go.jpg",
    href: "/categories/travel",
    aspect: "square" as const,
  },
  {
    id: "outside",
    title: "OUTSIDE",
    description: "Gear for fresh air and open horizons.",
    image: "/spaces/outside.jpg",
    href: "/categories/outdoor",
    aspect: "tall" as const,
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "sparkles",
    title: "Thoughtful Selection",
    description: "Every product chosen for quality, purpose, and everyday value.",
  },
  {
    id: "2",
    icon: "tag",
    title: "Everyday Value",
    description: "Fair prices on useful things you'll reach for again and again.",
  },
  {
    id: "3",
    icon: "shopping-bag",
    title: "Easy Shopping",
    description: "Simple browsing, secure checkout, and reliable delivery.",
  },
  {
    id: "4",
    icon: "compass",
    title: "Fresh Discoveries",
    description: "New arrivals and seasonal finds added regularly.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "linen-throw-blanket",
  "ceramic-pour-over-set",
  "insulated-travel-tumbler",
  "bamboo-bath-mat",
  "merino-wool-scarf",
  "packing-cube-set",
] as const;

export const homepageBestsellerSlugs = [
  "cast-iron-dutch-oven",
  "linen-throw-blanket",
  "hiking-daypack",
  "jojoba-face-oil",
  "weighted-sleep-blanket",
  "digital-photo-frame",
  "bath-towel-set",
  "nursery-sound-machine",
] as const;

export const homepageFeaturedSlugs = [
  "cast-iron-dutch-oven",
  "linen-throw-blanket",
  "ceramic-pour-over-set",
  "hiking-daypack",
  "jojoba-face-oil",
] as const;

export const homepageNewArrivalSlugs = [
  "portable-projector",
  "silk-sleep-mask-set",
  "woven-storage-baskets",
  "outdoor-lawn-game-set",
  "bedside-reading-lamp",
  "travel-neck-pillow",
  "magnetic-tile-set",
  "acupressure-mat-set",
] as const;

export const illuminationEditSlugs = {
  oversized: "cast-iron-dutch-oven",
  lifestyle: "/spaces/edit-lifestyle.jpg",
  medium: ["linen-throw-blanket", "jojoba-face-oil"],
  small: "silk-sleep-mask-set",
};

export const goldenHourDeal = {
  productSlug: "insulated-travel-tumbler",
  title: "GOLDEN HOUR",
};

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Upgrade Your Everyday Living",
  description:
    "Discover premium products for every room in your home, from smart electronics to comfortable essentials, all in one place.",
  buttonText: "Shop Deals",
  buttonLink: "/shop?sale=true",
  image: "/banners/featured.jpg",
};

export const aboutSection = {
  title: "Shopping Made Easy.",
  description:
    "Weaver Illumination brings together quality products across multiple categories, helping you find everything you need in one curated online marketplace.",
  checklist: [
    "Wide selection across 16+ categories",
    "Competitive prices on everyday essentials",
    "Fast, reliable shipping nationwide",
    "Dedicated customer support team",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "THE EVERYDAY COLLECTION",
  description: "Useful things. Beautifully chosen.",
  bannerImage: "/banners/featured-lifestyle.jpg",
  lifestyleSlug: "linen-throw-blanket",
  featuredSlug: "cast-iron-dutch-oven",
  smallSlugs: ["ceramic-pour-over-set", "jojoba-face-oil", "hiking-daypack"],
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home-kitchen" },
  { label: "Tech", slug: "electronics" },
  { label: "Beauty", slug: "beauty" },
  { label: "Outdoor", slug: "outdoor" },
];

export const newsletter = {
  title: "A LITTLE MORE LIGHT.",
  description: "Fresh arrivals, useful finds and occasional offers, sent without the noise.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
