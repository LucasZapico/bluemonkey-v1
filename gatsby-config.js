module.exports = {
  siteMetadata: {
    title: 'Blue Monkey Business Savy Web Design and Development',
    titleTemplate: '%s · Blue Monkey Web Design and Development',
    description:
      'Premium branding, design, development and business integration for small business and brands',
    author: '@bluemonkey',
    siteUrl: 'http://bluemonkey.com',
    baseUrl: 'bluemonkey.com',
    image: '/opengraph-gen.png',
    twitterUsername: '@bluemonkey',
    phone: '111.111.1111',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-WY6PSQNVTY',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://clairemorencyhypnotherapy.com',
        sitemap: 'http://clairemorencyhypnotherapy.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        height: 5,
        prependToBody: false,
        color: '#1E212D',
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
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
