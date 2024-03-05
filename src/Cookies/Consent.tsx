import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
// import './styles.css';
import getConfig from './utils/CookieConsentConfig';

const Consent = () => {

  useEffect(() => {
    // TODO - Here you can run the CookieConsent conditionally
    CookieConsent.run(getConfig());
  }, []);

  return null;
}

export default Consent