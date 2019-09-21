import React from 'react';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class Portfolio extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <React.Fragment>
        <Helmet title="Portfolio of Fikri Karim" />
        <Layout location={this.props.location} title={siteTitle}>
          <main>
            <h1>Portfolio</h1>
            <p>
              You are now confirmed. You can expect to receive emails as I
              create new content.
            </p>
          </main>
        </Layout>
      </React.Fragment>
    );
  }
}

export const pageQuery = graphql`
  query PortfolioSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Portfolio;
