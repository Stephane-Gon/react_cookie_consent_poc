import { CookieConsentConfig } from 'vanilla-cookieconsent';
import { pt } from '../translations/pt';

const getConfig = () => {
  const config: CookieConsentConfig = {
    autoShow: true,
    cookie: {
      name: 'cc_cookie',
      expiresAfterDays: acceptType => {
        return acceptType === 'all' ? 365.25 : 182;
      },
    },
    guiOptions: {
      consentModal: {
        layout: 'cloud inline',
        position: 'bottom center',
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: 'bar',
        position: 'left',
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {
        enabled: true,
        autoClear: {
          cookies: [
            {
              name: /^_ga/,
            },
            {
              name: '_ga_example',
            },
            {
              name: '_lr_example'
            }
          ],
        },
        services: {
          _ga: {
            label: 'Google Analytics Example',
            cookies: [{ name: '_ga' }, { name: '_ga_example' }],
            onAccept: () => {
              //* Here you can add the code to enable the service
              document.cookie = '_ga=GA1.2.3.4; path=/';
              document.cookie = '_ga_example=GA1.2.3.4; path=/';
            },
            onReject: () => {
              //* Here you can add the code to disable the service
              document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
              document.cookie = '_ga_example=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            },
          },
          _lr: {
            label: 'LogRocket Example',
            cookies: [{ name: '_lr_example' }],
            onAccept: () => {
              //* Here you can add the code to enable the service
              document.cookie = '_lr_example=GA1.2.3.4; path=/';
            },
            onReject: () => {
              //* Here you can add the code to disable the service
              document.cookie = '_lr_example=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            },
          },
        },
      },
    },

    language: {
      default: 'pt',
      translations: {
        pt
      },
    },
  };

  return config;
};

export default getConfig;
