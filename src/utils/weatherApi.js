import axios from "axios";

const API_KEY = "621028c8ed700b8ccadc9a7c96eb2999"; // 🔑

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await axios.get(url);
  return res.data;
};
