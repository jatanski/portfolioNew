import React, { FC } from "react";
const MeImage = require("../../../images/jakub_tanski.jpg");

const AboutImage: FC = () => (
	<div className="about__image">
		<img src={MeImage} alt="Jakub Tanski" />
	</div>
);

export default AboutImage;
