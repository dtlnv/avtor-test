import React from 'react';
import Layout from '../components/Layout';
import NewsList from '../components/NewsList';
import Axios from 'axios';
import Button from '../components/Button';
import { NEWS_API_KEY, NEWS_API_URL } from '../utils/constants';

const PAGE_SIZE = 10;

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articlesList: [],
            page: 1,
            showMoreButton: true
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
            const url = `${NEWS_API_URL}?country=ua&apiKey=${NEWS_API_KEY}&pageSize=${PAGE_SIZE}&page=${pageNumber}`;
            const receivedData = (await Axios.get(url)).data;
            if (receivedData.totalResults <= this.state.articlesList.length) {
                this.setState({ showMoreButton: false });
            }
            if (receivedData.articles) {
                this.setState({ articlesList: [...this.state.articlesList, ...receivedData.articles] })
            }
        } catch {
            // error
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
                    : '...'}
            </Layout>
        );
    }
}

export default News;