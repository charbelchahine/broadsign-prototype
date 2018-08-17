import React from 'react'
import Link from './link'
import Logo from '../assets/images/logo.svg'

const Header = ({ children, data }) => (
	<header className="content">
		<Link to="/" activeClassName="active" className="navLogo">
			<img src={Logo} alt="Broadsign" className="broadsignLogo" />
		</Link>
		<div className="navLinks">{children}</div>
	</header>
)

export default Header