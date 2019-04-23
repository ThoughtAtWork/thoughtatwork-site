import React from 'react';
import Layout from '../2018/components/Layout';
import SEO from '../2018/components/Seo';
import { Link } from 'gatsby';

const pageTitle = 'Page Not Found';

const NotFoundPage = () => (
  <Layout>
    <SEO title={pageTitle} />
    <div className='gridish-container'>
      <h1>NOT FOUND</h1>
      <p>You just found a page that doesn't exist :(</p>
      <h1><Link to='/2018/'>Click here to go back Home</Link></h1>
    </div>
  </Layout>
);

export default NotFoundPage;
