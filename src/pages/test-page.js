import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const TestPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('test.title')} />
		<h1>
			{T.translate('test.header')}
		</h1>
		<p>{T.translate('test.message')}</p>
	</Layout>
)

export default TestPage