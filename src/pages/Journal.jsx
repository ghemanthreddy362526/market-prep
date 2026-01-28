import { useState, useEffect } from "react";

export default function Journal() {
  const [entry, setEntry] = useState({
    date: "",
    bias: "",
    worked: "",
    failed: "",
    lesson: "",
  });

  // Load saved entry
  useEffect(() => {
  const archive = JSON.parse(localStorage.getItem("journalArchive")) || {};
  const today = new Date().toISOString().split("T")[0];

  if (archive[today]) {
    setEntry(archive[today]);
  } else {
    setEntry({ ...entry, date: today });
  }
}, []);

useEffect(() => {
  if (!entry.date) return;

  const archive = JSON.parse(localStorage.getItem("journalArchive")) || {};
  archive[entry.date] = entry;

  localStorage.setItem("journalArchive", JSON.stringify(archive));
}, [entry]);


  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Trading Journal</h1>
      <p className="mt-2 text-neutral-600">
        Write honestly. Review daily. Improve slowly.
      </p>

      <div className="mt-10 space-y-6">

        <Input
          label="Date"
          value={entry.date}
          onChange={(v) => setEntry({ ...entry, date: v })}
        />

        <Input
          label="Market Bias"
          value={entry.bias}
          onChange={(v) => setEntry({ ...entry, bias: v })}
        />

        <Textarea
          label="What Worked"
          value={entry.worked}
          onChange={(v) => setEntry({ ...entry, worked: v })}
        />

        <Textarea
          label="What Failed"
          value={entry.failed}
          onChange={(v) => setEntry({ ...entry, failed: v })}
        />

        <Textarea
          label="Lesson"
          value={entry.lesson}
          onChange={(v) => setEntry({ ...entry, lesson: v })}
        />

        <p className="text-sm text-neutral-500">
          Auto-saved locally ✔
        </p>
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}