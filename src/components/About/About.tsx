import React, { useState, useEffect, FC } from "react";
import ShowSection from "../../utils/ShowSections";
import AboutView from "./About.view";
import { getShowSectionCheckpointsInput } from "./about.types";
import "./about.scss";

const About: FC = () => {
	const showSection = new ShowSection();
	const [aboutClassName, setAboutClassName] = useState("about");
	const [headerNameTransform, setHeaderNameTransformPosition] = useState("translateX(0px)");
	const [admissionPosition, setAdmissionPosition] = useState("translateX(0px)");

	useEffect(() => addScrollEvents());

	function addScrollEvents() {
		window.addEventListener("scroll", showAboutSection);
		window.addEventListener("scroll", showSection.changeTextPosition.bind("", 8, setHeaderNameTransformPosition));
		window.addEventListener("scroll", showSection.changeAdmissionPosition.bind("", 8, setAdmissionPosition));
	}

	function showAboutSection() {
		const getShowSectionCheckpointsData: getShowSectionCheckpointsInput = {
			moreThenFirstCheckpoint: {
				start: 500,
				end: 1800,
			},
			belowFirstAndSecondChecpoint: {
				start: 220,
				end: 1100,
			},
			lessThenSecondCheckpoint: {
				start: 150,
				end: 1100,
			},
		};

		const { start, end } = showSection.getShowSectionCheckpoints(getShowSectionCheckpointsData);
		showSection.setSectionClassName(start, end, "about", "about showAbout", setAboutClassName);
	}

	return (
		<AboutView
			aboutClassName={aboutClassName}
			headerNameTransformStyle={headerNameTransform}
			admissionPosition={admissionPosition}
		/>
	);
};

export default About;
