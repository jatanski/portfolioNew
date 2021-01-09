import React, { FC } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

interface MenuViewProps {
	openButtonClassName: string;
	navWrapClassName: string;
	navClassName: string;
	openNav: () => void;
	closeNav: () => void;
	menuInfo: Array<{
		id: string;
		name: string;
	}>;
}

const MenuView: FC<MenuViewProps> = ({
	openButtonClassName,
	navClassName,
	navWrapClassName,
	openNav,
	closeNav,
	menuInfo,
}) => (
	<>
		<FontAwesomeIcon className={openButtonClassName} icon={faBars} onClick={openNav} />
		<section className={navWrapClassName}>
			<div className={navClassName}>
				<div className="nav__close">
					<FontAwesomeIcon className="nav__close--icon nav-icon" icon={faTimes} onClick={closeNav} />
				</div>
				<ul className="nav-list">
					{menuInfo.map(({ id, name }) => (
						<li key={id} className="nav-list__element" onClick={closeNav}>
							<Link to={id}>
								{" "}
								<p>{name}</p>{" "}
							</Link>
						</li>
					))}
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
		</section>
	</>
);

export default MenuView;
