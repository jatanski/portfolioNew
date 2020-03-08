/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import React, { useState, MouseEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ProjectImage from "./Project.image";
import { ActualProject } from "./Projects.types";
import { projectsArraies, startProject } from "./projectsInfo";
import ProjectsView from "./Projects.view";
import "./projects.scss";

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
		childrenImageIcon: <ProjectImage />,
		childrenLogoIcon: <FontAwesomeIcon icon={faInstagram} />,
	};

	function setActualProjectToPresentation() {
		const actualProjectMySelf = projectsArraies.myself.find(({ title: titleProject }) => titleProject === title);

		const actualProjectWithFriends = projectsArraies.withFriends.find(
			({ title: titleProject }) => titleProject === title
		);

		const actualProject = actualProjectMySelf || actualProjectWithFriends;
		if (actualProject) setActualProject(actualProject);
	}

	useEffect(() => setActualProjectToPresentation(), [title]);

	const setActualTitle = (e: MouseEvent<HTMLLIElement>) => setTitle(e.currentTarget.id);

	function showProjects() {
		window.scrollY <= 1600 || window.scrollY >= 2800
			? setProjectsClassName("projects__opacity-wrap")
			: setProjectsClassName("projects__opacity-wrap show-projects-wrap");

		window.scrollY <= 1600 || window.scrollY >= 2800
			? setMainClassName("projects__main")
			: setMainClassName("projects__main show-projects-main");
	}

	function changeTitlePosition() {
		const actualNamePosition = `translateX(${window.pageYOffset / 16 - 100}px)`;
		setTitlePosition(actualNamePosition);
	}

	function changeAdmissionPosition() {
		const actualAdmissionPosition = `translateX(${100 - window.pageYOffset / 16}px)`;
		setAdmissionPosition(actualAdmissionPosition);
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
