import React from 'react';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';
import SpeakerGrid from '../../2018/components/Speaker/SpeakerGrid';
import Header from '../../2018/components/Header';

const pageTitle = 'Speakers';

const SpeakerPage = () => (
  <Layout>
    <SEO title={pageTitle} />
    <Header pageName={pageTitle}/>
    <SpeakerGrid/>
  </Layout>
);

export default SpeakerPage;
