import React from 'react'
import Head from './head'
import Header from './header'
import Lang from './lang'

export default ({ children, path, seo }) => (
	<div>
		<Head seo={seo} path={path} />
		<Header siteTitle="Wise Starter">
			<Lang path={path} />
		</Header>
		<div>{children}</div>
	</div>
)
