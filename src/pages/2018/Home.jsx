import React, { Component } from 'react';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';

export class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Layout>
        <SEO/>
        <p>Site loading..., go to / page</p>
      </Layout>
    );
  }
}

export default home;
