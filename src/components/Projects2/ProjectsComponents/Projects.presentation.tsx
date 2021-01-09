import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

import { ProjectPresentationProps } from "../ProjectsLogic/Projects.types";
import ProjectPresentationDescription from "./Projects.presentation.description";

const ProjectsPresentation: FC<ProjectPresentationProps> = ({
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
				{images.map((image, i) => {
					const className = `image-project img-proj-${i}`;
					const bgImg = `url(${image})`;

					return <div key={className} style={{ backgroundImage: bgImg }} className={className}></div>;
				})}
			</div>
			<div className="projects__presentation__element element-description">
				<ProjectPresentationDescription
					title={title}
					descriptionFeatures={descriptionFeatures}
					descriptionMain={descriptionMain}
					descriptionTechs={descriptionTechs}
				/>
			</div>
			<div className="projects__presentation__element element-code">
				<a className="element-wrap" target="_blank" href={demoLink}>
					<FontAwesomeIcon className="element-wrap__icon" icon={faDesktop} />
				</a>
				<div className="element-info element-info--demo">
					<p className="text-title">Wersja demo projektu do wglądu</p>
					<div className="github-wrap">
						<a className="github-wrap__link" href={demoLink}>
							{demoLink}
						</a>
					</div>
				</div>
			</div>
			<div className="projects__presentation__element element-demo">
				<a className="element-wrap" target="_blank" href={codeLink}>
					<FontAwesomeIcon className="element-wrap__icon" icon={faCode} />
				</a>
				<div className="element-info">
					<p className="text-title">Kod źródłowy projektu znajdziesz na Githubie</p>
					<div className="github-wrap">
						<a className="github-wrap__link" href={codeLink}>
							{codeLink}
						</a>
					</div>
				</div>
			</div>
			<div className="projects__presentation__title">
				<h3 className="title-text">{title}</h3>
			</div>
		</div>
	);
};

export default ProjectsPresentation;
