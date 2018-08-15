'use strict'

module.exports = `
    {        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
					featured_media{
                		localFile{
                    		childImageSharp{
                        		resolutions(width:380, height: 220){
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