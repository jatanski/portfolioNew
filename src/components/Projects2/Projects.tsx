/* eslint-disable no-undef */
import React, { useState, MouseEvent, useEffect } from "react";
import { ActualProject } from "./ProjectsLogic/Projects.types";
import { startProject } from "./ProjectsLogic/projectsInfo";
import ProjectsView from "./Projects.view";
import "./projects2.scss";
import ProjectsHooks from "./ProjectsLogic/Project.hooks";
import ProjectHooks from "./ProjectsLogic/Project.hooks";

const Projects = () => {
	const [title, setTitle] = useState("");
	const [actualProject, setActualProject] = useState<ActualProject>(startProject);
	const [projectsClassName, setProjectsClassName] = useState("projects__opacity-wrap");
	const [mainClassName, setMainClassName] = useState("projects__main");
	const [titlePosition, setTitlePosition] = useState("translateX(0px)");
	const [admissionPosition, setAdmissionPosition] = useState("translateX(0px)");

	const presentationInfo = {
		title: actualProject?.title,
		descriptionMain: actualProject?.descriptionMain,
		descriptionFeatures: actualProject?.descriptionFeatures,
		descriptionTechs: actualProject?.descriptionTechs,
		codeLink: actualProject?.codeLink,
		demoLink: actualProject?.demoLink,
		images: actualProject?.images,
	};

	useEffect(() => ProjectHooks.useSetActualProjectToPresentation(title, setActualProject), [title]);

	const setActualTitle = (e: MouseEvent<HTMLLIElement>) => setTitle(e.currentTarget.id);

	function showProjects() {
		ProjectsHooks.useShowProjects(setProjectsClassName, setMainClassName);
	}

	function changeTitlePosition() {
		ProjectsHooks.useChangeTitlePosition(setTitlePosition);
	}

	function changeAdmissionPosition() {
		ProjectsHooks.useChangeAdmissionPosition(setAdmissionPosition);
	}

	useEffect(() => {
		window.addEventListener("scroll", showProjects);
		window.addEventListener("scroll", changeTitlePosition);
		window.addEventListener("scroll", changeAdmissionPosition);
	});

	return (
		<ProjectsView
			setActualTitle={setActualTitle}
			presentationInfo={presentationInfo}
			projectsClassName={projectsClassName}
			mainClassName={mainClassName}
			titlePosition={titlePosition}
			admissionPosition={admissionPosition}
		/>
	);
};

export default Projects;
