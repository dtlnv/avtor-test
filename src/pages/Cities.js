import React from 'react';
import Layout from '../components/Layout';
import { CITIES_API_URL } from '../utils/constants';
import Axios from 'axios';
import SearchCity from '../components/SearchCity';
import SearchList from '../components/SearchList';

class Cities extends React.Component {

    state = {
        list: [],
        error: false,
    }

    searchHandle = e => {
        if (e.target.value.length > 2) {
            Cities.getCities(e.target.value, (err, list) => {
                if (err) {
                    this.setState({ error: true });
                } else {
                    this.setState({ list });
                }
            });
        }
    }

    render() {
        return (
            <Layout>
                <SearchCity searchHandle={this.searchHandle} />
                {Object.keys(this.state.list).length > 0 ?
                    <SearchList list={this.state.list} />
                    :
                    null
                }
            </Layout>
        );
    }
}

Cities.getCities = async (prefix, callback) => {
    try {
        callback(null, (await Axios.get(`${CITIES_API_URL}&q=${prefix}`)).data.results);
    } catch (e) {
        callback(e)
    }
}

export default Cities;