import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import "./_styles.scss";
import { Button } from "../../_General/UI";

/**
 * @name NewsList
 * @description Renders list of the news based on received list
 * @param {array} list
 */
const NewsList = ({ list = [] }) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='news-list'>
      {showButton && (
        <Button className='scroll-to-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Scroll to top
        </Button>
      )}
      <h1>News</h1>

      {list.length > 0 ? list.map((post, index) => <NewsItem post={post} index={index} key={index} />) : null}
    </div>
  );
};

NewsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default NewsList;
