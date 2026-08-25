"use client";

import Image from "next/image";
import { featuredCollection } from "@/data/homepage";
import { getProductBySlug, getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";

export function FeaturedCollection() {
  const lifestyleProduct = getProductBySlug(featuredCollection.lifestyleSlug);
  const featuredProduct = getProductBySlug(featuredCollection.featuredSlug);
  const smallProducts = getProductsBySlugs(featuredCollection.smallSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {featuredCollection.title}
          </h2>
          <p className="mt-3 font-display text-2xl font-light text-primary md:text-3xl">
            {featuredCollection.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone md:col-span-5 md:aspect-auto md:min-h-[520px]">
            <Image
              src={featuredCollection.bannerImage}
              alt="Everyday collection lifestyle"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {featuredProduct && (
            <div className="md:col-span-4">
              <ProductCard product={featuredProduct} className="h-full" />
            </div>
          )}

          <div className="flex flex-col gap-6 md:col-span-3">
            {lifestyleProduct && (
              <div className="hidden md:block">
                <ProductCard product={lifestyleProduct} />
              </div>
            )}
            {smallProducts.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 md:hidden">
          {smallProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
