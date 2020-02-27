
export function datetime(paramdate) {
    try {
        let date = new Date(paramdate);
        let options = { month: 'long', day: 'numeric' }
        return date.toLocaleDateString('uk-UA', options) + " " + date.toLocaleTimeString([], { timeStyle: 'short' });
    } catch {
        return '';
    }
}