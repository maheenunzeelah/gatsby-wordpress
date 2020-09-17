module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
     resolve:'gatsby-source-wordpress',
     options:{
      normalizers: normalizers => [ mapCustomApis,...normalizers],
      //  excludedRoutes:['/wp'],
        baseUrl:`www.claritytxt.com`,
        // auth: {
        //   htaccess: {
        //     username: 'admin',
        //     password:'sibs2bad'
        //   },
        // },
        restApiRoutePrefix:"index.php/wp-json",
        
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/menus",
          "**/tags",
          // "**/wp/v2/**"
          // "**/taxonomies",
          // "**/users",
        ],
        verboseOutput: true,
        protocol:'https',
        hostingWPCOM:false,
        useACF:true,
        searchAndReplaceContentUrls: {
          sourceUrl: "www.claritytxt.com",
          replacementUrl: "http://localhost:8000",
        },
     }
    },
    'gatsby-plugin-styled-components',
    {
      resolve:'gatsby-plugin-prefetch-google-fonts',
      options:{
        fonts:[
          {
            family:'Teko',
            variants:['200','400','500','600','700']
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
const mapCustomApis = {
  name: `mapCustomApis`,
  normalizer: function({ entities }) {

    return entities.reduce((acc, e) => {
        return acc.concat(e);
     
    }, []);
    }
}