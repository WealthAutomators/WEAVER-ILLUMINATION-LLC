import { Sparkles, Tag, ShoppingBag, Compass } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  sparkles: Sparkles,
  tag: Tag,
  "shopping-bag": ShoppingBag,
  compass: Compass,
};

export function WhyWeaver() {
  return (
    <section className="border-y border-border bg-card py-16 md:py-20">
      <Container>
        <h2 className="font-heading mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary md:mb-16">
          Why Weaver?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div key={feature.id} className="text-center">
                <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-border">
                  <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-medium text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
