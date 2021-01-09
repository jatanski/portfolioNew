import React, { FC } from "react";
import ContactForm from "./Contact.components/Contact.form";
import ContactInfo from "./Contact.components/Contact.info";
import { ContactViewProps } from "./contact.types";

const ContactView: FC<ContactViewProps> = ({ contactClass, sendMessage }) => (
	<section className={contactClass} id="contact">
		<h2 className="contact__title">Invite to contact with me.</h2>
		<ContactForm sendMessage={sendMessage} />
		<ContactInfo />
	</section>
);

export default ContactView;
