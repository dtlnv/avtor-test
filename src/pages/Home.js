import React from 'react';
import Layout from '../components/Layout';
import { WEATHER_API_KEY, WEATHER_API_URL, WIcon } from '../utils/constants';
import Axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWeather: {}
        }
    }

    componentDidMount() {
        this.getLocation()

        if (this.state.latitude && this.state.longitude) {

        }
    }

    getLocation = async () => {
        navigator.geolocation.getCurrentPosition(async position => {
            if (position) {
                console.log(position)
                const url = `${WEATHER_API_URL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`;
                console.log(url)
                const receivedData = (await Axios.get(url)).data;
                console.log(receivedData)
                
                this.setState({
                    currentWeather: receivedData
                })
            }
        }, error => {
            console.error(error);
        }, {
            enableHighAccuracy: true
        });
    }

    render() {
        return (
            <Layout>
                home
                {'weather' in this.state.currentWeather && <img src={WIcon(this.state.currentWeather.weather[0].icon)} /> }
            </Layout>
        );
    }
}

export default Home;