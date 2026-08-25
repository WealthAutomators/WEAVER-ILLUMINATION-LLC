"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { goldenHourDeal, dealsEndTime } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Container } from "@/components/ui/container";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Button } from "@/components/ui/button";
import { formatPrice, calculateDiscount } from "@/lib/format";

export function GoldenHourDeals() {
  const product = getProductBySlug(goldenHourDeal.productSlug);
  const { addToCart } = useCart();

  if (!product) return null;

  const hasDiscount = product.salePrice && product.salePrice < product.price;
  const discountPercent = hasDiscount ? calculateDiscount(product.price, product.salePrice!) : 0;

  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,138,68,0.12),transparent_60%)]" />

      <Container className="relative">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-heading text-[10px] font-medium uppercase tracking-[0.25em] text-highlight">
              Limited Time
            </p>
            <h2 className="font-display mt-4 text-4xl font-light text-primary-foreground md:text-5xl lg:text-6xl">
              {goldenHourDeal.title}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              A premium selection at special prices — available until the clock runs out.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-primary-foreground/60">Ends in</span>
              <CountdownTimer endTime={dealsEndTime} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden border border-highlight/20 bg-primary-foreground/5">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="280px"
              />
              {hasDiscount && (
                <span className="absolute left-3 top-3 bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                  -{discountPercent}%
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4 text-center sm:text-left">
              <Link href={`/product/${product.slug}`}>
                <h3 className="font-heading text-lg font-medium text-primary-foreground hover:text-highlight transition-colors">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center justify-center gap-3 sm:justify-start">
                {hasDiscount ? (
                  <>
                    <span className="text-2xl font-semibold text-highlight">{formatPrice(product.salePrice!)}</span>
                    <span className="text-sm text-primary-foreground/50 line-through">{formatPrice(product.price)}</span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold text-highlight">{formatPrice(product.price)}</span>
                )}
              </div>

              <Button
                className="bg-accent text-accent-foreground hover:bg-highlight hover:text-primary"
                onClick={() => addToCart(product)}
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
