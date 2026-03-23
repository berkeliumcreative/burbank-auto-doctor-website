// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsSection } from "@/components/ui/stats-section";
import { HoursTable } from "@/components/ui/hours-table";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { MapEmbed } from "@/components/ui/map-embed";
import { CTABanner } from "@/components/ui/cta-banner";
import { BookingPrompt } from "@/components/ui/booking-prompt";
import { FooterMinimal } from "@/components/ui/footer-minimal";
import { BlurFade } from "@/components/ui/blur-fade";
import { Search, Wrench, Shield, Settings, MapPin, Phone } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MinimalNav
        logo={<span><span style={{ color: "var(--theme-accent)" }}>Burbank</span> Auto Doctor</span>}
        items={[
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Reviews", href: "#reviews" },
          { label: "Hours", href: "#hours" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="📞 Book Now"
        ctaHref="tel:8185587755"
      />

      <HeroImageBg imageSrc={content.hero.backgroundImage} heading={content.hero.heading} subheading={content.hero.subheading} ctaText={content.hero.ctaText} ctaHref={content.hero.ctaLink} />

      <StatsSection stats={[{ value: 4.9, label: "Star Rating" }, { value: 244, suffix: "+", label: "Reviews" }, { value: 5, label: "Days a Week" }, { value: 9, suffix: "hrs", label: "Daily Service" }]} />

      <section id="about" className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <BlurFade delay={0.1}>
          <SectionHeading title={content.about.heading} />
          {content.about.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-5">{p}</p>
          ))}
        </BlurFade>
      </section>

      <section id="services" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="What We Fix" subtitle="Full-service auto repair for all makes and models" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {content.services.map((item: any, i: number) => {
              const icons = [<Search key="se" className="w-8 h-8" />, <Wrench key="w" className="w-8 h-8" />, <Shield key="sh" className="w-8 h-8" />, <Settings key="st" className="w-8 h-8" />];
              return (
                <BlurFade key={i} delay={0.1 * i}>
                  <div className="flex gap-5 p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 mt-1" style={{ color: "var(--theme-accent)" }}>{icons[i]}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <SectionHeading title="What Burbank Drivers Say" subtitle="4.9 stars across 244+ reviews" />
        <div className="mt-12">
          <TestimonialMarquee testimonials={content.reviews.map((r: any) => ({ quote: r.text, author: r.name, rating: r.rating }))} />
        </div>
      </section>

      <CTABanner heading="Check Engine Light On?" subheading="Don't ignore it — call us for a fast, honest diagnosis. No surprises, no upsells." ctaText="Call Now" ctaHref="tel:8185587755" variant="filled" />

      <section id="hours" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Hours & Location" align="left" />
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "var(--theme-accent)" }} />
                <p className="text-muted-foreground">{content.contact.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "var(--theme-accent)" }} />
                <a href="tel:8185587755" className="text-muted-foreground hover:underline">{content.contact.phone}</a>
              </div>
            </div>
            <div className="mt-8"><HoursTable hours={content.contact.hours} /></div>
          </div>
          <div id="contact" className="rounded-xl overflow-hidden">
            <MapEmbed query={content.contact.mapEmbedQuery} height={400} />
          </div>
        </div>
      </section>

      <BookingPrompt heading="Schedule Your Appointment" description="Call us or drop by — we'll take care of the rest." phone={content.contact.phone} ctaText="Call Now" />

      <FooterMinimal businessName={content.businessName} />
    </main>
  );
}