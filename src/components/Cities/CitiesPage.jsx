import React from "react";
import Error from "../Common/Error";
import Layout from "../Common/Layout";
import { Input } from "../Common/UI";
import CitiesList from "./List";
import useCities from "./useCities";

/**
 * @name CitiesPage
 * @description Renders /cities page
 */
const CitiesPage = () => {
  const { list, setSearch, error } = useCities();

  return (
    <Layout>
      <Input onChange={(e) => setSearch(e.target.value)} placeholder="Type here the city name" />
      {list.length > 0 ? <CitiesList list={list} /> : error ? <Error /> : null}
    </Layout>
  );
};

export default CitiesPage;
