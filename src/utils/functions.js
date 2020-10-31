import { WIcon } from "./constants";

/**
 * @name datetime
 * @description make readable time string for news
 * @param {string} paramdate 
 */
export function datetime(paramdate) {
    try {
        if (paramdate) {
            const date = new Date(paramdate);
            return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) + ", " + date.toLocaleTimeString([], { timeStyle: 'short' });
        } else {
            return '';
        }
    } catch {
        return '';
    }
}

/**
 * @name formated
 * @description formating weather data based on format
 * @param {object} weather 
 * @param {string} format 
 */
export function formated(weather, format) {

    const temparature = (number = 0, format) =>
        (format === 'imperial' ? (number - 273.15) * 9 / 5 + 32 : number - 273.15).toFixed(0);

    const speed = (number = 0, format) =>
        (format === 'imperial' ? number * 0.621371 : number).toFixed(0);

    const speedFormat = format =>
        format === 'imperial' ? 'mph' : 'm/s';

    const sign = format =>
        format === 'imperial' ? '°F' : '°C';

    const time = (timestamp = 0, timezone) => {
        try {
            const date = new Date();
            const utc = (timestamp * 1000 + new Date().getTimezoneOffset() * 60 * 1000) / 1000 + timezone;
            date.setTime(utc * 1000);
            return date.toLocaleTimeString([], { timeStyle: 'short' });
        } catch {
            return '';
        }
    }

    const cityTime = (timezone = 0) => {
        try {
            const date = new Date();
            const utc = (new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000) / 1000 + timezone;
            date.setTime(utc * 1000);
            return date.toLocaleTimeString([], { timeStyle: 'short' });
        } catch {
            return '';
        }
    }

    if ('name' in weather) {
        return {
            city: weather?.name,
            countryCode: weather?.sys?.country,
            temperature: temparature(weather?.main?.temp, format),
            icon: WIcon(weather.weather ? weather.weather[0]?.icon : null),
            description: weather.weather ? weather.weather[0]?.description : null,
            wind: speed(weather?.wind?.speed, format),
            pressure: weather?.main?.pressure,
            humidity: weather?.main?.humidity,
            sunrise: time(weather?.sys?.sunrise, weather?.timezone),
            sunset: time(weather?.sys?.sunset, weather?.timezone),
            cityTime: cityTime(weather.timezone),
            position: {
                lat: weather?.coord?.lat,
                lon: weather?.coord?.lon,
            },
            format: {
                sign: sign(format),
                speed: speedFormat(format)
            }
        }
    } else {
        return false;
    }
}