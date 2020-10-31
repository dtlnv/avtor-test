import React from 'react';
import Layout from './Layout';
import { WEATHER_API_URL } from '../utils/constants';
import Axios from 'axios';
import Error from './Error';
import Loading from './Loading';
import CityCard from './CityCard';
import { connect } from 'react-redux';
import { removeCityHandle } from '../utils/globalStorage';

class Home extends React.Component {

    state = {
        currentWeather: {},
        following: [],
        error: false,
    }

    componentDidMount() {
        Home.getCurrentWeather((err, data) => {
            if (err) {
                this.setState({ error: true });
            } else {
                this.setState({ currentWeather: data });
            }
        });

        if (this.props.cities.length > 0) {
            this.props.cities.forEach(city => {
                Home.getCityWeather(city.name, (err, weather) => {
                    this.setState({ following: [...this.state.following, { cityId: city.id, ...weather }] })
                })
            })
        }
    }

    removeHandle = id => {
        const newFollowing = this.state.following.filter(city => city.cityId !== id);
        this.setState({ following: newFollowing });
        removeCityHandle(id);
    }

    render() {
        return (
            <Layout>
                {Object.keys(this.state.currentWeather).length > 0 ?
                    <CityCard weather={this.state.currentWeather} current />
                    :
                    this.state.error ?
                        <Error>Can't get your location.</Error>
                        :
                        <Loading />
                }
                {Object.keys(this.state.following).length > 0 ?
                    this.state.following.map(weather => (
                        <CityCard weather={weather} key={weather.cityId} removeHandle={this.removeHandle} />
                    ))
                    :
                    null
                }

            </Layout>
        );
    }
}

Home.getCityWeather = async (position, callback) => {
    try {
        callback(null, (await Axios.get(`${WEATHER_API_URL}&q=${position}`)).data)
    } catch (e) {
        callback(e);
    }
}

Home.getCurrentWeather = callback => {
    navigator.geolocation.getCurrentPosition(async position => {
        if (position) {
            try {
                callback(null, (await Axios.get(`${WEATHER_API_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)).data)
            } catch (e) {
                callback(e)
            }
        }
    }, error => {
        callback(error);
    }, {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 600000
    });
}

function mapStateToProps(state) {
    return {
        cities: state.cities || []
    }
}

export default connect(mapStateToProps)(Home);