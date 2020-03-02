
// news api key and URL
const NEWS_API_KEY = '50987e9919c6472487cd7ff086d73368';
export const NEWS_API_URL = `https://newsapi.org/v2/top-headlines/?apiKey=${NEWS_API_KEY}`;

// weather api key and URL
const WEATHER_API_KEY = 'b0bff580401faa662ff4afb54790299a';
export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}&units=standart`;
export const WIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

// cities api key and URL
const CITIES_API_KEY = '4ee80f8a12a34b2a86135e316ca06a82';
export const CITIES_API_URL = `https://api.opencagedata.com/geocode/v1/json?language=en&_type=city&key=${CITIES_API_KEY}`; 
export const CITIES_API_URL_MAP = `https://api.opencagedata.com/geocode/v1/map?language=en&key=${CITIES_API_KEY}`; 

// website name
export const projectName = 'Weather';

// news posts count
export const POSTS_COUNT = 10;