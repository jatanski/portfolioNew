/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import "./about.scss";
import AboutView from "./About.view";

const About = () => {
	const [aboutClass, setAboutClass] = useState("about");
	const [namePosition, setNamePosition] = useState("translateX(0px)");
	const [admissionPosition, setAdmissionPosition] = useState("translateX(0px)");

	function selectAndSetAboutClass(number1: number, number2: number) {
		window.scrollY <= number1 || window.scrollY >= number2
			? setAboutClass("about")
			: setAboutClass("about showAbout");
	}

	function showAbout() {
		if (window.outerHeight > 736) selectAndSetAboutClass(500, 1800);
		else if (window.outerHeight <= 736 && window.outerHeight > 667) selectAndSetAboutClass(220, 1100);
		else if (window.outerHeight <= 667) selectAndSetAboutClass(150, 1100);
	}

	function changeNamePosition() {
		const actualNamePosition = `translateX(${window.pageYOffset / 8 - 100}px)`;
		setNamePosition(actualNamePosition);
	}

	function changeAdmissionPosition() {
		const actualAdmissionPosition = `translateX(${100 - window.pageYOffset / 8}px)`;
		setAdmissionPosition(actualAdmissionPosition);
	}

	useEffect(() => {
		window.addEventListener("scroll", showAbout);
		window.addEventListener("scroll", changeNamePosition);
		window.addEventListener("scroll", changeAdmissionPosition);
	});

	return (
		<AboutView
			aboutClassName={aboutClass}
			headerNameTransformStyle={namePosition}
			admissionPosition={admissionPosition}
		/>
	);
};

export default About;
