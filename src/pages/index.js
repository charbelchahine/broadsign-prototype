import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Link from '../components/link'
import { Button } from 'react-md';


import '../styles/css/index.css';

const seo = {
	title: 'Home Page',
	description: 'That is a Wise Story'
}

const IndexPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname} seo={seo}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('home.title')} />
		<h1>{T.translate('home.header')} !</h1>
		<Button flat className="homebutton">{T.translate('home.header')} !</Button>
		<T.p
			text={{
				key: 'home.welcome',
				var: (
					<a
						href="https://github.com/TomPichaud/wise-starter"
						target="_blank"
						rel="noopener noreferrer">
						Wise
					</a>
				)
			}}
		/>
		<p>{T.translate('home.message')}</p>
		<ul>
			<li>
				<Link to="/image">{T.translate('image.title')}</Link>
			</li>
			<li>
				<Link to="/thanks">{T.translate('thanks.title')}</Link>
			</li>
			<li>
				<Link to="/404">{T.translate('e404.title')}</Link>
			</li>
			<li>
				<Link to="/test-page">{T.translate('test.title')}</Link>
			</li>
			<li>
				<Link to="/careers">{T.translate('careers.title')}</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
