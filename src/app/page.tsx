import Link from "next/link";
import {
  ArrowRight,
  Car,
  Clock,
  Route,
  Sparkles,
  UserRound,
  Building2,
  Smartphone,
  Shield,
  Globe2,
  Map,
  Utensils,
  Package,
} from "lucide-react";

const rideOptions = [
  {
    title: "Request a ride",
    description:
      "Tap a button and get picked up by a nearby driver who will take you where you need to go.",
    cta: "Ride with Uber",
    icon: Car,
    badge: "Door-to-door in minutes",
  },
  {
    title: "Plan ahead",
    description:
      "Reserve rides up to 90 days in advance so you can be confident your ride is ready right when you are.",
    cta: "See how scheduling works",
    icon: Clock,
    badge: "New: Global coverage",
  },
  {
    title: "Share a ride",
    description:
      "Pool with friends and coworkers to save on cost without compromising on comfort or reliability.",
    cta: "Discover UberX Share",
    icon: UserRound,
    badge: "Save with shared rides",
  },
];

const platformHighlights = [
  {
    title: "Built for business",
    description:
      "Scale travel, meals, and deliveries with built-in policy controls, employee visibility, and detailed reporting.",
    icon: Building2,
    link: "Explore Uber for Business",
  },
  {
    title: "Move freight smarter",
    description:
      "Connect carriers and shippers with transparent pricing, real-time tracking, and AI-optimized loads.",
    icon: Package,
    link: "Get started with Uber Freight",
  },
  {
    title: "Provide delivery at scale",
    description:
      "Connect with new customers through the Uber Eats marketplace or power your own channels with white-label solutions.",
    icon: Utensils,
    link: "Partner with Uber Eats",
  },
];

const trustPoints = [
  {
    title: "Global safety standards",
    description:
      "Technology and community guidelines help create safe experiences on every trip.",
    icon: Shield,
  },
  {
    title: "Worldwide network",
    description:
      "Available in 10K+ cities with operations, support, and localized experiences.",
    icon: Globe2,
  },
  {
    title: "Precision routing",
    description:
      "Advanced maps and live ETAs reduce wait times and keep trips on track.",
    icon: Route,
  },
];

