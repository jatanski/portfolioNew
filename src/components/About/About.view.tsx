import React, { FC } from "react";
import { AboutViewProps } from "./about.types";
import AboutDescription from "./About.components/About.description";
import AboutImage from "./About.components/About.image";
import AboutScroll from "./About.components/About.scroll";

const AboutView: FC<AboutViewProps> = ({ aboutClassName, headerNameTransformStyle, admissionPosition }) => (
	<section className={aboutClassName} id="about">
		<AboutDescription headerNameTransformStyle={headerNameTransformStyle} admissionPosition={admissionPosition} />
		<AboutImage />
		<AboutScroll />
	</section>
);

export default AboutView;
