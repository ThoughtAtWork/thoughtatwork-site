import React from 'react';
import Layout from '../2018/components/Layout';
import SEO from '../2018/components/Seo';
// import Archive from '../components/FolioComponents/Archive';
// import Intro from '../components/FolioComponents/Intro';
// import MyImg from '../components/FolioComponents/MyImg';
// import Listing from '../components/FolioComponents/Listing';

const pageTitle = 'Home';

const IndexPage = () => (
  <Layout>
    <SEO title={pageTitle} />
    {/* <MyImg src="bg.jpg" /> */}
    {/* <Intro /> */}
    {/* <Listing /> */}
    {/* <Archive /> */}
  </Layout>
);

export default IndexPage;
