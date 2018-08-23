import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Button } from 'react-md';

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import broadsignControl from '../assets/images/control.svg'
import broadsignReach from '../assets/images/reach.svg'
import broasignDirect from '../assets/images/direct.svg'
import broadsignPublish from '../assets/images/publish.svg'

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
				<Img fixed={data.TimeSquare.childImageSharp.fixed}  alt="timeSquare" className="timeSquare" />
				<div className="timeSquareText">
					<h2 className="timeSquareTitle">{T.translate('home.maximize')}</h2>
					<p className="timeSquareDescription">{T.translate('home.trusted')}</p>
				</div>
			</div>		
		</section>
		<section id="homeProducts" className="content">
			<div className="productRow">
				<div className="productText">
					<img src={broadsignControl} alt="broadsignControl" className="broadsignControl" />
					<span>{T.translate('home.distribute')}</span>
				</div>
				<Img fixed={data.ControlLaptop.childImageSharp.fixed} alt="controlLaptop" className="controlLaptop" />
			</div>
			<div className="productRow">
				<div className="productText">
					<img src={broadsignReach} alt="broadsignReach" className="broadsignReach" />
					<span>{T.translate('home.generate')}</span>
				</div>
				<Img fixed={data.ReachLaptop.childImageSharp.fixed}  alt="reachLaptop" className="reachLaptop" />
			</div>
			<div className="productRow">
				<div className="productText">
					<img src={broasignDirect} alt="broasignDirect" className="broasignDirect" />
					<span>{T.translate('home.sell')}</span>
				</div>
				<Img fixed={data.DirectLaptop.childImageSharp.fixed}  alt="directLaptop" className="directLaptop" />
			</div>
			<div className="productRow">
				<div className="productText">
					<img src={broadsignPublish} alt="broadsignPublish" className="broadsignPublish" />
					<span>{T.translate('home.empower')}</span>
				</div>
				<Img fixed={data.PublishLaptop.childImageSharp.fixed}  alt="publishLaptop" className="publishLaptop" />
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

	fragment fixedTimeSquare on File {
		childImageSharp {
			fixed(width: 450, height: 360, quality: 100) {
				...GatsbyImageSharpFixed_withWebp
			}
		}
	}

	fragment fixedProductLaptops on File {
		childImageSharp {
			fixed(width: 635, height: 325, quality: 100) {
				...GatsbyImageSharpFixed_withWebp
			}
		}
	}

	query IndexImages {
		Header: file(relativePath: { eq: "assets/images/homeHeader.png" }) {
			...fixedHeader
		}
		TimeSquare: file(relativePath: { eq: "assets/images/timeSquare.png" }) {
			...fixedTimeSquare
		}
		ControlLaptop: file(relativePath: { eq: "assets/images/controlLaptop.png" }) {
			...fixedProductLaptops
		}
		PublishLaptop: file(relativePath: { eq: "assets/images/publishLaptop.png" }) {
			...fixedProductLaptops
		}
		ReachLaptop: file(relativePath: { eq: "assets/images/reachLaptop.png" }) {
			...fixedProductLaptops
		}
		DirectLaptop: file(relativePath: { eq: "assets/images/directLaptop.png" }) {
			...fixedProductLaptops
		}
	}
`
