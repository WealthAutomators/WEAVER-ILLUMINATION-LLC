"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative pb-8 pt-4 md:pb-12 md:pt-8">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-heading text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            WEAVER / ILLUMINATION EDIT
          </p>

          <h1 className="font-display mx-auto mt-6 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            {slide.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            {slide.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 max-w-5xl px-4 md:mt-16 md:px-8"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative p-3 md:p-5">
            <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-highlight/20 via-transparent to-transparent" />
            <div className="relative aspect-[16/9] overflow-hidden border border-border/60 bg-stone shadow-sm md:aspect-[21/9]">
              <Image
                src={slide.image}
                alt="Sunlit contemporary interior"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-muted-foreground"
            >
              <span className="font-heading text-[10px] uppercase tracking-[0.2em]">Scroll</span>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
