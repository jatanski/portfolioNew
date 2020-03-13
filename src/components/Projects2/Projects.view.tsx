/* eslint-disable react/prop-types */
import React, { SFC } from "react";
import ProjectPresentation from "./ProjectsComponents/Project.presentation";
import { ProjectsViewInput } from "./ProjectsLogic/Projects.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProjectsLeftSide from "./ProjectsComponents/Projects.leftSide";
import "./projects-scss/projects-main.scss";

const ProjectsView: SFC<ProjectsViewInput> = ({
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
				<ProjectPresentation {...presentationInfo} />
			</div>
			<div className="projects__scrollWrap scrollWrap">
				<a href="#contact" className="projects__scrollWrap--icon scrollWrap--icon">
					<FontAwesomeIcon icon={faChevronDown} />
				</a>
				<p>Come on. There&apos;s more.</p>
			</div>
		</div>
	</section>
);

export default ProjectsView;
