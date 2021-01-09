import React, { useEffect, useState, MouseEvent, FC, FormEvent } from "react";
import { useToasts } from "react-toast-notifications";
import { getShowSectionCheckpointsInput } from "../About/about.types";
import ShowSection from "../../utils/ShowSections";
import ContactService from "./Contact.service";
import ContactView from "./Contact.view";
import "./contact.scss";

const Contact: FC = () => {
	const showSection = new ShowSection();
	const contactService = new ContactService();
	const { addToast } = useToasts();
	const [contactClassName, setContactClassName] = useState("contact");
	const [senderMailAdress, setSenderMailAdress] = useState("");
	const [messageToSend, setMessageToSend] = useState("");
	const [isShowFetchLoader, setIsShowShowLoader] = useState(false);

	useEffect(() => showContactEffect());

	function showContactEffect() {
		window.addEventListener("scroll", showContactSection);
	}

	function showContactSection() {
		const getShowSectionCheckpointsData: getShowSectionCheckpointsInput = {
			moreThenFirstCheckpoint: {
				start: 2100,
				end: 5000,
			},
			belowFirstAndSecondChecpoint: {
				start: 1600,
				end: 5000,
			},
			lessThenSecondCheckpoint: {
				start: 1500,
				end: 5000,
			},
		};

		const { start, end } = showSection.getShowSectionCheckpoints(getShowSectionCheckpointsData);
		showSection.setSectionClassName(start, end, "contact", "contact showContact", setContactClassName);
	}

	const onChangeSenderMail = (e: FormEvent<HTMLInputElement>) => setSenderMailAdress(e.currentTarget.value);
	const onChangeMessageToSend = (e: FormEvent<HTMLInputElement>) => setMessageToSend(e.currentTarget.value);

	const onSubmitSendMessage = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const isMailAdressCorrect = contactService.validateEmail(senderMailAdress);

		if (isMailAdressCorrect) {
			setIsShowShowLoader(true);
			const result = await contactService.sendMessage(senderMailAdress, messageToSend);

			if (result) {
				addToast("Your message has been send!", {
					appearance: "success",
					autoDismiss: true,
				});
				setIsShowShowLoader(false);
				resetForm();
			} else {
				addToast("Something went wrong. Try again.", {
					appearance: "error",
					autoDismiss: true,
				});
				setIsShowShowLoader(false);
			}
		} else
			addToast("Your email adress is incorrect.", {
				appearance: "error",
				autoDismiss: true,
			});
	};

	function resetForm() {
		setMessageToSend("");
		setSenderMailAdress("");
	}

	return (
		<ContactView
			contactClass={contactClassName}
			sendMessage={onSubmitSendMessage}
			onChangeMessageToSend={onChangeMessageToSend}
			onChangeSenderMailAdress={onChangeSenderMail}
			senderMailAdress={senderMailAdress}
			messageToSend={messageToSend}
			isShowFetchLoader={isShowFetchLoader}
		/>
	);
};

export default Contact;
