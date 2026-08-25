import { HeroBanner } from "@/components/homepage/hero-banner";
import { EditorialStatement } from "@/components/homepage/editorial-statement";
import { ShopBySpace } from "@/components/homepage/shop-by-space";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { IlluminationEdit } from "@/components/homepage/illumination-edit";
import { BestSellers } from "@/components/homepage/best-sellers";
import { GoldenHourDeals } from "@/components/homepage/golden-hour-deals";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { WhyWeaver } from "@/components/homepage/why-weaver";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <EditorialStatement />
      <ShopBySpace />
      <FeaturedCollection />
      <NewArrivals />
      <IlluminationEdit />
      <BestSellers />
      <GoldenHourDeals />
      <CustomerReviews />
      <WhyWeaver />
      <Newsletter />
    </>
  );
}
