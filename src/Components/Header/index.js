import React, {useState, Fragment} from 'react';
import cx from 'classnames';
import {header, logo, hamburger} from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignRight, faTimes} from '@fortawesome/free-solid-svg-icons'
import {Link, animateScroll as scroll} from "react-scroll";
import {Transition} from 'react-spring/renderprops';
// images
import Logo from './logo.png';

const Header = () => {
	const [isMenuVisible, setVisibility] = useState(false);
	const toggleMenuIconVisibility = () => setVisibility(!isMenuVisible);
	const menuItems = [
        {
            "route": "work",
            "name": "Work",
        },
		{
			"route": "about",
			"name": "About Me",
		},
		{
			"route": "experience",
			"name": "Experience",
		},
		{
			"route": "contact",
			"name": "Contact",
		}
	]
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<Fragment>
			<div className={cx(header)}>
				<div className={logo}>
					<img src={Logo} alt="Portfolio Logo" onClick={scrollToTop}/>
				</div>
				<button className={hamburger} onClick={toggleMenuIconVisibility}>
					<FontAwesomeIcon icon={faAlignRight} size="3x" className={!isMenuVisible ? 'show' : 'hide'}/>
					<FontAwesomeIcon icon={faTimes} size="3x" className={isMenuVisible ? 'show' : 'hide'}/>
				</button>
			</div>
			<div className={isMenuVisible ? 'menu open' : 'menu close'}>
				<nav>
					<Transition
						items={menuItems}
						keys={item => item.route}
						from={{transform: 'translate3d(0,-40px,0)'}}
						enter={{transform: 'translate3d(0,0px,0)'}}
						leave={{transform: 'translate3d(0,-40px,0)'}}>
						{item => props => <li onClick={toggleMenuIconVisibility} style={props}>
							<Link  to={item.route}>
								{item.name}
							</Link>
						</li>}
					</Transition>
				</nav>
			</div>
		</Fragment>
	)
}

export default Header;