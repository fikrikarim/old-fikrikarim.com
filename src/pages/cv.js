import React from 'react';
import Helmet from 'react-helmet';

class Cv extends React.Component {
  render() {
    return (
      <Helmet>
        <meta
          http-equiv="refresh"
          content={'0;url=Resume_of_Fikri_Karim.pdf'}
        />
      </Helmet>
    );
  }
}
export default Cv;
