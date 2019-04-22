require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Thought At Work',
    description: 'Thought At Work is a student-run design organization dedicated to the growth of young designers and the facilitation of cross-disciplinary design education.',
    author: '@JacobDFrank',
    siteUrl: 'https://www.thoughtatwork.org/',
    siteMetadata2018: {
      title: 'TAW2018',
      description: 'Thought At Work is a three-day, student-run, student-focused design conference that takes place every October at Rochester Institute of Technology.',
      author: '@JacobDFrank',
      siteUrl: 'https://www.thoughtatwork.org/2018',
    }
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Nunito'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
        downloadLocal: true,
      },
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-96615084-2',
        // Setting this parameter is optional
        anonymize: false
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team',
        path: `${__dirname}/src/team`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'speakers2018',
        path: `${__dirname}/src/2018/speakers`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team2018',
        path: `${__dirname}/src/2018/team`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'schedule2018',
        path: `${__dirname}/src/2018/schedule`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest', // customize this so that when the site is saved in a bookmark, etc that the icon, color, and information can be stored on someone's device correctly
      // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
      options: {
        name: 'Thought At Work website',
        short_name: 'TAW',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/assets/images/faviconPurple.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
    'gatsby-plugin-offline',
  ],
};
