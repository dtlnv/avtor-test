// news api key and URL
export const NEWS_API_URL = `https://api.spaceflightnewsapi.net/v4/articles/?has_event=false&has_launch=false`;

// weather api key and URL
export const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=standart`;
export const WIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

// cities api key and URL
export const CITIES_API_URL = `https://api.opencagedata.com/geocode/v1/json?language=en&_type=city&key=${process.env.REACT_APP_CITIES_API_KEY}`;

// website name
export const PROJECT_NAME = 'weather app';

// news posts count
export const POSTS_COUNT = 10;

// localStorage or sessionStorage
export const STORAGE = window.localStorage; 