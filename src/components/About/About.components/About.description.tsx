import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { AboutDescriptionProps } from "../about.types";

const AboutDescription: FC<AboutDescriptionProps> = ({ headerNameTransformStyle, admissionPosition }) => (
	<div className="about__text">
		<div className="about__text--header">
			<p className="header-admission" style={{ transform: admissionPosition }}>
				Hi, my name is
			</p>
			<p className="header-name" style={{ transform: headerNameTransformStyle }}>
				Tanski. James Tanski <FontAwesomeIcon icon={faHandPointLeft} />
			</p>
			<p className="header-description">
				&quot;I sold financial products over the internet for 3 years. After changing the market situation, I
				decided to change the industry to IT and started learning web programming. I currently have over a year
				of non-commercial experience and belong to the CodersCrew association, where I am a web developer and
				also a mentor during CodersCamp courses. My main professional goal is to develop my skills in the field
				of web programming and become a frontend programmer.&quot;
			</p>
		</div>
	</div>
);

export default AboutDescription;
