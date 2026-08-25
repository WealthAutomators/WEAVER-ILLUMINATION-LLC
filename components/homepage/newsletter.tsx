"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-xl border border-border bg-stone px-8 py-12 text-center md:px-16 md:py-16">
          <h2 className="font-display text-3xl font-light text-primary md:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {newsletter.description}
          </p>

          {submitted ? (
            <p className="mt-8 text-sm font-medium text-accent">Thank you for subscribing.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-border bg-card text-foreground"
              />
              <Button type="submit" className="shrink-0 bg-accent text-accent-foreground hover:bg-accent/90">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
