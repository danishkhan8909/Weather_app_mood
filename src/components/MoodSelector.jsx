import React, { useState } from "react";

export default function MoodSelector({ onSelect }) {
  const [mood, setMood] = useState("");

  const moods = [
    { emoji: "😄", label: "Happy" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😴", label: "Tired" },
  ];

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">How do you feel today?</h3>
      <div className="flex justify-center gap-4">
        {moods.map((m) => (
          <button
            key={m.label}
            onClick={() => {
              setMood(m.label);
              onSelect(m);
            }}
            className={`text-3xl p-2 rounded-full hover:scale-110 transition ${
              mood === m.label ? "bg-yellow-200" : ""
            }`}
          >
            {m.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
