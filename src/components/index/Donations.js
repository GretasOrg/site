import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import HighlightedText from "../shared/HighlightedText";
import PaperEffect from "../shared/PaperEffect";
import Donation from "./Donation";

export const donationImage = graphql`
  fragment donationImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 401
        height: 168
        placeholder: BLURRED
        layout: FULL_WIDTH
      )
    }
  }
`;

export default function Donations({ id, data }) {
  const { bgImgLeft, bgImgRight, linkText, title } = data;
  const bgImgLeftObj = getImage(bgImgLeft.childImageSharp.gatsbyImageData);
  const bgImgRightObj = getImage(bgImgRight.childImageSharp.gatsbyImageData);

  const query = useStaticQuery(graphql`
    query DonationsQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/content/donations/**/index.md" }
        }
      ) {
        edges {
          node {
            frontmatter {
              name
              description
              auxText
              value
              isEditable
              planId
              image {
                ...donationImage
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
    <section className="c-donations" id={id}>
      <HighlightedText className="c-donations__title" color="faded-dark">
        {title}
      </HighlightedText>
      <GatsbyImage
        className="c-donations__bgLeft"
        image={bgImgLeftObj}
        alt="TODO"
        loading="lazy"
        style={{ position: "absolute" }}
      />
      <GatsbyImage
        className="c-donations__bgRight"
        image={bgImgRightObj}
        alt="TODO"
        loading="lazy"
        style={{ position: "absolute" }}
      />
      <div className="l-donations__listWrapper">
        <ul className="l-donations__list">
          {edges.map(({ node: { frontmatter: props } }) => (
            <li key={props.name}>
              <Donation {...props} image={getImage(props.image)} />
            </li>
          ))}
        </ul>
      </div>
      <a
        className="c-button c-button-danger c-donations__action"
        href="https://instagram.com/gretas_org"
      >
        {linkText}
      </a>
      <PaperEffect className="c-donations__bottom" />
    </section>
  );
}
