import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Tag, ShoppingBag, Compass } from "lucide-react";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.shortName}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image src="/banners/about.jpg" alt={`About ${company.shortName}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our Story">
            <p>
              {company.shortName} was founded with a simple idea: everyday spaces deserve thoughtful,
              beautiful products. From home and workspace to travel and wellness, we curate useful
              things that make routines a little better and moments a little brighter.
            </p>
            <p className="mt-4">
              Based in St George, Utah, we bring together quality products across every category in
              one calm, curated marketplace. Every item is selected with care, and our team is
              dedicated to making your shopping experience smooth from browsing to checkout.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: "Thoughtful Selection", desc: "Every product chosen for quality, purpose, and everyday value." },
            { icon: Tag, title: "Everyday Value", desc: "Fair prices on useful things you'll reach for again and again." },
            { icon: ShoppingBag, title: "Easy Shopping", desc: "Simple browsing, secure checkout, and reliable delivery." },
            { icon: Compass, title: "Fresh Discoveries", desc: "New arrivals and seasonal finds added regularly." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center border border-border">
                <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-sm font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="Kind Words" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.id} className="border border-border bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Discover More</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
