/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { ReactNode, SFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

interface ProjectPresentationInput {
	childrenLogoIcon: ReactNode;
	childrenImageIcon: ReactNode;
	title?: string;
	descriptionMain?: string;
	descriptionFeatures?: Array<string>;
	descriptionTechs?: Array<string>;
	codeLink?: string;
	demoLink?: string;
}

const ProjectPresentation: SFC<ProjectPresentationInput> = ({
	childrenLogoIcon,
	childrenImageIcon,
	title,
	descriptionFeatures,
	descriptionMain,
	descriptionTechs,
	codeLink,
	demoLink,
}) => {
	return (
		<div className="projects__presentation">
			<div className="presentation-header">
				<div className="presentation-header__logo">{childrenLogoIcon}</div>
				<div className="presentation-header__title">
					<h3>Project: {title}</h3>
				</div>
			</div>
			<div className="presentation-main">
				<div className="presentation-main__description">
					<div className="presentation-main__description--text">
						<p className="presentation-desc-main">{descriptionMain}</p>
						<div className="presentation-desc-features">
							<span>Features: </span>
							<ul>
								{descriptionFeatures?.map(feature => (
									<li key={feature}>{feature}</li>
								))}
							</ul>
						</div>
						<p className="presentation-desc-technologies">
							<span>Technologies:</span>
							<ul>
								{descriptionTechs?.map(tech => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						</p>
					</div>
				</div>
				<div className="presentation-main__imageWrap">{childrenImageIcon}</div>
			</div>
			<div className="presentation-footer">
				<a target="_blank" href={codeLink}>
					Demo: <FontAwesomeIcon icon={faGithubSquare} />
				</a>
				<a target="_blank" href={demoLink}>
					Kod: <FontAwesomeIcon icon={faLaptopCode} />
				</a>
				<p></p>
			</div>
		</div>
	);
};

export default ProjectPresentation;
