/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { SFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
// import MeImage from "./MeImage";
const MeImage2 = require("../../images/jakub_tanski.jpg");

interface AboutViewInput {
	aboutClassName: string;
	headerNameTransformStyle: string;
	admissionPosition: string;
}

const AboutView: SFC<AboutViewInput> = ({ aboutClassName, headerNameTransformStyle, admissionPosition }) => (
	<section className={aboutClassName} id="about">
		<div className="about__text">
			<div className="about__text--header">
				<p className="header-admission" style={{ transform: admissionPosition }}>
					Hi, my name is
				</p>
				<p className="header-name" style={{ transform: headerNameTransformStyle }}>
					Tanski. James Tanski <FontAwesomeIcon icon={faHandPointLeft} />
				</p>
				<p className="header-description">
					&quot;I sold financial products over the internet for 3 years. After changing the market situation,
					I decided to change the industry to IT and started learning web programming. I currently have over a
					year of non-commercial experience and belong to the CodersCrew association, where I am a web
					developer and also a mentor during CodersCamp courses. My main professional goal is to develop my
					skills in the field of web programming and become a frontend programmer.&quot;
				</p>
			</div>
		</div>
		<div className="about__image">
			{/* <MeImage /> */}
			<img src={MeImage2} alt="Jakub Tanski" />
		</div>
		<div className="about__scrollWrap scrollWrap">
			<a href="#projects" className="about__scrollWrap--icon scrollWrap--icon">
				<FontAwesomeIcon icon={faChevronDown} />
			</a>
			<p>Keep going!</p>
		</div>
	</section>
);

export default AboutView;
