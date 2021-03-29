/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gretas - Fortalecendo o Sertão`,
    description: `Trabalhamos com as comunidades rurais de Ibimirim
    no estímulo à autonomia e empoderamento de todos
    que nelas fazem morada, através de programas
    focados em saúde, segurança alimentar, educação e
    fonte de renda. Contribuímos para a diminuição das
    desigualdades sociais e promoção da dignidade
    humana.`,

    // <link rel="canonical" href="https://www.gretas.org/" />
    // <meta name="robots" content="index, follow" />

    // <meta property="og:type" content="article" />
    // <meta property="og:title" content="Gretas - Fortalecendo o Sertão" />
    // <meta
    //   property="og:description"
    //   content="Trabalhamos com as comunidades rurais de Ibimirim no estímulo à autonomia e empoderamento de todos que nelas fazem morada, através de programas focados em saúde, segurança alimentar, educação e fonte de renda. Contribuímos para a diminuição das desigualdades sociais e promoção da dignidade humana."
    // />
    // <meta property="og:image" content="https://gretas.org/assets/images/mulher-simbolo.jpg" />
    // <meta property="og:url" content="https://www.gretas.org/" />
    // <meta property="og:site_name" content="Projeto Gretas" />

    // <meta name="twitter:title" content="Gretas - Fortalecendo o Sertão" />
    // <meta
    //   name="twitter:description"
    //   content="Trabalhamos com as comunidades rurais de Ibimirim no estímulo à autonomia e empoderamento de todos que nelas fazem morada, através de programas focados em saúde, segurança alimentar, educação e fonte de renda. Contribuímos para a diminuição das desigualdades sociais e promoção da dignidade humana."
    // />
    // <meta name="twitter:image" content="https://gretas.org/assets/images/mulher-simbolo.jpg" />
    // <meta name="twitter:site" content="Projeto Gretas" />
    // <meta name="twitter:creator" content="Projeto Gretas" />
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
