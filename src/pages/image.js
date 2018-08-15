import React from 'react'
import { graphql } from 'gatsby'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const ImagePage = ({ pageContext: { lang }, location: { pathname }, data }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('image.title')} />
		<h1>{T.translate('image.header')}</h1>
		<h2>Fixed</h2>
		<Img fixed={data.Face.childImageSharp.fixed} />
		<h2>Fluid</h2>
		<Img fluid={data.Face.childImageSharp.fluid} />
	</Layout>
)

export default ImagePage

export const query = graphql`
	fragment fixedImage on File {
		childImageSharp {
			fixed(width: 256, height: 256, quality: 100) {
				...GatsbyImageSharpFixed_withWebp_tracedSVG
			}
		}
	}

	fragment fluidImage on File {
		childImageSharp {
			fluid(maxWidth: 256, quality: 100) {
				...GatsbyImageSharpFluid_withWebp_tracedSVG
			}
		}
	}

	query Image {
		Face: file(relativePath: { eq: "assets/images/Face.jpg" }) {
			...fixedImage
			...fluidImage
		}
	}
`
