import Navbar from "../components/Navbar";
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

      {/* WHAT YOU GET */}
<section className="max-w-7xl mx-auto px-6 mt-32">
  <h3 className="text-3xl font-semibold text-center">
    What you get, every trading day
  </h3>

  <p className="mt-4 text-neutral-600 text-center max-w-2xl mx-auto">
    No tips. No noise. Just a structured process to prepare, execute,
    and review your trades with discipline.
  </p>

  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    <HomeCard
      title="Pre-Market Preparation"
      text="Market bias, key levels, global cues, and scenarios before the opening bell."
    />
    <HomeCard
      title="Execution Framework"
      text="Clear if-then conditions that prevent impulsive trades."
    />
    <HomeCard
      title="Post-Market Review"
      text="Document what worked, what failed, and what to improve tomorrow."
    />
  </div>
</section>
{/* HOW IT WORKS */}
<section className="max-w-7xl mx-auto px-6 mt-40">
  <div className="bg-neutral-50 rounded-[32px] p-12">
    <h3 className="text-3xl font-semibold text-center">
      A simple daily workflow
    </h3>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      <Step
        number="01"
        title="Prepare"
        text="Define bias, levels, and scenarios before the market opens."
      />
      <Step
        number="02"
        title="Execute"
        text="Trade only if your conditions are met. No emotions."
      />
      <Step
        number="03"
        title="Review"
        text="Journal outcomes and refine your process daily."
      />
    </div>
  </div>
</section>
{/* CTA */}
<section className="max-w-7xl mx-auto px-6 mt-40 mb-32 text-center">
  <h3 className="text-4xl font-light">
    Discipline compounds faster than profits
  </h3>

  <p className="mt-6 text-neutral-600 max-w-xl mx-auto">
    Start your trading day with clarity. End it with learning.
  </p>

  <div className="mt-10">
    <a
      href="/journal"
      className="inline-block bg-black text-white px-8 py-4 rounded-full
      font-medium transition-all duration-300
      hover:-translate-y-0.5 hover:shadow-xl"
    >
      Start Today’s Journal
    </a>
  </div>
</section>
{/* CALL TO ACTION */}
<section className="max-w-7xl mx-auto px-6 mt-40 mb-32 text-center">
  <h3 className="text-4xl font-light">
    Discipline compounds faster than profits
  </h3>

  <p className="mt-6 text-neutral-600 max-w-xl mx-auto">
    Start your trading day with clarity. End it with learning.
  </p>

  <div className="mt-10">
    <a
      href="/journal"
      className="inline-block bg-black text-white px-8 py-4 rounded-full
      font-medium transition-all duration-300
      hover:-translate-y-0.5 hover:shadow-xl
      active:translate-y-0 active:scale-[0.98]"
    >
      Start Today’s Journal
    </a>
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

function PlanCard({ title, content }) {
  return (
<div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-lg">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-2 text-neutral-600">{content}</p>
    </div>
  );
}
function HomeCard({ title, text }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200
      transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-3 text-neutral-600">{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-light text-neutral-300">
        {number}
      </div>
      <h4 className="mt-4 text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-neutral-600">{text}</p>
    </div>
  );
}
