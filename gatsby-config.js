if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}


module.exports = {
  siteMetadata: {
    title: 'Blue Monkey Business Savy Web Design and Development',
    titleTemplate: '%s · Blue Monkey Web Design and Development',
    description:
      'Premium frugal branding, design, development and business integration for small business and brands',
    author: '@bluemonkey',
    siteUrl: process.env.SITE_URL,
    baseUrl: 'bluemonkeymakes.com',
    image: '/opengraph-gen.png',
    twitterUsername: '@bluemonkey',
    phone: '‪(415) 379-0498',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    `gatsby-transformer-yaml`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-sitemap',

    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // without options
          'gatsby-remark-normalize-paths',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTIC_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bluemonkeymakes.com',
        sitemap: 'https://bluemonkeymakes.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout-cases.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        height: 5,
        prependToBody: false,
        color: '#FAF3E0',
        footerHeight: 500,
        headerHeight: 0,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
  ],
};
