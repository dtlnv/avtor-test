import React from 'react';
import Layout from '../components/Layout';
import { CITIES_API_URL } from '../utils/constants';
import Axios from 'axios';
import SearchCity from '../components/SearchCity';
import SearchList from '../components/SearchList';

class Cities extends React.Component {

    static getCities = async (prefix, callback) => {
        try {
            const url = `${CITIES_API_URL}&namePrefix=${prefix}`;
            const data = (await Axios.get(url)).data;
            callback(null, data)
        } catch (e) {
            callback(e)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            error: false,
        }
    }

    searchHandle = e => {
        Cities.getCities(e.target.value, (err, list) => {
            if (err) {
                this.setState({ error: true });
            } else {
                this.setState({ list: list.data });
            }
        });
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

export default Cities;