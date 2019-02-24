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
        <span>
          Tertarik ngobrol? Atau ada komentar atau saran? Langsung email aja :D
        </span>
        <div style={{ float: 'right' }}>
          <a href="mailto:fk.fikrikarim@gmail.com" target="_top">
            email
          </a>{' '}
          &bull;{' '}
          <a
            href="https://github.com/fikrikarim"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
