import ReactGA from 'react-ga4';
import mixpanel from 'mixpanel-browser';

// ============================================================================
// INITIALIZATION
// ============================================================================

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
 * Initialize Mixpanel
 * @param token - Mixpanel Project Token
 */
export const initMixpanel = (token: string) => {
  if (!token) {
    console.warn('Mixpanel token is not provided');
    return;
  }

  mixpanel.init(token, {
    debug: import.meta.env.DEV,
    track_pageview: false, // We'll track manually for more control
    persistence: 'localStorage',
  });

  // Set initial super properties (sent with every event)
  mixpanel.register({
    platform: 'website',
    environment: import.meta.env.DEV ? 'development' : 'production',
  });

  console.log('Mixpanel initialized for website');
};

// ============================================================================
// USER IDENTIFICATION & PROPERTIES
// ============================================================================

/**
 * Set user properties in Mixpanel
 * @param properties - User properties to set
 */
export const setUserProperties = (properties: Record<string, any>) => {
  mixpanel.people.set(properties);
};

/**
 * Identify user and set initial properties
 */
export const identifyUser = () => {
  // Generate or retrieve anonymous user ID
  const userId = mixpanel.get_distinct_id();

  // Set user properties
  const userProperties = {
    $browser: navigator.userAgent,
    $device: /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    $screen_width: window.screen.width,
    $screen_height: window.screen.height,
    first_visit: new Date().toISOString(),
  };

  mixpanel.people.set_once(userProperties);

  return userId;
};

// ============================================================================
// PAGE TRACKING
// ============================================================================

/**
 * Track page views with both GA and Mixpanel
 * @param path - Page path
 * @param title - Page title
 */
export const trackPageView = (path: string, title?: string) => {
  // Google Analytics
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title || document.title,
  });

  // Mixpanel
  mixpanel.track('Page View', {
    page_path: path,
    page_title: title || document.title,
    page_url: window.location.href,
    referrer: document.referrer,
    url_params: Object.fromEntries(new URLSearchParams(window.location.search)),
  });
};

// ============================================================================
// EVENT TRACKING
// ============================================================================

/**
 * Track custom events with both GA and Mixpanel
 * @param category - Event category
 * @param action - Event action
 * @param label - Event label (optional)
 * @param value - Event value (optional)
 * @param additionalProps - Additional Mixpanel properties (optional)
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
  additionalProps?: Record<string, any>
) => {
  // Google Analytics
  ReactGA.event({
    category,
    action,
    label,
    value,
  });

  ReactGA.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    platform: 'website',
  });

  // Mixpanel with rich properties
  mixpanel.track(action, {
    category,
    label,
    value,
    page_url: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...additionalProps,
  });
};

// ============================================================================
// CTA & BUTTON TRACKING
// ============================================================================

/**
 * Track clicks on Chrome Web Store CTA
 * @param location - Where the CTA was clicked (e.g., 'hero', 'navbar', 'contact')
 * @param isInstalled - Whether extension is already installed
 */
export const trackChromeStoreClick = (location: string = 'unknown', isInstalled: boolean = false) => {
  trackEvent('CTA', 'Chrome Web Store Click', location, undefined, {
    cta_location: location,
    extension_installed: isInstalled,
    button_text: isInstalled ? 'Leave a Review' : 'Add to Chrome',
    destination_url: 'https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd',
  });
};

/**
 * Track YouTube link clicks
 * @param location - Where the link was clicked
 */
export const trackYouTubeClick = (location: string = 'unknown') => {
  trackEvent('CTA', 'YouTube Link Click', location, undefined, {
    cta_location: location,
    button_text: 'Open YouTube',
    destination_url: 'https://www.youtube.com',
  });
};

/**
 * Track generic CTA clicks
 * @param ctaName - Name of the CTA
 * @param location - Where the CTA was clicked
 * @param destinationUrl - Where the CTA leads
 */
export const trackCTAClick = (ctaName: string, location: string, destinationUrl?: string) => {
  trackEvent('CTA', 'CTA Click', ctaName, undefined, {
    cta_name: ctaName,
    cta_location: location,
    destination_url: destinationUrl,
  });
};

