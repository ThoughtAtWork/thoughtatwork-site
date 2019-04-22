import React from 'react';
import Contact from '../../2018/components/Contact';
import Layout from '../../2018/components/Layout';
import SEO from '../../2018/components/Seo';

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <Contact />
      </Layout>
    );
  }
}