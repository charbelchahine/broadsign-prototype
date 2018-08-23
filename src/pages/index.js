import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Button } from 'react-md';

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import timeSquare from '../assets/images/timeSquare.png'

import broadsignControl from '../assets/images/control.svg'
import broadsignReach from '../assets/images/reach.svg'
import broasignDirect from '../assets/images/direct.svg'
import broadsignPublish from '../assets/images/publish.svg'

import controlLaptop from '../assets/images/controlLaptop.svg'
import directLaptop from '../assets/images/directLaptop.svg'
import publishLaptop from '../assets/images/publishLaptop.svg'
import reachLaptop from '../assets/images/reachLaptop.svg'

import '../styles/css/index.css';

const seo = {
	title: 'Broadsign Prototype Home Page',
	description: 'That is a Gatsby Site hosted on Netlify'
}

const IndexPage = ({ pageContext: { lang }, location: { pathname }, data }) => (
	<Layout path={pathname} seo={seo}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('home.title')} />
		<section id="homeHeader">
			<Img fixed={data.Header.childImageSharp.fixed} alt="homeHeader" className="homeHeader" />
			<div id="text" className="content">
				<h1 id="title">{T.translate('home.header')}</h1>
				<p id="description">{T.translate('home.headerDescription')}</p>
				<div id="ctas">
					<Button raised secondary swapTheming id="freeTrial">{T.translate('home.freeTrial')}</Button>
					<Button raised primary swapTheming id="liveDemo">{T.translate('home.liveDemo')}</Button>
				</div>
			</div>
		</section>
		<section id="timeSquare">
			<div className="content">
				<img src={timeSquare} alt="timeSquare" className="timeSquare" />
				<div id="text">
					<h2 id="title">{T.translate('home.maximize')}</h2>
					<p id="description">{T.translate('home.trusted')}</p>
				</div>
			</div>		
		</section>
		<section id="homeProducts" className="content">
			<div className="productRow">
				<div className="productText">
					<img src={broadsignControl} alt="broadsignControl" className="broadsignControl" />
					<span>{T.translate('home.distribute')}</span>
				</div>
				<img src={controlLaptop} alt="controlLaptop" className="controlLaptop" />
			</div>
			<div className="productRow">
				<div className="productText">
					<img src={broadsignReach} alt="broadsignReach" className="broadsignReach" />
					<span>{T.translate('home.generate')}</span>
				</div>
				<img src={reachLaptop} alt="reachLaptop" className="reachLaptop" />
			</div>
			<div className="productRow">
				<div className="productText">
					<img src={broasignDirect} alt="broasignDirect" className="broasignDirect" />
					<span>{T.translate('home.sell')}</span>
				</div>
				<img src={directLaptop} alt="directLaptop" className="directLaptop" />
			</div>
			<div className="productRow">
				<div className="productText">
					<img src={broadsignPublish} alt="broadsignPublish" className="broadsignPublish" />
					<span>{T.translate('home.empower')}</span>
				</div>
				<img src={publishLaptop} alt="publishLaptop" className="publishLaptop" />
			</div>		
		</section>
	</Layout>
)

export default IndexPage

export const queryIndex = graphql`
	fragment fixedHeader on File {
		childImageSharp {
			fixed(width: 1600, height: 578, quality: 100) {
				...GatsbyImageSharpFixed_withWebp
			}
		}
	}

	query IndexImages {
		Header: file(relativePath: { eq: "assets/images/homeHeader.png" }) {
			...fixedHeader
		}
	}
`
