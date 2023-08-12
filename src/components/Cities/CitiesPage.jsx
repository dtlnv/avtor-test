import React from "react";
import Error from "../_General/Error";
import Layout from "../_General/Layout";
import { Input } from "../_General/UI";
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
      <Input autoFocus onChange={(e) => setSearch(e.target.value)} placeholder="Type here the city name" />
      {list.length > 0 ? <CitiesList list={list} /> : error ? <Error /> : null}
    </Layout>
  );
};

export default CitiesPage;
