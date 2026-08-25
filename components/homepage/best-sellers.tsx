"use client";

import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function BestSellers() {
  const products = getProductsBySlugs(homepageBestsellerSlugs);
  const [featured, ...rest] = products;

  return (
    <section className="bg-stone py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Most Loved
            </h2>
          </div>
          <Link
            href="/best-sellers"
            className="hidden font-heading text-xs uppercase tracking-wider text-accent transition-colors hover:text-primary sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {featured && (
            <div className="md:col-span-5">
              <ProductCard product={featured} />
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 md:col-span-7 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {rest.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
