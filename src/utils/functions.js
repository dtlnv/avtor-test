import { WIcon } from "./constants";

export function datetime(paramdate, isTimestamp) {
    try {
        let date = new Date(paramdate);
        let options = { month: 'long', day: 'numeric' }
        return date.toLocaleDateString('en-US', options) + " " + date.toLocaleTimeString([], { timeStyle: 'short' });
    } catch {
        return '';
    }
}

export function formated(weather, format) {
    const temparature = (number, format) =>
        format === 'imperial' ? (number - 273.15) * 9 / 5 + 32 : number - 273.15;

    const speed = (number, format) =>
        format === 'imperial' ? (number * 0.621371).toFixed(2) : number;

    const speedFormat = format =>
        format === 'imperial' ? 'mph' : 'kmph';

    const sign = format =>
        format === 'imperial' ? '°F' : '°C';

    const time = getDate => {
        try {
            const date = new Date();
            date.setTime(getDate * 1000);
            return date.toLocaleTimeString([], { timeStyle: 'short' });
        } catch {
            return '';
        }
    }


    return {
        city: weather.name,
        temperature: temparature(weather.main.temp, format),
        icon: WIcon(weather.weather[0].icon),
        description: weather.weather[0].description,
        wind: speed(weather.wind.speed, format),
        pressure: weather.main.pressure,
        humidity: weather.main.humidity,
        sunrise: time(weather.sys.sunrise),
        sunset: time(weather.sys.sunset),
        format: {
            sign: sign(format),
            speed: speedFormat(format)
        }
    }
}