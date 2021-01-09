import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AboutScroll: FC = () => (
	<div className="about__scrollWrap scrollWrap">
		<a href="#projects" className="about__scrollWrap__link scrollWrap__link">
			<FontAwesomeIcon icon={faChevronDown} />
		</a>
		<p>Keep going!</p>
	</div>
);

export default AboutScroll;
