/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import "./about.scss";
import AboutView from "./About.view";

const About = () => {
	const [aboutClass, setAboutClass] = useState("about");
	const [namePosition, setNamePosition] = useState("translateX(0px)");
	const [admissionPosition, setAdmissionPosition] = useState("translateX(0px)");

	function showAbout() {
		window.scrollY <= 500 || window.scrollY >= 1800 ? setAboutClass("about") : setAboutClass("about showAbout");
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
