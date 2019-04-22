import React, { Component } from 'react';
import Coc from '../../2018/components/Code_Of_Conduct';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';

export default class Code_Of_Conduct extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Code of Conduct" />
        <Coc/>
      </Layout>
    );
  }
}
