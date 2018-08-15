import React from 'react'
import Link from './link'
import Logo from '../assets/images/logo.svg'


const Header = ({ children, data }) => (
	<header>
		<h1>
			<Link to="/" activeClassName="active">
				<img src={Logo} alt="Logo" className="broadsignLogo" />
			</Link>
		</h1>
		<div>{children}</div>
	</header>
)

export default Header