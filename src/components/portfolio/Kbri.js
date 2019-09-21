import React from 'react';

import kbri_1 from '../../assets/portfolio/kbri_1.png';
import kbri_2 from '../../assets/portfolio/kbri_2.png';
import kbri_3 from '../../assets/portfolio/kbri_3.png';
import kbri_4 from '../../assets/portfolio/kbri_4.png';

export default function Kbri() {
  return (
    <div>
      <h2 style={{ marginBottom: 0 }}>
        Attendance System for Indonesian Embassy
      </h2>

      <p>Jun 2018 - Now</p>

      <p>
        Barcode-scanning attendance web application system that's used by
        Indonesian Embassy in Thailand for year events that are attended by >600
        Country's VIPs including 39 ambassadors.
      </p>

      <img src={kbri_1} />
      <p>
        The application is used by admins on the receptionist table. After
        logging in, admins choose the event they are working on.
      </p>
      <p>
        Then, admins scan the invitation card of each guest using barcode
        scanner.
      </p>
      <img src={kbri_2} />
      <p>
        The application fetchs the database of the guest from a Google Sheet,
        then shows it to see whether the card is correct or not.
      </p>
      <img src={kbri_3} />
      <p>
        We use Google Sheet as a database so admins can easily add and modify
        the database.
      </p>
      <img src={kbri_4} />
      <p>
        After confirming the information, admins click enter, and the entry is
        recorded to the event's sheet on the Google Sheet. Then the application
        is ready to scan the next guest.
      </p>
      <p>
        The project use React as the frontend framework, Redux as the state
        management, hosted at Firebase Hosting. Google Cloud Function as the
        FaaS backend for authentication and calling Google Sheet API. One cool
        thing is the project needs zero maintenance yayy.
      </p>
    </div>
  );
}