const appPromos = [
  {
    title: "Uber app",
    description: "Request rides, pay in seconds, and stay connected on the go.",
    icon: Smartphone,
    cta: "Download",
  },
  {
    title: "Driver app",
    description:
      "Earn flexibly with tools and insights that help you make the most of every trip.",
    icon: Sparkles,
    cta: "Start driving",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="section-padding pt-8 pb-10 md:pb-16">
        <nav className="max-content-width flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="text-3xl font-semibold tracking-tight">
              Uber
            </Link>
            <div className="hidden items-center gap-8 text-sm md:flex">
              <Link href="#" className="transition hover:text-white/80">
                Ride
              </Link>
              <Link href="#" className="transition hover:text-white/80">
                Drive
              </Link>
              <Link href="#" className="transition hover:text-white/80">
                Eat
              </Link>
              <Link href="#" className="transition hover:text-white/80">
                Freight
              </Link>
              <Link href="#" className="transition hover:text-white/80">
                Business
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="#"
              className="hidden rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:bg-white/10 md:block"
            >
              EN
            </Link>
            <Link
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:bg-white/10"
            >
              Help
            </Link>
            <Link
              href="#"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:bg-white/10"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white px-5 py-2 text-black transition hover:bg-white/80"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="section-padding pt-0">
          <div className="max-content-width grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Built for every way you move
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Your ride, delivery, and logistics partner.
              </h1>
              <p className="text-lg text-zinc-300 md:text-xl">
                Wherever you&apos;re headed, the Uber platform connects you with
                drivers, couriers, businesses, and tools to move your world
                forward.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
                >
                  Request a ride
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Download the app
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-2xl backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white/70">
                    Request setup
                  </span>
                  <span className="text-xs uppercase tracking-wide text-emerald-300">
                    Live ETA
                  </span>
                </div>
                <div className="grid gap-4">
                  <label className="text-sm font-semibold text-white/80">
                    Pickup location
                    <input
                      type="text"
                      placeholder="Current location"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                    />
                  </label>
                  <label className="text-sm font-semibold text-white/80">
                    Destination
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                    />
                  </label>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>UberX</span>
                    <span>4 min away</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">$18.40</p>
                      <p className="text-xs text-white/50">
                        includes time &amp; distance
                      </p>
                    </div>
                    <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Preferred
                    </div>
                  </div>
                </div>
                <button className="w-full rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/80">
                  Confirm Ride
                </button>
              </div>
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
            </div>
          </div>
        </section>

        <section className="section-padding bg-white text-black">
          <div className="max-content-width space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Ride with Uber
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Options for every journey
                </h2>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-black/70"
              >
                See all ride options
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {rideOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <article
                    key={option.title}
                    className="flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="space-y-5">
                      <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                        {option.badge}
                      </span>
                      <div className="flex items-center gap-3 text-black/80">
                        <div className="rounded-full bg-black/5 p-3">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          {option.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-black/70">
                        {option.description}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-black/70"
                    >
                      {option.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-content-width grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Why Uber
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Technology, trust, and tools that scale with you
              </h2>
              <p className="text-lg text-white/70">
                From advanced mapping and pricing to compliance-ready solutions,
                the Uber platform is built to help riders, drivers, couriers,
                and businesses move with confidence.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {trustPoints.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                      <Icon className="h-8 w-8 text-emerald-300" />
                      <h3 className="mt-4 text-xl font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-transparent to-white/10 p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  The platform behind the trip
                </h3>
                <p className="text-sm text-white/70">
                  Uber maps over 1 billion trips every month with real-time data
                  informing pricing, safety, and routing to keep trips moving.
                </p>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-black/50 p-4">
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>Dynamic traffic layer</span>
                      <Map className="h-4 w-4" />
                    </div>
                    <p className="mt-2 text-lg font-semibold text-white">
                      -23% avg. wait times
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/50 p-4">
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>On-time accuracy</span>
                      <Route className="h-4 w-4" />
                    </div>
                    <p className="mt-2 text-lg font-semibold text-white">
                      98.4% globally
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/70"
                >
                  Learn about our technology
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.35),_transparent_60%)]" />
            </div>
          </div>
        </section>

        <section className="section-padding bg-white text-black">
          <div className="max-content-width space-y-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Powering businesses
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Solutions that move your organization
                </h2>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-black/70"
              >
                Explore business platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {platformHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="rounded-full bg-black/5 p-3 text-black">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-black/70">
                        {item.description}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:text-black/70"
                    >
                      {item.link}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-content-width grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Stay connected
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                The Uber app ecosystem
              </h2>
              <p className="text-lg text-white/70">
                Manage trips, deliveries, earnings, and safety features in one
                seamless experience designed for riders, drivers, and couriers.
              </p>
              <div className="flex flex-col gap-4 md:flex-row">
                {appPromos.map((promo) => {
                  const Icon = promo.icon;
                  return (
                    <div
                      key={promo.title}
                      className="flex flex-1 flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-white/10 p-3">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {promo.title}
                          </h3>
                          <p className="text-xs uppercase tracking-wide text-white/60">
                            Available on iOS &amp; Android
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-white/70">{promo.description}</p>
                      <Link
                        href="#"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/70"
                      >
                        {promo.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Around the world
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Available in 10,000+ cities across 6 continents.
              </h3>
              <p className="mt-4 text-sm text-white/70">
                From New York to Nairobi, São Paulo to Singapore, Uber connects
                people, places, and possibilities with localized experiences in
                each city.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Rides completed
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    25B+
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Monthly riders
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    150M
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Active earners
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    6M+
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    Supported languages
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    55+
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_55%)]" />
            </div>
          </div>
        </section>
      </main>

      <footer className="section-padding border-t border-white/10">
        <div className="max-content-width flex flex-col gap-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">Uber</p>
            <p>© {new Date().getFullYear()} Uber Technologies Inc.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="transition hover:text-white/80">
              Safety
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              Help Center
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              Careers
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              Developers
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white/80">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
