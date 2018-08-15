import React from 'react'
import Link from './link'

const Header = ({ children }) => (
	<header>
		<h1>
			<Link to="/" activeClassName="active">
				Broadsign
			</Link>
		</h1>
		<div>{children}</div>
	</header>
)

export default Header
