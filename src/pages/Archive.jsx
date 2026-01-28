export default function Archive() {
  const archive =
    JSON.parse(localStorage.getItem("journalArchive")) || {};

  const dates = Object.keys(archive).sort().reverse();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Journal Archive</h1>
      <p className="mt-2 text-neutral-600">
        Past sessions. Real learning lives here.
      </p>

      <div className="mt-10 space-y-6">
        {dates.length === 0 && (
          <p className="text-neutral-500">No entries yet.</p>
        )}

        {dates.map((date) => (
          <div
            key={date}
            className="border border-neutral-200 rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg">{date}</h3>

            <p className="mt-2">
              <strong>Bias:</strong> {archive[date].bias}
            </p>

            <p className="mt-2">
              <strong>Worked:</strong> {archive[date].worked}
            </p>

            <p className="mt-2">
              <strong>Failed:</strong> {archive[date].failed}
            </p>

            <p className="mt-2">
              <strong>Lesson:</strong> {archive[date].lesson}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
