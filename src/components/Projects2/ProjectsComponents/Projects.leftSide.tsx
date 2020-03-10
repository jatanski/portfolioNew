/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { SFC } from "react";
import ProjectsList from "./Projects.list";
import { ProjectsLeftSideInput } from "../ProjectsLogic/Projects.types";

const ProjectsLeftSide: SFC<ProjectsLeftSideInput> = ({
	admissionPosition,
	titlePosition,
	mainClassName,
	setActualTitle,
}) => (
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
);

export default ProjectsLeftSide;
