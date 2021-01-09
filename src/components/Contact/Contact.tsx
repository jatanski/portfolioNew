import React, { useEffect, useState, MouseEvent, FC } from "react";
import ContactView from "./Contact.view";
import "./contact.scss";
import { getShowSectionCheckpointsInput } from "../About/about.types";
import ShowSection from "../../utils/ShowSections";

const Contact: FC = () => {
	const showSection = new ShowSection();
	const [contactClassName, setContactClassName] = useState("contact");

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

	const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return <ContactView contactClass={contactClassName} sendMessage={sendMessage} />;
};

export default Contact;
