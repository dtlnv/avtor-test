import React from 'react';
import Layout from '../components/Layout';
import NewsList from '../components/News';
import Axios from 'axios';
import Button from '../components/Button';
import { NEWS_API_URL, POSTS_COUNT } from '../utils/constants';
import Error from '../components/Error';
import Loading from '../components/Loading';

class News extends React.Component {

    static getArticles = async (nextPage, callback) => {
        try {
            const pageNumber = nextPage ? nextPage : this.page;
            const url = `${NEWS_API_URL}&country=us&pageSize=${POSTS_COUNT}&page=${pageNumber}`;
            callback(null, (await Axios.get(url)).data);
        } catch (e) {
            callback(e);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            articlesList: [],
            page: 1,
            showMoreButton: true,
            error: false
        }
    }

    componentDidMount() {
        News.getArticles(null, this.apiCallback);
    }

    moreButtonHandle = () => {
        const nextPage = this.state.page + 1;
        this.setState({ page: nextPage });
        News.getArticles(nextPage, this.apiCallback);
    }

    apiCallback = (err, list) => {
        if (err) {
            this.setState({ error: true });
        } else {
            if (list.totalResults <= this.state.articlesList.length) {
                this.setState({ showMoreButton: false });
            }
            if (list.articles) {
                this.setState({ articlesList: [...this.state.articlesList, ...list.articles] })
            }
        }
    }

    render() {
        return (
            <Layout>
                {this.state.articlesList.length > 0 ?
                    <>
                        <NewsList list={this.state.articlesList} />
                        {this.state.showMoreButton &&
                            <Button clickHandle={this.moreButtonHandle}>
                                More
                            </Button>
                        }
                    </>
                    : this.state.error ?
                        <Error />
                        : <Loading />}
            </Layout>
        );
    }
}

export default News;