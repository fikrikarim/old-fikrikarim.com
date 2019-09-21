import React from 'react';

import belikambing_1 from '../../assets/portfolio/belikambing_1.png';
import belikambing_2 from '../../assets/portfolio/belikambing_2.png';
import belikambing_3 from '../../assets/portfolio/belikambing_3.png';
import belikambing_4 from '../../assets/portfolio/belikambing_4.png';

export default function Belikambing() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }} id="belikambing">
        <a href="https://belikambing.com" target="_blank">
          Belikambing
        </a>
      </h2>

      <p>Dec 2018 - Jul 2019</p>

      <p>Marketplace for buying and selling livestocks in Indonesia.</p>

      <img src={belikambing_1} />

      <p>With social login.</p>

      <img src={belikambing_2} />

      <p>And admin dashboard.</p>

      <img src={belikambing_3} />

      <p>And payment.</p>

      <img src={belikambing_4} />

      <p>
        We were a three-person team, with I as the developer. We built this as a
        startup. We have legal entity. We launched and sold a couple of
        livestocks. I quit on July 2019 when my university period started, and
        because I wanted to build another project.
      </p>

      <p>
        We built this with Ruby on Rails framework, as that's the framework I'm
        most familiar with. We used popular gems like Devise, Rspec, Pundit, and
        Administrate. The project is hosted on Heroku.
      </p>
    </div>
  );
}
