import React from 'react';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import Axios from 'axios';
import Button from '../components/Button';
import { NEWS_API_URL } from '../utils/constants';
import Error from '../components/Error';
import Loading from '../components/Loading';

const PAGE_SIZE = 10;

class News extends React.Component {

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
        this.getArticles();
    }

    moreButtonHandle = () => {
        const nextPage = this.state.page + 1;
        this.setState({ page: nextPage });
        this.getArticles(nextPage);
    }

    getArticles = async (nextPage) => {
        try {
            const pageNumber = nextPage ? nextPage : this.page;
            const url = `${NEWS_API_URL}&country=us&pageSize=${PAGE_SIZE}&page=${pageNumber}`;
            const receivedData = (await Axios.get(url)).data;
            if (receivedData.totalResults <= this.state.articlesList.length) {
                this.setState({ showMoreButton: false });
            }
            if (receivedData.articles) {
                this.setState({ articlesList: [...this.state.articlesList, ...receivedData.articles] })
            }
        } catch {
            this.setState({ error: true });
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