// ============================================================================
// SECTION & ENGAGEMENT TRACKING
// ============================================================================

/**
 * Track section views
 * @param sectionName - Name of the section
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent('Engagement', 'Section View', sectionName, undefined, {
    section_name: sectionName,
  });
};

/**
 * Track feature card interactions
 * @param featureName - Name of the feature
 * @param interactionType - Type of interaction (hover, click, view)
 */
export const trackFeatureInteraction = (
  featureName: string,
  interactionType: 'hover' | 'click' | 'view'
) => {
  trackEvent('Feature', 'Feature Interaction', featureName, undefined, {
    feature_name: featureName,
    interaction_type: interactionType,
  });
};

// ============================================================================
// FAQ TRACKING
// ============================================================================

/**
 * Track FAQ interactions
 * @param question - FAQ question that was clicked
 * @param action - Action taken (expand or collapse)
 */
export const trackFAQClick = (question: string, action: 'expand' | 'collapse' = 'expand') => {
  trackEvent('FAQ', 'FAQ Interaction', question, undefined, {
    faq_question: question,
    action: action,
  });
};

// ============================================================================
// NAVIGATION TRACKING
// ============================================================================

/**
 * Track navigation link clicks
 * @param linkName - Name of the navigation link
 * @param destination - Where the link leads
 */
export const trackNavClick = (linkName: string, destination: string) => {
  trackEvent('Navigation', 'Nav Link Click', linkName, undefined, {
    link_name: linkName,
    destination: destination,
  });
};

/**
 * Track mobile menu interactions
 * @param action - Action taken (open or close)
 */
export const trackMobileMenu = (action: 'open' | 'close') => {
  trackEvent('Navigation', 'Mobile Menu', action, undefined, {
    action: action,
  });
};

// ============================================================================
// SCROLL DEPTH TRACKING
// ============================================================================

let scrollDepthTracked: Record<string, boolean> = {
  '25': false,
  '50': false,
  '75': false,
  '100': false,
};

/**
 * Track scroll depth milestones
 */
export const trackScrollDepth = () => {
  const scrollPercentage = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  );

  // Track 25%, 50%, 75%, 100% milestones
  const milestones = [25, 50, 75, 100];
  milestones.forEach((milestone) => {
    if (scrollPercentage >= milestone && !scrollDepthTracked[milestone.toString()]) {
      scrollDepthTracked[milestone.toString()] = true;
      trackEvent('Engagement', 'Scroll Depth', `${milestone}%`, milestone, {
        scroll_depth: milestone,
        page_url: window.location.href,
      });
    }
  });
};

/**
 * Initialize scroll depth tracking
 */
export const initScrollTracking = () => {
  let scrollTimeout: number;

  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      trackScrollDepth();
    }, 150); // Debounce scroll events
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// ============================================================================
// TIMING & PERFORMANCE TRACKING
// ============================================================================

/**
 * Track time spent on page
 */
export const trackTimeOnPage = () => {
  const startTime = Date.now();

  const handleBeforeUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds

    mixpanel.track('Time on Page', {
      time_spent_seconds: timeSpent,
      page_url: window.location.href,
      page_path: window.location.pathname,
    });
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
};

// ============================================================================
// CONTACT & FOOTER TRACKING
// ============================================================================

/**
 * Track contact form submission
 */
export const trackContactSubmit = () => {
  trackEvent('Contact', 'Form Submit', 'Contact Form');
};

/**
 * Track footer link clicks
 * @param linkName - Name of the footer link
 * @param url - URL of the link
 */
export const trackFooterLinkClick = (linkName: string, url: string) => {
  trackEvent('Footer', 'Footer Link Click', linkName, undefined, {
    link_name: linkName,
    destination_url: url,
  });
};

// ============================================================================
// EXTENSION STATUS TRACKING
// ============================================================================

/**
 * Track extension installation status
 * @param isInstalled - Whether the extension is installed
 */
export const trackExtensionStatus = (isInstalled: boolean) => {
  mixpanel.people.set({
    extension_installed: isInstalled,
    last_status_check: new Date().toISOString(),
  });

  mixpanel.register({
    extension_installed: isInstalled,
  });
};

