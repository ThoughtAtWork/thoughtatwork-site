import React, { Component } from 'react';
import Layout from './Layout';

// Static query can be used anywhere. Doesn't accept variables, can't use context.

// Page query, must be used on pages
// this page takes in the data from gatsby node and style the pages accordingly
// which means you'd have a different template for eaach for speakers and events

export default class ProjectLayout extends Component {
  render() {
    const { location } = this.props;
    return <Layout location={location}></Layout>;
  }
}

// export const query = graphql`
//   query PostQuery($URLpath: String!) {
//     markdownRemark(frontmatter: { URLpath: { eq: $URLpath } }) {
//       html
//       frontmatter {
//         title
//         date
//         URLpath
//         tags
//         timePeriod
//         description
//       }
//     }
//   }
// `;
