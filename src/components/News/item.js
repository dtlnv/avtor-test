import React from 'react';
import PropTypes from 'prop-types';
import { datetime } from '../../utils/functions';

/**
 * @name NewsItem
 * @description Print one news post
 * @param {object} post
 */

const NewsItem = ({ post }) => (
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
);

NewsItem.propTypes = {
    post: PropTypes.object.isRequired
}

export default NewsItem;