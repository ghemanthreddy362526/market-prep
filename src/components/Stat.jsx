export default function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white
  transition-all duration-300 ease-out
  hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">

      <p className="text-neutral-400 text-sm">{title}</p>
      <h3 className="mt-2 text-2xl font-medium">{value}</h3>
    </div>
  );
}
