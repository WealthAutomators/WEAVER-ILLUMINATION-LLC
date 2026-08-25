import Link from "next/link";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em]">
              WEAVER
              <span className="mx-1 font-normal text-primary-foreground/50">/</span>
              ILLUMINATION
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">{company.description}</p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-highlight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">Categories</h3>
            <ul className="space-y-2.5">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-highlight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">Customer Care</h3>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-highlight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-highlight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">Policies</h3>
            <ul className="space-y-2.5">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-highlight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-8 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-foreground/50">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="font-medium text-primary-foreground">{company.name}</li>
              <li>
                {company.address.street}<br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-highlight">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-primary-foreground/10" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-primary-foreground/50">{company.copyright}</p>
        <div className="flex items-center gap-2 opacity-70">
          {paymentMethods.map((method) => (
            <img key={method.name} src={method.icon} alt={method.name} width={40} height={28} />
          ))}
        </div>
      </Container>
    </footer>
  );
}
