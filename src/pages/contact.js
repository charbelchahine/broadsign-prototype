import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import contactHeader from '../assets/images/contactHeader.jpg'
import { TextField, Button } from 'react-md';

const TestPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('contact.title')} />
		<section id="homeHeader">
			<img src={contactHeader} alt="contactHeader" className="contactHeader" />
		</section>
		<section id="contactContent" className="content">
			<h1 id="title">
				{T.translate('contact.header')}
			</h1>		
			<div class="contact">
				<h3>{T.translate('contact.mtl')}&nbsp;{T.translate('contact.headquarters')}</h3>
				<div class="contactInfo">
					<div id="address">
						<span>1100 Robert-Bourassa, {T.translate('contact.floor')}</span>
						<span>{T.translate('contact.mtlqc')}</span>
						<span>Canada H3B 3A5</span>
					</div>
					<div id="address">
						<span>{T.translate('contact.phone')}: +1 514 399 1184</span>
						<span>{T.translate('contact.tollfree')}: +1 877 399 1184</span>
						<span>{T.translate('contact.fax')}: +1 514 399-1187</span>	
					</div>	
				</div>
			</div>
			<div id="secondRow">
				<div class="contact">
					<h3>Toronto</h3>
					<span>240 Richmond Street&nbsp;W</span>
					<span>Toronto, ON</span>
					<span>Canada M5V 1V6</span>
				</div>
				<div class="contact">
					<h3>New York</h3>
					<span>404 5th Avenue</span>
					<span>New York, NY</span>
					<span>10018, USA</span>
					<span>{T.translate('contact.phone')}: +1 647 982 6835</span>
				</div>
				<div class="contact">
					<h3>{T.translate('contact.emea')}</h3>
					<strong>{T.translate('contact.belgium')}</strong>
					<span>{T.translate('contact.phone')}: +33 6 37 22 67 49</span>
					<strong>{T.translate('contact.germany')}</strong>
					<span>{T.translate('contact.phone')}: +31 (0) 20 808 1031</span>
				</div>
				<div class="contact">
					<h3>{T.translate('contact.china')}</h3>
					<span><strong>Broadsign (Shanghai) Software Technology Co., Ltd.</strong></span>
					<span>5/F Somekh Building Rockbund</span>
					<span>149 Yuanmingyuan Road, Shanghai, China</span>
					<span>{T.translate('contact.phone')}: +86 21 31203172</span>
				</div>
			</div>
		</section>
		<div id="gradientBar" className="content"></div>
		<section id="contactForm" className="content">
			<h6 id="contactFormTitle">Drop us a line</h6>
			<div className="contactGrid">
				<TextField
				id="floating-center-title"
				label={T.translate('contact.inquiry')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.email')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.first')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.last')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.phone')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.company')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
			</div>	
			<Button raised secondary swapTheming id="submitForm">{T.translate('contact.submit')}</Button>
		</section>
	</Layout>
)

export default TestPage