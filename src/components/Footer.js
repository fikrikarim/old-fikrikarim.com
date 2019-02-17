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
        <span>Just send me emails. I like to talk to you.</span>
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
