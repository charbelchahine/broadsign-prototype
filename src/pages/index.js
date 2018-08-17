import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Button } from 'react-md';

import homeHeader from '../assets/images/homeHeader.png'
import timeSquare from '../assets/images/timeSquare.png'

import broadsignControl from '../assets/images/broadsignControl.svg'
import broadsignReach from '../assets/images/broadsignReach.svg'
import broasignDirect from '../assets/images/broadsignDirect.svg'
import broadsignPublish from '../assets/images/broadsignPublish.svg'

import controlLaptop from '../assets/images/controlLaptop.svg'
import directLaptop from '../assets/images/directLaptop.svg'
import publishLaptop from '../assets/images/publishLaptop.svg'
import reachLaptop from '../assets/images/reachLaptop.svg'

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
