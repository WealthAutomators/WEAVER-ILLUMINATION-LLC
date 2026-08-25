"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              New In The Light
            </h2>
            <p className="mt-3 font-display text-2xl font-light text-primary md:text-3xl">
              Fresh finds selected for the everyday.
            </p>
          </div>
          <Link
            href="/new-arrivals"
            className="hidden font-heading text-xs uppercase tracking-wider text-accent transition-colors hover:text-primary sm:block"
          >
            View All →
          </Link>
        </div>

        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
