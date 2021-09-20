module.exports = {
  pathPrefix: `/swarmplus-lp`,
  siteMetadata: {
    title: `SwarmPlus`,
    description: `SwarmPlus landing page.`,
    author: `daichi.suyama`,
    siteUrl: `https://suyama-daichi.github.io/SwarmPlus-LP/`,
  },
  plugins: [
    `gatsby-plugin-typegen`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
