import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactInfo: FC = () => (
	<div className="contact__info">
		<span className="contact__info--email">
			<a className="email-link" href="mailto:hello@jakubtanski.com" target="_blank">
				<p className="email-link__text">hello@jakubtanski.com</p>
			</a>
			|
		</span>
		<div className="contact__info--media">
			<a className="media__icon" href="https://www.linkedin.com/in/jakub-tanski/">
				<FontAwesomeIcon color="white" icon={faLinkedin} />
			</a>
			<a className="media__icon" href="https://www.instagram.com/tanski_jakub/">
				<FontAwesomeIcon color="white" icon={faInstagram} />
			</a>
		</div>
	</div>
);

export default ContactInfo;
