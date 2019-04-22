import React from 'react';
import About from '../../2018/components/About';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return ( 
      <Layout>
        <SEO title="About"/>
        <About/>
      </Layout>
    );
  }
}