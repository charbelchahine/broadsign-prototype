import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Link from '../components/link'
import { Button } from 'react-md';
import homeHeader from '../assets/images/homeHeader.png'

import '../styles/css/index.css';

const seo = {
	title: 'Broadsign Prototype Home Page',
	description: 'That is a Gatsby Site hosted on Netlify'
}

const IndexPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname} seo={seo}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('home.title')} />
		<section id="homeHeader">
			<img src={homeHeader} alt="homeHeader" className="homeHeader" />
			<div id="text" className="content">
				<h1 id="title">{T.translate('home.header')}</h1>
				<p id="description">We're making it easier than ever to buy, sell and deliver digital out-of-home media accross the globe</p>
				<div id="ctas">
					<Button raised secondary swapTheming id="freeTrial">Start a free trial</Button>
					<Button raised primary swapTheming id="liveDemo">Request a live demo</Button>
				</div>
			</div>
		</section>
		<h1>{T.translate('home.header')} !</h1>
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
		<ul className="content">
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
		</ul>
	</Layout>
)

export default IndexPage
