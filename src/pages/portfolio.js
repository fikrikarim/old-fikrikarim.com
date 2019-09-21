import React from 'react';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';

import kbri_1 from '../assets/portfolio/kbri_1.png';
import kbri_2 from '../assets/portfolio/kbri_2.png';
import kbri_3 from '../assets/portfolio/kbri_3.png';
import kbri_4 from '../assets/portfolio/kbri_4.png';

class Portfolio extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <React.Fragment>
        <Helmet title="Portfolio of Fikri Karim" />
        <Layout location={this.props.location} title={siteTitle}>
          <main>
            <h1>Portfolio</h1>

            <h2>Attendance System for Indonesian Embassy</h2>
            <img src={kbri_1} />
            <img src={kbri_2} />
            <img src={kbri_3} />
            <img src={kbri_4} />
            <p>
              Barcode-scanning attendance web application system that's used by
              Indonesian Embassy in Thailand for year events that are attended
              by >600 Country's VIPs including 39 ambassadors.
            </p>
            <p>
              <i>
                Tech used: React, Redux, Firebase, Google Cloud Functions,
                Google Sheet API
              </i>
            </p>
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
