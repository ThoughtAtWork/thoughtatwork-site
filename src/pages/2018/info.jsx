import React from 'react';
import Info from '../../2018/components/Info';
import Header from '../../2018/components/Header';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';


const pageTitle = 'Info';

const InfoPage = () => (
  <Layout>
    <SEO title={pageTitle} />
    <Header pageName='info' />
    <Info />
  </Layout>
);

export default InfoPage;