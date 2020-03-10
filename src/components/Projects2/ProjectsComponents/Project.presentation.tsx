/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { SFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faChevronCircleRight, faAudioDescription, faCode } from "@fortawesome/free-solid-svg-icons";

interface ProjectPresentationInput {
	title?: string;
	descriptionMain?: string;
	descriptionFeatures?: Array<string>;
	descriptionTechs?: Array<string>;
	codeLink?: string;
	demoLink?: string;
	images?: Array<any>;
}

const ProjectPresentation: SFC<ProjectPresentationInput> = ({
	title,
	descriptionFeatures,
	descriptionMain,
	descriptionTechs,
	codeLink,
	demoLink,
	images,
}) => {
	return (
		<div className="projects__presentation">
			<div className="projects__presentation__imageWrap">
				{images?.map((image, i) => {
					const className = `image-project img-proj-${i}`;
					const bgImg = `url(${image})`;

					return <div style={{ backgroundImage: bgImg }} className={className}></div>;
				})}
			</div>
			<div className="projects__presentation__element element-description">
				<div className="element-wrap">
					<FontAwesomeIcon className="element-wrap__icon" icon={faAudioDescription} />
				</div>
				<div className="element-wrap__text">
					<h3 className="text-title">{title}</h3>
					<div className="text-techs">
						<h4 className="text-techs__title">
							{" "}
							<FontAwesomeIcon icon={faCode} /> Technologie
						</h4>
						<ul className="text-techs__list">
							{descriptionTechs?.map(tech => (
								<li className="text-techs__list-element" key={tech}>
									{tech}
								</li>
							))}
						</ul>
					</div>
					<div className="text-description">
						<p>{descriptionMain}</p>
					</div>
					<div className="text-features">
						<h4 className="text-features__title"> Funkcjonalności: </h4>
						<ul className="text-features__list">
							{descriptionFeatures?.map(feature => (
								<li className="text-features__list-element" key={feature}>
									{feature}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="projects__presentation__element element-others">
				<div className="element-wrap">
					<FontAwesomeIcon className="element-wrap__icon" icon={faChevronCircleRight} />
				</div>
			</div>
			<div className="projects__presentation__element element-code">
				<a className="element-wrap" target="_blank" href={codeLink}>
					<FontAwesomeIcon className="element-wrap__icon" icon={faGithubSquare} />
				</a>
			</div>
			<div className="projects__presentation__element element-demo">
				<a className="element-wrap" target="_blank" href={demoLink}>
					<FontAwesomeIcon className="element-wrap__icon" icon={faCode} />
				</a>
			</div>
		</div>
	);
};

export default ProjectPresentation;
