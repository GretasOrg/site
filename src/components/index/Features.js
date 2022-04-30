import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import HighlightedText from "../shared/HighlightedText";
import PaperEffect from "../shared/PaperEffect";

export const odsImage = graphql`
  fragment odsImage on File {
    childImageSharp {
      gatsbyImageData(width: 88, placeholder: BLURRED)
    }
  }
`;

export default function Features({ data }) {
  const { quotes, title } = data;
  const query = useStaticQuery(graphql`
    query ODSQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/ods/**/index.md" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              description
              image {
                ...odsImage
              }
              imageAlt
            }
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
  } = query;

  return (
    <section className="c-features" id="features">
      <HighlightedText className="c-features__title" color="faded-dark">
        {title}
      </HighlightedText>
      <p className="c-features__quotes">{quotes}</p>
      <ul className="l-features__list">
        {edges.map(({ node: { frontmatter: props } }, index) => (
          <li key={index} className="c-features__item c-feature">
            <GatsbyImage
              className="c-feature__img"
              image={getImage(props.image)}
              alt={props.imageAlt}
              loading="lazy"
            />
            <div className="l-feature__content">
              <h3 className="c-feature__title">{props.name}</h3>
              <p className="c-feature__text">{props.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <PaperEffect className="c-features__bottom" />
    </section>
  );
}
