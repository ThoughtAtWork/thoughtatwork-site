import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/FolioComponents/Layout';
import SEO from '../components/FolioComponents/Seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
