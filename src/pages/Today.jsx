import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Stat from "../components/Stat";

export default function Today() {
  return (
    <div className="min-h-screen bg-neutral-100 antialiased">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mt-6">
        <div className="relative overflow-hidden rounded-[32px] bg-black text-white">

          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
            <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
          </div>

          {/* content */}
          <div className="relative z-10 px-10 py-24 text-center">
            <h2 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight">
              Prepare before <br /> the market opens
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-neutral-400 text-lg">
              Daily pre-market preparedness, key levels, global cues,
              and post-market reviews — built for traders who value
              discipline over predictions.
            </p>

            <button className="mt-10 bg-white text-black px-7 py-3 rounded-full font-medium
              transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]">
              View Today’s Plan
            </button>
          </div>

          {/* STATS */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-12">
            <Stat title="Market Bias" value="Range-bound" />
            <Stat title="Key Levels" value="22350 – 22580" />
            <Stat title="Volatility" value="Moderate" />
          </div>

        </div>
      </section>

      {/* PRE-MARKET PLAN */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <h3 className="text-2xl font-semibold mb-8">
          Pre-Market Plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlanCard
            title="Market Bias"
            content="Range-bound unless strong acceptance above resistance."
          />
          <PlanCard
            title="Key Levels"
            content="Support: 22350 • Resistance: 22580"
          />
          <PlanCard
            title="No Trade Condition"
            content="Low volume + overlapping candles = no trade."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-neutral-500 py-10 text-sm">
        Built for clarity • No tips • No guarantees
      </footer>

    </div>
  );
}

