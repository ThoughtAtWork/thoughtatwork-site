import React from 'react';
import Schedule from '../../2018/components/Schedule';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';


const pageTitle = 'Schedule';

const schedule = () => (
  <Layout>
    <SEO title={pageTitle} />
    <Schedule />
  </Layout>
);

export default schedule;