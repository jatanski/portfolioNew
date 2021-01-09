import React, { FC } from "react";
import ProjectsList from "./Projects.list";
import { ProjectsLeftSideProps } from "../ProjectsLogic/Projects.types";

const ProjectsLeftSide: FC<ProjectsLeftSideProps> = ({
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
