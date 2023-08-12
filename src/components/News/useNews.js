import { useState, useEffect } from "react";
import Axios from "axios";
import { NEWS_API_URL, POSTS_COUNT } from "../../utils/constants";

/**
 * @name useNews
 * @description News list hook
 * @returns {object} newsList - news array;
 *                   loading - boolean of loading state;
 *                   setCurrentPage - function to increment current page;
 *                   gettingMore - boolean, if false - hide more-button;
 *                   error - boolean of error state
 */
const useNews = () => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [gettingMore, setGettingMore] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getNews(page = 0) {
            try {
                setLoading(true);

                const response = (
                    await Axios.get(
                        `${NEWS_API_URL}&limit=${POSTS_COUNT}&offset=${page * POSTS_COUNT}`
                    )
                ).data;

                setNewsList((prev) => {
                    const newList = [...prev, ...response.results];
                    if (response.totalResults === newList.length) {
                        setGettingMore(false);
                    }
                    return newList;
                });
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getNews(currentPage);
    }, [currentPage]);

    return { newsList, loading, setCurrentPage, gettingMore, error };
};

export default useNews;
