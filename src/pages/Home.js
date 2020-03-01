import React from 'react';
import Layout from '../components/Layout';
import { WEATHER_API_URL } from '../utils/constants';
import Axios from 'axios';
import Error from '../components/Error';
import Loading from '../components/Loading';
import CityCard from '../components/CityCard';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWeather: {},
            error: false,
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        // this.setState({currentWeather: {"coord":{"lon":32.06,"lat":46.95},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":279.22,"feels_like":273.91,"temp_min":279.15,"temp_max":279.26,"pressure":1019,"humidity":48},"visibility":10000,"wind":{"speed":4,"deg":180},"clouds":{"all":85},"dt":1583079264,"sys":{"type":1,"id":8913,"country":"UA","sunrise":1583037086,"sunset":1583077021},"timezone":7200,"id":700569,"name":"Mykolayiv","cod":200}})
        // this.setState({currentWeather: {"coord":{"lon":-74.01,"lat":40.71},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":279.2,"feels_like":271.38,"temp_min":277.59,"temp_max":280.93,"pressure":1019,"humidity":28},"visibility":16093,"wind":{"speed":6.7,"deg":310,"gust":10.8},"clouds":{"all":1},"dt":1583095415,"sys":{"type":1,"id":4686,"country":"US","sunrise":1583062166,"sunset":1583102848},"timezone":-18000,"id":5128581,"name":"New York","cod":200}})
        navigator.geolocation.getCurrentPosition(async position => {
            if (position) {
                try {
                    const url = `${WEATHER_API_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
                    const receivedData = (await Axios.get(url)).data;

                    this.setState({ currentWeather: receivedData });
                } catch {
                    this.setState({ error: true });
                }
            }
        }, error => {
            this.setState({ error: true });
            console.error(error);
        }, {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 600000
        });
    }

    render() {
        return (
            <Layout>
                {'weather' in this.state.currentWeather ?
                    <CityCard weather={this.state.currentWeather} current />
                    :
                    this.state.error ?
                        <Error>Can't get your location.</Error>
                        :
                        <Loading />
                }
                <CityCard weather={{ "coord": { "lon": -74.01, "lat": 40.71 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "base": "stations", "main": { "temp": 279.2, "feels_like": 271.38, "temp_min": 277.59, "temp_max": 280.93, "pressure": 1019, "humidity": 28 }, "visibility": 16093, "wind": { "speed": 6.7, "deg": 310, "gust": 10.8 }, "clouds": { "all": 1 }, "dt": 1583095415, "sys": { "type": 1, "id": 4686, "country": "US", "sunrise": 1583062166, "sunset": 1583102848 }, "timezone": -18000, "id": 5128581, "name": "New York", "cod": 200 }} />

            </Layout>
        );
    }
}

export default Home;