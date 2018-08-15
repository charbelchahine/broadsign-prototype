// TODO: Clean Code & CSS
// REVIEW: SEO code & Accessibility
// FIXME: 404 error always in default language, redirects not working

module.exports = {
	siteMetadata: {
		title: 'Broadsign',
		description: 'Starter for Gatsby on netlify.',
		type: 'Person',
		name: 'Charbel Chahine',
		url: 'https://broadsign.netlify.com/',
		sameAs: [
			'http://www.facebook.com/your-profile',
			'http://www.twitter.com/yourProfile'
		],
		facebookAppID: '',
		twitterSiteID: '',
		twitterUserID: '',
		siteUrl: 'https://broadsign.netlify.com/'
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: ['gatsby-remark-autolink-headers']
			}
		},
		'gatsby-plugin-catch-links',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				include: /assets/
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Broadsign',
				short_name: 'Broadsign',
				start_url: '/',
				background_color: '#0E283F',
				theme_color: '#582644',
				display: 'minimal-ui',
				icon: 'static/icons/icon.png'
			}
		},
		'gatsby-plugin-sitemap',
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#582644`,
				showSpinner: false
			}
		},	
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: `broadsign.com`,
				protocol: `https`,
				hostingWPCOM: false,
				useACF: false,
				concurrentRequests: 10,
				verboseOutput: true,
				excludedRoutes: ["/*/*/comments", "/yoast/**", "/*/*/pages", "/*/*/yst_prominent_words", "/*/*/users", "/*/*/settings", "/oembed/**", "/*/*/*/me", "/acf/v3/tags", "/acf/v3/categories", "/wp/v2/tags"],
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
	]
}
