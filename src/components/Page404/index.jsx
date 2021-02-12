import React from "react";
import Error from "../_General/Error";
import Layout from "../_General/Layout";

/**
 * @name Page404
 * @description Renders not found page
 */
const Page404 = () => (
  <Layout>
    <Error title="404">Page not found.</Error>
  </Layout>
);

export default Page404;
