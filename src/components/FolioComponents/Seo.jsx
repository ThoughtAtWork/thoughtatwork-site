import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import favicon from '../../images/icon.png';

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const socialImage = 'https://jacobdfrank.com/media/social.png';

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
            <meta name="google" content="notranslate" />
            <meta http-equiv="Content-Language" content="en" />
            <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=no" />

            <meta name="description" content={metaDescription} />

            <meta property="og:title" content="Jacob Frank; Developer, Designer, and Student" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={socialImage} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="https://jacobdfrank.com" />
            <meta property="og:url" content="https://jacobdfrank.com" />

            <meta name="apple-mobile-web-app-capable" content="yes" />

            <meta itemprop="name" content="Jacob Frank" />
            <meta itemprop="description" content={metaDescription} />
            <meta itemprop="image" content={socialImage} />

            <meta name="author" content="Jacob Frank" />

            <title>{title}</title>
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <link rel="icon" href={favicon} type="image/x-icon" />
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
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
