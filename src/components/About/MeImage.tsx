import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MeImage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "jakub_tanski.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 900) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default MeImage;
