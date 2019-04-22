import React from 'react';
// import RegEmail from '../../2018/components/Speaker/RegEmail';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';

const pageTitle = 'Page Not Found';

const NotFoundPage = () => (
  <Layout>
    <SEO title={pageTitle} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    {/* <RegEmail/> */}
  </Layout>
);

export default NotFoundPage;
