/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState, MouseEvent } from "react";
import "./contact.scss";
import ContactView from "./Contact.view";

const Contact = () => {
	const [contactClass, setContactClass] = useState("contact");

	function selectAndSetContactClass(scrollPosition: number) {
		window.scrollY <= scrollPosition ? setContactClass("contact") : setContactClass("contact showContact");
	}

	function showContact() {
		if (window.outerHeight > 736) selectAndSetContactClass(2100);
		else if (window.outerHeight <= 736 && window.outerHeight > 667) selectAndSetContactClass(1600);
		else if (window.outerHeight <= 667) selectAndSetContactClass(1500);
	}

	const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	useEffect(() => window.addEventListener("scroll", showContact));

	return <ContactView contactClass={contactClass} sendMessage={sendMessage} />;
};

export default Contact;
