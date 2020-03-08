/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import "./contact.scss";
import ContactView from "./Contact.view";

const Contact = () => {
	const [contactClass, setContactClass] = useState("contact");
	function showContact() {
		window.scrollY <= 2100 ? setContactClass("contact") : setContactClass("contact showContact");
	}

	useEffect(() => {
		window.addEventListener("scroll", showContact);
	});
	return <ContactView contactClass={contactClass} />;
};

export default Contact;
