/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import "./menu.scss";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

const Menu = () => {
	const [showNav, setShowNav] = useState(false);

	const openNav = () => {
		setShowNav(true);
	};

	const closeNav = () => {
		setShowNav(false);
	};

	return (
		<section className="menu">
			{showNav ? (
				<div className="menu__nav">
					<div className="nav__close">
						<FontAwesomeIcon className="nav__close--icon nav-icon" icon={faTimes} onClick={closeNav} />
					</div>
					<ul className="nav-list">
						<li className="nav-list__element" onClick={closeNav}>
							<Link to="#home">Home</Link>
						</li>
						<li className="nav-list__element" onClick={closeNav}>
							<Link to="#about">About</Link>
						</li>
						<li className="nav-list__element" onClick={closeNav}>
							<Link to="#my-stack">My Stack</Link>
						</li>
						<li className="nav-list__element" onClick={closeNav}>
							<Link to="#projects">Projects</Link>
						</li>
						<li className="nav-list__element" onClick={closeNav}>
							<Link to="#contact">Contact</Link>
						</li>
					</ul>
					<ul className="nav-media">
						<li className="nav-media__linkedin">
							<a className="media__icon" href="https://www.linkedin.com/in/jakub-tanski/">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li className="nav-media__instagram">
							<a className="media__icon" href="https://www.instagram.com/tanski_jakub/">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
					</ul>
					<ul className="nav-legal">
						<li className="nav-legal__element">
							<a href="mailto:hello@jakubtanski.com" target="_blank">
								hello@jakubtanski.com
							</a>
						</li>
						<li className="nav-legal__element language-element">
							<p>Polish</p>
						</li>
					</ul>
				</div>
			) : (
				<FontAwesomeIcon className="menu__open nav-icon" icon={faBars} onClick={openNav} />
			)}
		</section>
	);
};

export default Menu;
