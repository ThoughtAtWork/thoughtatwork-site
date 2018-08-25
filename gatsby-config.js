module.exports = {
  siteMetadata: {
    title: 'Thought At Work 2018'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
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
    'gatsby-plugin-meta-redirect',
  ]
};
