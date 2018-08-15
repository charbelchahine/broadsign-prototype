import React from "react"
import Link from "gatsby-link"

import Layout from '../components/layout'
import T from 'i18n-react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Img from "gatsby-image"

const BlogPage = ({pageContext, location, data }) => {
	
	const { lang } = pageContext;
	const { pathname } = location;
	
	return (
		<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title="Blog" />
		{data.allWordpressPost.edges.map(({node}) => (
			<div key={node.slug}>
			
			{node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fixed && 
		 	<Img fixed={node.featured_media.localFile.childImageSharp.fixed}/>}
			
				<Link to={'/blog/' + node.slug}>
                	<h3>{node.title}</h3>
                </Link>
                </div>
		))}
			</Layout>
);
};
export default BlogPage;

export const pageQuery = graphql`
query postsQuery{
	allWordpressPost{
		edges{
        	node{
				id
                title
                slug
				featured_media{
                	localFile{
                    	childImageSharp{
                        	fixed(width:380, height: 220){
                            	src
                            	width
                            	height
                  			}
                    	}
                	}
            	}
            }
		}
	}
}
`