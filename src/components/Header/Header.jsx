import './Header.scss'

import { Link } from 'react-router-dom'

//images
import logo from '../../images/logo.svg'
import login from '../../images/login.svg'



export const Header = () => {
	return (
		<div className="wrapper">
			<header className="header">
				<div className="header__logo">
					<Link to='/createx'><img src={logo} alt="logo" width="130" height="22" /></Link>
				</div>
				<div className="header__navigation">
					<ul>
						<li><Link to='/about'>About Us</Link></li>
						<li><Link to='/courses'>Courses</Link></li>
						<li><Link to='/events'>Events</Link></li>
						<li><Link to='/blog'>Blog</Link></li>
						<li><Link to='/contacts'>Contacts</Link></li>
					</ul>
				</div>
				<button className="header__get-consult-button button_orange">
					Get consultation
				</button>
				<div className="header__login">
					<img
						src={login}
						alt="logo"
						width="16.67"
						height="17.92"
					/>
					<span>Log in / Register</span>
				</div>
			</header>
		</div>
	)
}
