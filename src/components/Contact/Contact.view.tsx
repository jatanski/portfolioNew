/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React, { SFC, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

interface ContactViewInput {
	contactClass: string;
	sendMessage: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ContactView: SFC<ContactViewInput> = ({ contactClass, sendMessage }) => (
	<section className={contactClass} id="contact">
		<h2 className="contact__title">Invite to contact with me.</h2>
		<form action="submit" className="contact__form">
			<input placeholder="Email adress" type="email" className="contact__form--email" />
			<input placeholder="Message" type="text" className="contact__form--message" />
			<button onClick={sendMessage} className="contact__form--button">
				Say hi!
			</button>
			<label htmlFor="" className="contact__form--label">
				Send me message and I&apos;ll get in touch shortly!
			</label>
		</form>
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
	</section>
);

export default ContactView;
