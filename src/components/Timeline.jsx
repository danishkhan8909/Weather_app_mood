import React from "react";

export default function Timeline({ entries }) {
  if (entries.length === 0) return <p className="text-gray-500 mt-4">No entries yet.</p>;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Your Weather-Mood Timeline</h3>
      <ul className="space-y-2">
        {entries.map((e, idx) => (
          <li
            key={idx}
            className="bg-white border rounded-xl p-3 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{e.city}</p>
              <p className="text-sm text-gray-600">
                {e.date} — {e.weather}°C & {e.condition}
              </p>
            </div>
            <span className="text-2xl">{e.mood.emoji}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
