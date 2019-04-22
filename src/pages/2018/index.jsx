import React, { Component } from 'react';
import Home from '../../2018/components/Home/index';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" injectCSS="body {overflow: hidden;}"/>
        <Home/>
      </Layout>
    );
  }
}

export default index;
