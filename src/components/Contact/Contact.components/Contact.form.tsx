import React, { FC } from "react";
import { ContactFormProps } from "../contact.types";

const ContactForm: FC<ContactFormProps> = ({ sendMessage }) => (
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
);

export default ContactForm;
