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
<p>{T.translate('home.message')}</p>
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
		</ul> 
	</Layout>
)

export default ThanksPage
