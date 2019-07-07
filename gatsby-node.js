// The purpose of this file is to give control and what's being registered in Gatsby

const path = require('path');

plugins: [{
  resolve: 'gatsby-plugin-react-css-modules',
  options: {
    // *.css files are included by default.
    // To support another syntax (e.g. SCSS),
    // add 'postcss-scss' to your project's devDependencies
    // and add the following option here:
    filetypes: {
      '.scss': {
        syntax: 'postcss-scss'
      },
    },

    // Exclude global styles from the plugin using a RegExp:
    exclude: '\/global\/',
  },
}, ];

// creating speaker pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  //speaker template component
  const speakerTemplate = path.resolve('./src/components/templates/SpeakerContentfulTemplate.jsx');
  const eventTemplate = path.resolve('./src/components/templates/EventContentfulTemplate.jsx');

  // query for gettting speakers
  return graphql(`
  {
    speakers: allContentfulSpeakersLibrary {
      totalCount
      edges {
        node {
          slug
          name
          job
          webpage
          bio {
            bio
          }
          headshot {
            fluid {
              src
            }
          }
        }
      }
    }
    events: allContentfulEventsLibrary {
      totalCount
      edges {
        node {
          slug
          name
          coverPhoto {
            fluid(maxWidth: 400, maxHeight: 400) {
              src
            }
          }
          startTime
          endTime
          location
          description {
            description
          }
          eventRegistrationWebpage
          eventScheduleItems {
            name
            startTime
            endTime
            description {
              description
            }
            eventType
            location
            speakers {
              name
              slug
            }
          }
          speaker {
            job
            slug
            headshot {
              fluid(maxWidth: 400, maxHeight: 400) {
                src
              }
            }
          }
        }
      }
    }
  }
`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }


    // Create speakers page
    const speakers = result.data.speakers.edges;
    speakers.forEach((speaker) => {
      createPage({
        path: `/speakers/${speaker.node.slug}`,
        component: speakerTemplate,
        context: {
          slug: speaker.node.slug,
        },
      });
    });

    // Create events page
    const events = result.data.events.edges;
    events.forEach((event) => {
      createPage({
        path: `/events/${event.node.slug}`,
        component: eventTemplate,
        context: {
          slug: event.node.slug,
        },
      });
    });

  });
};
