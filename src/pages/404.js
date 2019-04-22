import React from 'react';

import Layout from '../components/FolioComponents/Layout';
import SEO from '../components/FolioComponents/Seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <h1>NOT FOUND</h1>
    <p>You will be redirected in a moment...</p>
  </Layout>
);

export default NotFoundPage;
