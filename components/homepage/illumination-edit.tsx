"use client";

import Image from "next/image";
import { illuminationEditSlugs } from "@/data/homepage";
import { getProductBySlug, getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";

const labels = ["01 / SELECTED", "02 / FAVORITE", "03 / NEW"];

export function IlluminationEdit() {
  const oversized = getProductBySlug(illuminationEditSlugs.oversized);
  const mediumProducts = getProductsBySlugs(illuminationEditSlugs.medium);
  const small = getProductBySlug(illuminationEditSlugs.small);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Illumination Edit
          </h2>
          <p className="mt-3 font-display text-2xl font-light text-primary md:text-3xl">
            A softer take on everyday shopping.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {oversized && (
            <div className="relative md:col-span-5">
              <span className="absolute left-4 top-4 z-10 font-heading text-[10px] uppercase tracking-[0.15em] text-accent">
                {labels[0]}
              </span>
              <ProductCard product={oversized} />
            </div>
          )}

          <div className="relative aspect-[3/4] overflow-hidden bg-stone md:col-span-3 md:aspect-auto md:min-h-[400px]">
            <Image
              src={illuminationEditSlugs.lifestyle}
              alt="Illumination edit lifestyle"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>

          <div className="flex flex-col gap-6 md:col-span-4">
            {mediumProducts.map((product, i) => (
              <div key={product.id} className="relative">
                <span className="absolute left-4 top-4 z-10 font-heading text-[10px] uppercase tracking-[0.15em] text-accent">
                  {labels[i + 1]}
                </span>
                <ProductCard product={product} />
              </div>
            ))}
            {small && (
              <div className="relative max-w-[240px]">
                <span className="absolute left-4 top-4 z-10 font-heading text-[10px] uppercase tracking-[0.15em] text-accent">
                  {labels[2]}
                </span>
                <ProductCard product={small} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
