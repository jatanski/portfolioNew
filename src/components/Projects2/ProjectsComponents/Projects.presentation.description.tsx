import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleRight, faCommentAlt, faToolbox, faInfo } from "@fortawesome/free-solid-svg-icons";
import { ProjectsPresentationDescriptionProps } from "../ProjectsLogic/Projects.types";

const ProjectsPresentationDescription: FC<ProjectsPresentationDescriptionProps> = ({
	descriptionMain,
	title,
	descriptionTechs,
	descriptionFeatures,
}) => (
	<>
		<div className="element-wrap">
			<FontAwesomeIcon className="element-wrap__icon" icon={faInfo} />
		</div>
		<div className="element-info">
			<h3 className="text-title">{title}</h3>
			<div className="text-description">
				<h4 className="text-description__title element-text-title">
					<FontAwesomeIcon icon={faCommentAlt} />
					Opis:
				</h4>
				<p>{descriptionMain}</p>
			</div>
			<div className="text-features">
				<h4 className="text-features__title element-text-title">
					<FontAwesomeIcon icon={faToolbox} />
					Funkcjonalności:
				</h4>
				<ul className="text-features__list">
					{descriptionFeatures.map(feature => (
						<li className="text-features__list-element element-text-listElement" key={feature}>
							<FontAwesomeIcon icon={faChevronCircleRight} />
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className="text-techs">
				<h4 className="text-techs__title element-text-title">
					<FontAwesomeIcon icon={faAndroid} />
					Użyte technologie:
				</h4>
				<ul className="text-techs__list">
					{descriptionTechs.map(tech => (
						<li className="text-techs__list--element element-text-listElement" key={tech}>
							<FontAwesomeIcon icon={faChevronCircleRight} />
							{tech}
						</li>
					))}
				</ul>
			</div>
		</div>
	</>
);

export default ProjectsPresentationDescription;
