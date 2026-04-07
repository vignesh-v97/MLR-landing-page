// log the pageview with their URL
export const pageviewGA = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

interface EventParams {
  action: string;
  params: {};
}
// log specific events happening.
export const eventGAnalytics = ({ action, params }: EventParams): void => {
  window.gtag('event', action, {
    send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    ...params,
  });
};
export const eventGAds = ({ action, params }: EventParams): void => {
  window.gtag('event', action, {
    send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS,
    ...params,
  });
};
