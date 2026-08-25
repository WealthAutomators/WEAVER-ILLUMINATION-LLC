"use client";

import { editorialStatement } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export function EditorialStatement() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div
          className="relative mx-auto max-w-3xl pl-4 md:pl-16 lg:pl-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute left-0 top-0 h-full w-px bg-accent/40 md:left-8 lg:left-16" />

          <h2 className="font-display text-4xl font-light leading-[1.15] tracking-tight text-primary md:text-5xl lg:text-6xl">
            {editorialStatement.heading.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {editorialStatement.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
