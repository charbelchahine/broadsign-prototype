/**
 * Gatsby's Node APIs.
 * https://www.gatsbyjs.org/docs/node-apis/
 **/

const path = require('path')
const i18n = require('./src/i18n/config/i18n')


const _ = require(`lodash`)
const Promise = require(`bluebird`)
const slash = require(`slash`)

const queryAll = require(`./src/queries/queryAll.js`)

exports.onCreatePage = ({ page, actions }) => {
	if (page.componentPath && page.componentPath.match(/pages|templates/)) {
		const { createPage, deletePage } = actions
		const getTitle = (object, path) => {
			var array = path.split('/').filter(val => val)
			if (path === '/') {
				array.push('home')
			}
			let value = {}
			value = array.reduce(
				(obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
				object
			)
			return value ? value.title : 'Untitled'
		}
		return new Promise(resolve => {
			deletePage(page)
			Object.keys(i18n).map(key => {
				return createPage({
					...page,
					path: i18n[key].path + page.path,
					context: {
						lang: i18n[key],
						title: getTitle(i18n[key], page.path)
					}
				})
			})
			resolve()
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve("./src/templates/post.js")
		const blogTemplate = path.resolve("./src/templates/blog.js")

		createPage({
			path: `/blog/`,
			component: slash(blogTemplate)
		});

		resolve(
			graphql(queryAll).then(result => {
				if (result.errors) reject(result.errors)

				const posts = result.data.allWordpressPost.edges

				posts.forEach(edge => {
					createPage({
						path: `/blog/${edge.node.slug}/`,
						component: slash(postTemplate),
						context: {
							id: edge.node.id,
						},
					});
				})
			})
		)
		resolve()
	})
}
