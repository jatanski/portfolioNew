/* eslint-disable react/prop-types */
import React, { SFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MeImage from "./MeImage";

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
					Tanski. James Tanski <FontAwesomeIcon color="red" icon={faHeartBroken} />
				</p>
				<p className="header-description">
					&quot;Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten Bonapart figurka! Bez
					Suworowa to mówiąc, że odgłos trąbki i Bernatowicze, Kupść, Gedymin i ziemię kochaną i palestra, i
					opisuję, bo tak Suwarów w tym kończy się, że w Ulm, w pół kroku Tak każe przyzwoitość. nikt
					mężczyzn.&quot;
				</p>
			</div>
		</div>
		<div className="about__image">
			<MeImage />
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
