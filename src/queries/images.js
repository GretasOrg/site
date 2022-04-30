import { graphql } from "gatsby";

export const fullWidthImageFragment = graphql`
  fragment fullWidthImageFragment on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
`;
