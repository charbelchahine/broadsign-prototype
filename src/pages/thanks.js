import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Link from '../components/link'

const ThanksPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('thanks.title')} />
		<h1>
			{T.translate('thanks.header')}
		</h1>
		<p>{T.translate('thanks.message')}</p>
		<Link to="/">{T.translate('thanks.link')}</Link>
	</Layout>
)

export default ThanksPage
