module.exports = {
  pathPrefix:  "/JishnuRameshWebsite",
  siteMetadata: {
    title: `Jishnu Ramesh`,
    description: `Portfolio website for Jishnu Ramesh`,
    author: `@jishnuRamesh`,
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
        name: `jishnu-ramesh-portfolio`,
        short_name: `jishnu-ramesh`,
        start_url: `/`,
        background_color: `#fa8017`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
