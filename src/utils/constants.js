
// news api key
const NEWS_API_KEY = '50987e9919c6472487cd7ff086d73368';

// news api URL
export const NEWS_API_URL = `http://newsapi.org/v2/top-headlines/?apiKey=${NEWS_API_KEY}`;

// weather api key
const WEATHER_API_KEY = 'b0bff580401faa662ff4afb54790299a';

// weather api URL
export const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}&units=standart`;

// weather api icon
export const WIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

// website name
export const projectName = 'Weather';

// news posts count
export const POSTS_COUNT = 10;