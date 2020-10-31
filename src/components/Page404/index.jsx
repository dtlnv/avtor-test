import React from "react";
import Error from "../Common/Error";
import Layout from "../Common/Layout";

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
