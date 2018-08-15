import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

import import_careers from '../components/import_careers';

const Careers = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('careers.title')} />
		<h1>
			{T.translate('careers.header')}
		</h1>
		<div id="BambooHR-ATS">{import_careers()}</div>
	</Layout>
)

export default Careers