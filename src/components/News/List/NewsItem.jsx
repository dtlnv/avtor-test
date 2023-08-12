import React from "react";
import PropTypes from "prop-types";
import { datetime } from "../../../utils/functions";

/**
 * @name NewsItem
 * @description Renders one news post
 * @param {object} post
 */
const NewsItem = ({ post }) =>
  Object.keys(post).length > 0 ? (
    <article className="news-post">
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <h2 className="title">{post.title}</h2>
      </a>
      <div className="time">{datetime(post.published_at)}</div>
      {post.image_url && (
        <div className="image">
          <img src={post.image_url} alt={post.title} />
        </div>
      )}
      {post.summary && <div className="description">{post.summary}</div>}
    </article>
  ) : null;

NewsItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default NewsItem;
