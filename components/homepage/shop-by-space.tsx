"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { shopBySpace } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function ShopBySpace() {
  return (
    <section className="bg-stone py-16 md:py-24">
      <Container>
        <h2 className="font-heading mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:mb-14">
          Shop By Space
        </h2>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          {shopBySpace.map((space, i) => (
            <motion.div
              key={space.id}
              className={cn(
                "group relative overflow-hidden",
                space.aspect === "tall" && "md:col-span-3 md:row-span-2",
                space.aspect === "wide" && "md:col-span-6",
                space.aspect === "square" && "md:col-span-3"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={space.href} className="block">
                <div
                  className={cn(
                    "relative overflow-hidden bg-muted",
                    space.aspect === "tall" && "aspect-[3/4] md:aspect-auto md:h-full md:min-h-[480px]",
                    space.aspect === "wide" && "aspect-[16/9] md:aspect-[2/1]",
                    space.aspect === "square" && "aspect-square md:aspect-auto md:h-[230px]"
                  )}
                >
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                        {space.title}
                      </h3>
                      <p className="mt-1 max-w-[200px] text-xs leading-relaxed text-white/75">
                        {space.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
