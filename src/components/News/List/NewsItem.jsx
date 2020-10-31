import React from "react";
import PropTypes from "prop-types";
import { datetime } from "../../../utils/functions";

/**
 * @name NewsItem
 * @description Print one news post
 * @param {object} post
 */

const NewsItem = ({ post }) =>
  Object.keys(post).length > 0 ? (
    <article className="news-post">
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <h2 className="title">{post.title}</h2>
      </a>
      <div className="time">{datetime(post.publishedAt)}</div>
      {post.urlToImage && (
        <div className="image">
          <img src={post.urlToImage} alt={post.title} />
        </div>
      )}
      {post.description && (
        <div className="description">{post.description}</div>
      )}
    </article>
  ) : null;

NewsItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default NewsItem;
