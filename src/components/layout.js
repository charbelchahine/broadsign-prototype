import React from 'react'
import Head from './head'
import Header from './header'
import Lang from './lang'
import { Button } from 'react-md';
import T from 'i18n-react'
import Link from './link'

export default ({ children, path, seo }) => (
	<div>
		<Head seo={seo} path={path} />
		<Header siteTitle="Broadsign">
			<Link to="/blog">
				<Button flat>Blog</Button>
			</Link>
			<Link to="/careers">
				<Button flat>{T.translate('careers.title')}</Button>
			</Link>
			<Link to="/contact">
				<Button flat>{T.translate('contact.title')}</Button>
			</Link>
			<Lang path={path} />
		</Header>
		<div>{children}</div>
	</div>
)
