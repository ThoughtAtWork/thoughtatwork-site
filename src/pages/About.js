import React from 'react';
import Layout from '../components/FolioComponents/Layout';
const about = ({location}) => {
  return (
    <Layout location={location}>
      <h1>About Us</h1>
      <p>
        This is about us text
      </p>
    </Layout>
  );
};

export default about;
