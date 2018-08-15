module.exports = {
  siteMetadata: {
    title: 'Thought At Work 2018'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // initializing a plugin
      resolve: 'gatsby-source-filesystem',
      // giving it a path and name as to where the files will be
      options: {
        path: '${__dirname}/src/',
        name: 'pages',
      }
    },
    'gatsby-plugin-catch-links', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '${__dirname}/src/pages',
        name: 'pages'
      }
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-96615084-2',
        // Setting this parameter is optional
        anonymize: false
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ]
};
