import React, { useState, useEffect } from "react";
import { fetchWeather } from "./utils/weatherApi";
import WeatherCard from "./components/WeatherCard";
import MoodSelector from "./components/MoodSelector";
import Timeline from "./components/Timeline";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [entries, setEntries] = useState(() => {
    return JSON.parse(localStorage.getItem("entries")) || [];
  });

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleSearch = async () => {
    if (!city) return;
    const data = await fetchWeather(city);
    if (data) setWeather(data);
  };

  const handleMoodSelect = (mood) => {
    if (!weather) return alert("Please fetch weather first!");
    const newEntry = {
      id: Date.now(),
      city: weather.name,
      date: new Date().toLocaleDateString(),
      weather: weather.main.temp,
      condition: weather.weather[0].main,
      mood,
    };
    setEntries([newEntry, ...entries]);
  };

  // 🧹 Clear Timeline Button Function
  const handleClear = () => {
    setEntries([]);
    localStorage.removeItem("entries");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🌦️ Weather & Mood Tracker</h1>

      {/* 🔍 Search and Clear Section */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
        {/* 🧹 Clear Button */}
        {entries.length > 0 && (
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear
          </button>
        )}
      </div>

      <WeatherCard weather={weather} />
      {weather && <MoodSelector onSelect={handleMoodSelect} />}

      {/* Timeline List */}
      <Timeline entries={entries} />
    </div>
  );
}
