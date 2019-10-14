import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: this.props.noMargin ? 0 : rhythm(2.5),
          paddingTop: this.props.noMargin ? 0 : rhythm(1),
        }}
      >
        {/* <span>
          Tertarik ngobrol? Atau ada komentar atau saran? Langsung email aja :D
        </span> */}
        <div style={{ float: 'left' }}>
          <a href="/cv">CV</a> &bull;
          <a href="/portfolio">Portfolio</a>
        </div>
        <div style={{ float: 'right' }}>
          <a href="https://instagram.com/fikrikm">Instagram</a> &bull;{' '}
          <a href="mailto:fk.fikrikarim@gmail.com" target="_top">
            Email
          </a>{' '}
          &bull;{' '}
          <a href="https://github.com/fikrikarim" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
