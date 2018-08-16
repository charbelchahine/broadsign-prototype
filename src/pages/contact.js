import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import contactHeader from '../assets/images/contactHeader.jpg'

const TestPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('contact.title')} />
		<section id="homeHeader">
			<img src={contactHeader} alt="contactHeader" className="contactHeader" />
		</section>
		<h1>
			{T.translate('contact.header')}
		</h1>
		<p>{T.translate('contact.message')}</p>
	</Layout>
)

export default TestPage