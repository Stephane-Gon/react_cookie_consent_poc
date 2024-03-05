# React Cookie Consent

This POC provides an easy and fast way of setting up a Cookie consent in a react website. Where the user will be able to manage, consent or reject specific cookies.

This is the used package:

- [vanilla-cookieconsent@3.0.0](https://playground.cookieconsent.orestbida.com/)

---

## How to Install and Run the Project

> Recomendend using node version > 18.0.0

- Install all the packages:
```
  yarn
```

- Run the project:
```
  yarn start
```

---

### How does the package work?

- First I create a configuration file (**CookieConsentConfig.ts**), where I defined the styles, categories, languages and other configuration like options.  To se more about the configuration options click [here](https://cookieconsent.orestbida.com/reference/configuration-reference.html).

  - In this case I added ony 2 categories: necessary and analytics.
  - The necessary can't be disabled, this ones can be: csrf_token, cc_cookie, next_auth...
  - In the analytics I added 2 services: google_analytics_example and logRocket_example:
  
    - Each service has at least one cookie where you can pass an onAccept and onReject function that will enable or disable the service. More config options [here](https://cookieconsent.orestbida.com/reference/configuration-reference.html#categories).

  - I also added the guiOptions where I could tweak the main UI settings and appearance. More options [here](https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions).
  - A default language is also needed, in this case its Portuguese. To add more languages just create a file inside the **translations** folder and export an object with the same format as the one in the **pt.ts** file. To know more about languages configuration click [here](https://cookieconsent.orestbida.com/advanced/language-configuration.html).



- Then in the **Consent.tsx** file inside a use effect that will run only on the first render I call the [CookieConsent.run](https://cookieconsent.orestbida.com/reference/api-reference.html) function with my custom config function inside that will return the configuration object.
Here it's possible to run the CookieConsent conditionally, so if you only need to run it in Production this is a good place to do so.

- After in the **App.tsx** file I import my **Content.tsx** component and render it there.

- Inside the Cookies folder there's also a **styles.css** file, if That file is imported in the **Consent.tsx** component it will override the default styles.

