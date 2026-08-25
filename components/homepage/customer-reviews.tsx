import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  const [featured, ...supporting] = testimonials;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="font-heading mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-primary md:mb-16">
          Kind Words
        </h2>

        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          {featured && (
            <div className="border border-border bg-card p-8 md:col-span-7 md:p-12">
              <StarRating rating={featured.rating} showCount={false} size="md" />
              <blockquote className="font-display mt-6 text-2xl font-light leading-relaxed text-primary md:text-3xl">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-heading text-sm font-medium text-primary">{featured.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{featured.location}</p>
                {featured.product && (
                  <p className="mt-2 text-xs text-accent">Purchased: {featured.product}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6 md:col-span-5">
            {supporting.slice(0, 2).map((t) => (
              <div key={t.id} className="border border-border bg-card p-6 md:p-8">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                  {t.product && (
                    <p className="mt-1 text-xs text-accent">Purchased: {t.product}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
