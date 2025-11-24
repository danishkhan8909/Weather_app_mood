import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="bg-blue-100 shadow-md rounded-2xl p-4 text-center">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <img src={icon} alt="weather-icon" className="mx-auto" />
      <p className="text-2xl font-semibold">{weather.main.temp}°C</p>
      <p className="capitalize">{weather.weather[0].description}</p>
    </div>
  );
}
