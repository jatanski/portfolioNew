import React from "react";
import "./about.scss";
import MeImage from "./MeImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__text">
				<div className="about__text--header">
					<p className="header-admission">Hi, my name is</p>
					<p className="header-name">
						Tanski. James Tanski <FontAwesomeIcon color="red" icon={faHeartBroken} />
					</p>
					<p className="header-description">
						"Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten Bonapart figurka! Bez
						Suworowa to mówiąc, że odgłos trąbki i Bernatowicze, Kupść, Gedymin i ziemię kochaną i palestra,
						i opisuję, bo tak Suwarów w tym kończy się, że w Ulm, w pół kroku Tak każe przyzwoitość). nikt
						mężczyzn."
					</p>
				</div>
			</div>
			<div className="about__image">
				<MeImage />
			</div>
		</section>
	);
};

export default About;
