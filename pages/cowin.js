import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";
function cowin() {
  return (
    <>
      <Head>
        <title>2nd Page</title>
      </Head>
      <Layout title="2ndpage">
        <h2 className="title">This is Cowin Portal</h2>
      </Layout>
    </>
  );
}

export default cowin;
