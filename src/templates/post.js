import React from "react"

import Layout from '../components/layout'
import T from 'i18n-react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Img from "gatsby-image"


const PostPage = ({pageContext, location, data }) => {

	const { lang } = pageContext;
	const { pathname } = location;
	
	return (
		<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={data.wordpressPost.title} />
			{data.wordpressPost.featured_media && data.wordpressPost.featured_media.localFile && data.wordpressPost.featured_media.localFile.childImageSharp && data.wordpressPost.featured_media.localFile.childImageSharp.fixed && 
		 	<Img fixed={data.wordpressPost.featured_media.localFile.childImageSharp.fixed}/>}
		
		<h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
		<div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
	</Layout>
);

};
export default PostPage;


export const pageQuery = graphql`
	query currentPostQuery($id: String!) {
    	wordpressPost(id: { eq: $id }) {
        	title
        	content
			featured_media{
                localFile{
                	childImageSharp{
                    	fixed(width:1200, height: 500){
                        	src
                            width
                            height
                     	}
                    }
                }
            }
        }
        site {
        	siteMetadata {
            	title
            }
        }
    }
`