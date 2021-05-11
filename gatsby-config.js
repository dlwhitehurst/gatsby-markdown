module.exports = {
  siteMetadata: {
    title: "MS3 KMaaS Phase 1",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
  ],
};
