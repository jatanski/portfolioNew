import React, { FC } from "react";

const ContactLoader: FC = () => (
	<div className="contact-loader">
		<span className="contact-loader__text">Message is sending...</span>
		<div className="contact-loader__spin">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
);

export default ContactLoader;
