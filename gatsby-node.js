const fs = require('fs');
const yaml = require('js-yaml');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const ymlDoc = yaml.load(fs.readFileSync('./src/data/work.yaml', 'utf-8'));

  const casesRes = await graphql(`
    {
      allWorkYaml {
        edges {
          next {
            title
            path
          }
          previous {
            title
            path
          }
          node {
            content {
              branding
              business_integrations
              categories
              deliverables
              design
              development
              summary
              tags
              technology_stack
              title
            }
            categories
            images {
              design {
                src {
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
                alt
              }
              branding {
                src {
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
                alt
              }
              featured {
                src {
                  childImageSharp {
                    fluid {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
                alt
              }
            }
            data_created
            isComingSoon
            isdraft
            last_modified
            link
            subheader
            tags
            technology_stack
            title
            path
          }
        }
      }
    }
  `);

  const cases = casesRes.data.allWorkYaml.edges;
  cases.forEach((element) => {
    createPage({
      path: element.node.path,
      component: require.resolve('./src/templates/caseTemplate.js'),
      context: {
        element,
      },
    });
  });
};
