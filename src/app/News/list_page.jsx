import React from "react";
import Layout from "../Common/Layout";
import NewsList from "./List/NewsList";
import { Button, Loading } from "../Common/UI";
import useNews from "./useNews";
import Error from "../Common/Error";

const NewsPage = () => {
  const { newsList, loading, setCurrentPage, gettingMore, error } = useNews();

  const getMoreAction = () => {
    setCurrentPage((prev) => ++prev);
  };

  return (
    <Layout>
      {newsList.length > 0 ? (
        <>
          <NewsList list={newsList} />
          {gettingMore ? (
            loading ? (
              <Loading />
            ) : (
              <Button onClick={getMoreAction}>More</Button>
            )
          ) : null}
        </>
      ) : error ? (
        <Error />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default NewsPage;
