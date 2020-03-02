import React from 'react';
import Layout from '../components/Layout';
import { WEATHER_API_URL } from '../utils/constants';
import Axios from 'axios';
import Error from '../components/Error';
import Loading from '../components/Loading';
import CityCard from '../components/CityCard';
import { connect } from 'react-redux';
import { citiesSort } from '../utils/functions';
import { removeCityHandle } from '../utils/globalStorage';

class Home extends React.Component {

    static getCityWeather = async (position, callback) => {
        try {
            const url = `${WEATHER_API_URL}&lat=${position.lat}&lon=${position.lon}`;
            callback(null, (await Axios.get(url)).data)
        } catch (e) {
            callback(e);
        }
    }

    static getCurrentWeather = callback => {
        navigator.geolocation.getCurrentPosition(async position => {
            if (position) {
                try {
                    const url = `${WEATHER_API_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
                    callback(null, (await Axios.get(url)).data)
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

    constructor(props) {
        super(props);
        this.state = {
            currentWeather: {},
            following: [],
            error: false,
        }
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
            this.props.cities.sort(citiesSort).forEach(city => {
                Home.getCityWeather({lat: city.lat, lon: city.lon}, (err, weather) => {
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

function mapStateToProps(state) {
    return {
        cities: state.cities || []
    }
}

export default connect(mapStateToProps)(Home);