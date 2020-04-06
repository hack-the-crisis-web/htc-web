var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'The Global Hack',
    description:
      'Global hack is the biggest online hackathon in the world fighting off the crisis to battle the problems we are facing as a global society after the immediate corona crisis is over. We are bringing together world class mentors and globally talented teams to build the solutions for the better future. Together.',
    url: 'https://theglobalhack.com',
    titleTemplate: '%s | The Global Hack',
    twitterUsername: '@theglobalhack',
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy.createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-161868180-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '584421012148265',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // needs to be first, otherwise build fails
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        // purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
