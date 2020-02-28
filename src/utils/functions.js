
export function datetime(paramdate, isTimestamp) {
    try {
        let date = new Date(paramdate);
        let options = { month: 'long', day: 'numeric' }
        return date.toLocaleDateString('en-US', options) + " " + date.toLocaleTimeString([], { timeStyle: 'short' });
    } catch {
        return '';
    }
}

export function getTime(paramdate) {
    try {
        let date = new Date();
        date.setTime(paramdate * 1000);
        return date.toLocaleTimeString([], { timeStyle: 'short' });
    } catch {
        return '';
    }
}



export function getFormatIcon(format) {
    switch (format) {
        case "standard":
            return 'K';
        case "imperial":
            return '°F';
        case "metric":
        default:
            return '°C';
    }
}