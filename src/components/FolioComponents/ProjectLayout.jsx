import React, { Component } from 'react';
import Layout from './Layout';
import { graphql } from 'gatsby';

// Static query can be used anywhere. Doesn't accept variables, can't use context.

// Page query, must be used on pages
// this page takes in the data from gatsby node and style the pages accordingly
// which means you'd have a different template for eaach for speakers and events

export default class ProjectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <Layout location={location}>
        <section className="intro">
          <span className="meta-data code">{markdownRemark.frontmatter.tags} - {markdownRemark.frontmatter.timePeriod}</span>
          <h2><b>{markdownRemark.frontmatter.title}</b> — {markdownRemark.frontmatter.description}</h2>

        </section>
        <section className="content" dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }} />
      </Layout>
    );
  }
}

export const query = graphql`
    query PostQuery($URLpath: String!) {
      markdownRemark(frontmatter: {
      URLpath: {
        eq: $URLpath
        }
      }) {
      html
      frontmatter {
        title
        date
        URLpath
        tags
        timePeriod
        description
      }
    }
  }
`;