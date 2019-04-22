import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import favicon from '../assets/images/faviconPurple.png';

function SEO({ description, lang, meta, keywords, title, injectCSS }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.siteMetadata2018.description;
        const metaImage = 'http://thoughtatwork.cias.rit.edu/assets/graphics/WebBanner_TAW2018.jpg';
        const metaPageTitle = data.site.siteMetadata.siteMetadata2018.title;
        const metaSiteURL = 'https://thoughtatwork.org';

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}

            titleTemplate={'%s'
              .concat(
                title.length > 0
                  ?
                  ' | '.concat(title)
                  : ''
              )}
            meta={[]
              .concat(
                keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                  : []
              )
              .concat(meta)}
          >
            {/* <!-- Meta Page Info --> */}
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
            <meta name="google" content="notranslate" />
            <meta http-equiv="Content-Language" content="en" />
            <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=no" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="author" content="Jacob Frank" />

            {/* <!-- Primary Meta Tags --> */}
            <title>{metaPageTitle}</title>
            <meta name="title" content="{metaPageTitle}" />
            <meta name="description"
              content={metaDescription} />
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <link rel="icon" href={favicon} type="image/x-icon" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaSiteURL} />
            <meta property="og:title" content="{metaPageTitle}" />
            <meta property="og:description"
              content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:type" content="image/jpeg" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaSiteURL} />
            <meta property="twitter:title" content="{metaPageTitle}" />
            <meta property="twitter:description"
              content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />
            <style>
              {injectCSS}
            </style>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  title: '',
  injectCSS: ''
};

SEO.propTypes = {
  description: PropTypes.string,
  injectCSS: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery2018 {
  site {
    siteMetadata {
      siteMetadata2018 {
        title
        description
        author
      }
    }
  }
}
`;
