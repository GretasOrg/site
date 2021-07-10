import { format, parseISO } from "date-fns";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import GretasEffect from "../shared/GretasEffect";
import HighlightedText from "../shared/HighlightedText";
import PaperEffect from "../shared/PaperEffect";
import { MiniArticleBig, MiniArticleSmall } from "./MiniArticle";

export const miniBlogImage = graphql`
  fragment miniBlogImage on File {
    childImageSharp {
      gatsbyImageData(width: 401, placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
`;

export default function MiniBlog({ data }) {
  const { title, linkText, articles } = data;
  const query = useStaticQuery(graphql`
    query ArticlesQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/content/articles/**/index.md" }
        }
      ) {
        edges {
          node {
            frontmatter {
              name
              shortDescription
              date
              author
              categories
              image {
                ...miniBlogImage
              }
              imageAlt
              externalUrl
            }
          }
        }
      }
    }
  `);
  const {
    allMarkdownRemark: { edges },
  } = query;
  const filteredArticles = edges.filter(({ node: { frontmatter } }) =>
    articles.includes(frontmatter.name)
  );

  const renderArticle = (
    {
      node: {
        frontmatter: {
          name,
          author,
          date,
          image,
          imageAlt,
          categories,
          externalUrl,
        },
      },
    },
    index
  ) => {
    let Component;
    switch (index) {
      case 0:
      case 3:
        Component = MiniArticleSmall;
        break;
      case 1:
      case 2:
        Component = MiniArticleBig;
        break;
      default:
        if (index % 2 === 0) {
          Component = MiniArticleSmall;
        } else {
          Component = MiniArticleBig;
        }
    }
    return (
      <Component
        key={index}
        title={name}
        author={author}
        date={format(parseISO(date), "MMMM, d, y")}
        image={getImage(image)}
        imageAlt={imageAlt}
        url={externalUrl}
        tags={categories}
      />
    );
  };

  return (
    <section className="c-miniBlog">
      <div className="c-miniBlog__titleWrapper">
        <HighlightedText className="c-miniBlog__title">{title}</HighlightedText>
      </div>
      {filteredArticles.map(renderArticle)}
      <a
        className="c-miniBlog__action c-button c-button-danger"
        href="https://instagram.com/gretas_org"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
      <GretasEffect className="c-miniBlog__bg" />
      <PaperEffect className="c-miniBlog__bottom" />
    </section>
  );
}
