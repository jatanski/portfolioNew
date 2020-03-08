/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { SFC } from "react";
import ProjectsList from "./Projects.list";
import ProjectPresentation from "./Project.presentation";
import { ProjectsViewInput } from "./Projects.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
			<div className="projects__leftSideWrap">
				<div className="projects__title">
					<p className="title-admission" style={{ transform: admissionPosition }}>
						There are my
					</p>
					<p className="title-name" style={{ transform: titlePosition }}>
						projects
					</p>
				</div>
				<ProjectsList mainClassName={mainClassName} setActualTitle={setActualTitle} />
			</div>
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
