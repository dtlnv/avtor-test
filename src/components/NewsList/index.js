import React from 'react';
import PropTypes from 'prop-types';
import './_styles.css';
import { datetime } from '../../utils/functions';

const NewsList = ({ list }) => {
    return (
        <div className="news_list">
            <h1>News</h1>
            {list.length > 0 ?
                list.map(((post, index) => {
                    return <NewsItem post={post} key={index} />
                })) : null}
        </div>
    );
}

const NewsItem = ({ post }) => {
    return (
        <article>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
                <h2 className="title">{post.title}</h2>
            </a>
            <div className="time">{datetime(post.publishedAt)}</div>
            {post.urlToImage &&
                <div className="image"><img src={post.urlToImage} alt={post.title} /></div>
            }
            {post.description &&
                <div className="description">{post.description}</div>
            }
        </article>
    )
}

NewsList.propTypes = {
    list: PropTypes.array
}

export default NewsList;