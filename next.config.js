/* eslint-disable import/no-extraneous-dependencies */
const withTM = require('next-transpile-modules')(['react-simple-captcha']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const settings = {
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  // reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     // {
  //     //   source: '/personal-injury',
  //     //   destination: '/expertise/personal-injury',
  //     //   permanent: true,
  //     // },
  //     {
  //       source: '/medical-malpractice',
  //       destination: '/expertise/medical-malpractice',
  //       permanent: true,
  //     },
  //     {
  //       source: '/mass-tort',
  //       destination: '/expertise/mass-tort',
  //       permanent: true,
  //     },
  //     {
  //       source: '/product-liability',
  //       destination: '/expertise/product-liability',
  //       permanent: true,
  //     },
  //     {
  //       source: '/medical-records-review-services',
  //       destination: '/services',
  //       permanent: true,
  //     },
  //     {
  //       source: '/medical-chronologies-timeline-summaries',
  //       destination: '/services/medical-chronology',
  //       permanent: true,
  //     },
  //     {
  //       source: '/narrative-summary',
  //       destination: '/services/narrative-summary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/settlement-demand-letter',
  //       destination: '/services/settlement-demand-letter',
  //       permanent: true,
  //     },
  //     {
  //       source: '/expert-medical-opinion',
  //       destination: '/services/expert-medical-opinion',
  //       permanent: true,
  //     },
  //     {
  //       source: '/deposition-summary',
  //       destination: '/services/deposition-summary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/billing-summary',
  //       destination: '/services/billing-summary',
  //       permanent: true,
  //     },
  //     {
  //       source: '/providers-list',
  //       destination: '/services/providers-list',
  //       permanent: true,
  //     },
  //     {
  //       source: '/pdf-sorting-merging',
  //       destination: '/services/pdf-sorting',
  //       permanent: true,
  //     },
  //     {
  //       source: '/medical-transcription',
  //       destination: '/services/medical-transcription',
  //       permanent: true,
  //     },
  //     {
  //       source: '/med-a-word-med-interpret',
  //       destination: '/services/med-a-word',
  //       permanent: true,
  //     },
  //     {
  //       source: '/bookmarks',
  //       destination: '/services/bookmarks',
  //       permanent: true,
  //     },
  //     {
  //       source: '/hot-links-hyperlinks',
  //       destination: '/services/hot-links',
  //       permanent: true,
  //     },
  //     {
  //       source: '/missing-records-identification',
  //       destination: '/services/missing-records-identification/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/special-reports',
  //       destination: '/services/special-reports',
  //       permanent: true,
  //     },
  //   ];
  // },
};

const withTMAdded = withTM(settings);

module.exports = withBundleAnalyzer(withTMAdded);
