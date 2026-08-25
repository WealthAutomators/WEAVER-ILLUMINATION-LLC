import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = {
  primary: "#171817",
  accent: "#B88A44",
  highlight: "#E7C98B",
  background: "#F5F3EE",
  stone: "#E9E6DE",
  border: "#D8D6CF",
  white: "#FFFFFF",
};

function createSvg(width, height, bg, label, sublabel = "", textColor = colors.primary) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="${colors.accent}" stroke-width="0.5" opacity="0.3"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.05}" font-weight="400">${label}</text>
  ${sublabel ? `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.03}" opacity="0.5">${sublabel}</text>` : ""}
</svg>`;
}

function createLogo() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="44" viewBox="0 0 220 44" fill="none">
  <text x="0" y="28" fill="${colors.primary}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" letter-spacing="0.2em">WEAVER</text>
  <text x="72" y="28" fill="${colors.accent}" font-family="system-ui, sans-serif" font-size="11" font-weight="400" letter-spacing="0.2em">/</text>
  <text x="82" y="28" fill="${colors.primary}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" letter-spacing="0.2em">ILLUMINATION</text>
</svg>`;
}

function createFavicon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" fill="${colors.background}"/>
  <text x="16" y="20" text-anchor="middle" fill="${colors.accent}" font-family="Georgia, serif" font-size="18" font-weight="600">W</text>
</svg>`;
}

const root = path.join(__dirname, "..", "public");

fs.mkdirSync(path.join(root, "logo"), { recursive: true });
fs.writeFileSync(path.join(root, "logo", "logo.svg"), createLogo());
fs.writeFileSync(path.join(root, "favicon.svg"), createFavicon());

const heroItems = [
  { name: "hero-main.jpg", label: "Find The Light", sub: "Editorial Hero", bg: colors.background },
  { name: "hero-main.svg", label: "Find The Light", sub: "Editorial Hero", bg: colors.background },
];
fs.mkdirSync(path.join(root, "hero"), { recursive: true });
heroItems.forEach((item) => {
  fs.writeFileSync(path.join(root, "hero", item.name.replace(".jpg", ".svg")), createSvg(1400, 700, item.bg, item.label, item.sub, colors.primary));
});

const spaceItems = [
  { name: "at-home.jpg", label: "At Home", sub: "Everyday Spaces", bg: "#EDE8DF" },
  { name: "at-work.jpg", label: "At Work", sub: "Clear Workspace", bg: "#E5E2DA" },
  { name: "on-the-go.jpg", label: "On The Go", sub: "Life In Motion", bg: "#F0EBE3" },
  { name: "outside.jpg", label: "Outside", sub: "Open Horizons", bg: "#E8E4DC" },
  { name: "edit-lifestyle.jpg", label: "The Edit", sub: "Illumination", bg: colors.stone },
];
fs.mkdirSync(path.join(root, "spaces"), { recursive: true });
spaceItems.forEach((item) => {
  fs.writeFileSync(path.join(root, "spaces", item.name.replace(".jpg", ".svg")), createSvg(800, 600, item.bg, item.label, item.sub));
});

const bannerItems = [
  { name: "about.jpg", label: "Our Story", sub: "Weaver Illumination LLC", bg: colors.stone },
  { name: "featured-lifestyle.jpg", label: "Everyday Collection", sub: "Useful Things", bg: colors.background },
  { name: "featured.jpg", label: "Featured", sub: "Curated Finds", bg: colors.stone },
];
fs.mkdirSync(path.join(root, "banners"), { recursive: true });
bannerItems.forEach((item) => {
  fs.writeFileSync(path.join(root, "banners", item.name.replace(".jpg", ".svg")), createSvg(800, 600, item.bg, item.label, item.sub));
});

const categoryItems = [
  { name: "electronics", label: "Electronics" },
  { name: "home-kitchen", label: "Home & Kitchen" },
  { name: "bathroom", label: "Bathroom" },
  { name: "educational-toys", label: "Educational Toys" },
  { name: "pet-supplies", label: "Pet Supplies" },
  { name: "beauty", label: "Beauty" },
  { name: "sports-outdoors", label: "Sports" },
  { name: "office-supplies", label: "Office" },
  { name: "fashion-accessories", label: "Fashion" },
  { name: "baby-products", label: "Baby" },
  { name: "toys-games", label: "Toys & Games" },
  { name: "health-wellness", label: "Health & Wellness" },
  { name: "outdoor", label: "Outdoor" },
  { name: "travel", label: "Travel" },
  { name: "storage", label: "Storage" },
  { name: "lighting", label: "Lighting" },
];
const categoryBgs = [colors.background, colors.stone, "#EDE8DF", "#E5E2DA"];
fs.mkdirSync(path.join(root, "categories"), { recursive: true });
categoryItems.forEach((item, i) => {
  const svg = createSvg(400, 300, categoryBgs[i % categoryBgs.length], item.label);
  fs.writeFileSync(path.join(root, "categories", `${item.name}.svg`), svg);
  fs.writeFileSync(path.join(root, "categories", `${item.name}.jpg`), svg);
});

const productsFile = fs.readFileSync(path.join(__dirname, "..", "data", "products.ts"), "utf8");
const slugMatches = [...productsFile.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const productBgs = [colors.background, colors.stone, "#EDE8DF", "#E5E2DA", "#F0EBE3", "#E8E4DC"];

fs.mkdirSync(path.join(root, "products"), { recursive: true });
slugMatches.forEach((slug, i) => {
  const label = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  for (let j = 1; j <= 2; j++) {
    const svg = createSvg(600, 750, productBgs[i % productBgs.length], label, `View ${j}`);
    fs.writeFileSync(path.join(root, "products", `${slug}-${j}.svg`), svg);
    fs.writeFileSync(path.join(root, "products", `${slug}-${j}.jpg`), svg);
  }
});

// Copy hero/spaces/banners svg as jpg references too
fs.copyFileSync(path.join(root, "hero", "hero-main.svg"), path.join(root, "hero", "hero-main.jpg"));
spaceItems.forEach((item) => {
  const svgPath = path.join(root, "spaces", item.name.replace(".jpg", ".svg"));
  fs.copyFileSync(svgPath, path.join(root, "spaces", item.name));
});
bannerItems.forEach((item) => {
  const svgPath = path.join(root, "banners", item.name.replace(".jpg", ".svg"));
  fs.copyFileSync(svgPath, path.join(root, "banners", item.name));
});

console.log(`Generated Weaver Illumination assets for ${slugMatches.length} products`);
