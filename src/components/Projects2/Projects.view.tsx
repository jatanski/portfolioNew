import React, { FC } from "react";
import ProjectsPresentation from "./ProjectsComponents/Projects.presentation";
import { ProjectsViewProps } from "./ProjectsLogic/Projects.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProjectsLeftSide from "./ProjectsComponents/Projects.leftSide";
import "./projects-scss/projects-main.scss";

const ProjectsView: FC<ProjectsViewProps> = ({
	setActualTitle,
	presentationInfo,
	projectsClassName,
	admissionPosition,
	mainClassName,
	titlePosition,
}) => (
	<section className="projects" id="projects">
		<div className={projectsClassName}>
			<ProjectsLeftSide
				setActualTitle={setActualTitle}
				admissionPosition={admissionPosition}
				mainClassName={mainClassName}
				titlePosition={titlePosition}
			/>
			<div className="projects__rightSideWrap">
				<ProjectsPresentation {...presentationInfo} />
			</div>
			<div className="projects__scrollWrap scrollWrap">
				<a href="#contact" className="projects__scrollWrap__link scrollWrap__link">
					<FontAwesomeIcon icon={faChevronDown} />
				</a>
				<p>Come on. There&apos;s more.</p>
			</div>
		</div>
	</section>
);

export default ProjectsView;
