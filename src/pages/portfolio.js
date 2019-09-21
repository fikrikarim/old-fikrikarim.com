import React from 'react';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';

import Kbri from '../components/portfolio/Kbri';
import Belikambing from '../components/portfolio/Belikambing';

class Portfolio extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <React.Fragment>
        <Helmet title="Portfolio of Fikri Karim" />
        <Layout location={this.props.location} title={siteTitle}>
          <main>
            <h1>Portfolio</h1>

            <Kbri />
            <Belikambing />
          </main>
          <Footer noMargin />
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
