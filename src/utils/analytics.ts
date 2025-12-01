import ReactGA from 'react-ga4';

/**
 * Initialize Google Analytics
 * @param measurementId - GA4 Measurement ID
 */
export const initGA = (measurementId: string) => {
  if (!measurementId) {
    console.warn('GA Measurement ID is not provided');
    return;
  }

  ReactGA.initialize(measurementId, {
    gaOptions: {
      // Custom dimensions to differentiate website traffic from extension
      platform: 'website',
    },
    gtagOptions: {
      send_page_view: true,
    },
  });

  console.log('Google Analytics initialized for website');
};

/**
 * Track page views
 * @param path - Page path
 * @param title - Page title
 */
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title,
  });
};

/**
 * Track custom events
 * @param category - Event category
 * @param action - Event action
 * @param label - Event label (optional)
 * @param value - Event value (optional)
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
  
  // Also send with custom parameter for platform differentiation
  ReactGA.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    platform: 'website',
  });
};

/**
 * Track clicks on Chrome Web Store CTA
 */
export const trackChromeStoreClick = () => {
  trackEvent('CTA', 'click', 'Chrome Web Store Button');
};

/**
 * Track section views
 * @param sectionName - Name of the section
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent('Engagement', 'section_view', sectionName);
};

/**
 * Track FAQ interactions
 * @param question - FAQ question that was clicked
 */
export const trackFAQClick = (question: string) => {
  trackEvent('FAQ', 'expand', question);
};

/**
 * Track contact form submission
 */
export const trackContactSubmit = () => {
  trackEvent('Contact', 'submit', 'Contact Form');
};
