import React, { FC } from "react";
import { ContactFormProps } from "../contact.types";
import ContactLoader from "./Contact.loader";

const ContactForm: FC<ContactFormProps> = ({
	sendMessage,
	messageToSend,
	senderMailAdress,
	onChangeSenderMailAdress,
	onChangeMessageToSend,
	isShowFetchLoader,
}) => (
	<form action="submit" className="contact__form">
		<input
			value={senderMailAdress}
			onChange={onChangeSenderMailAdress}
			placeholder="Email adress"
			type="email"
			className="contact__form--email"
		/>
		<input
			value={messageToSend}
			onChange={onChangeMessageToSend}
			placeholder="Message"
			type="text"
			className="contact__form--message"
		/>
		<button onClick={sendMessage} className="contact__form--button">
			{isShowFetchLoader ? <ContactLoader /> : "Say hi!"}
		</button>
		<label htmlFor="" className="contact__form--label">
			Send me message and I&apos;ll get in touch shortly!
		</label>
	</form>
);

export default ContactForm;
