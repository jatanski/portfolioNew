/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import React, { useState, MouseEvent, useEffect } from "react";
import "./projects.scss";
import ProjectsList from "./Projects.list";
import ProjectPresentation from "./Project.presentation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ProjectImage from "./Project.image";
import { projectsArraies } from "./projectsInfo";

interface ActualProject {
	title: string;
	descriptionMain: string;
	descriptionFeatures: Array<string>;
	descriptionTechs: Array<string>;
	codeLink: string;
	demoLink: string;
}

const Projects = () => {
	const [title, setTitle] = useState("");
	const [actualProject, setActualProject] = useState<ActualProject>();
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

	return (
		<section className="projects" id="projects">
			<div className="projects__leftSideWrap">
				<div className="projects__title">
					<p className="title-admission">There are my</p>
					<p className="title-name">projects</p>
				</div>
				<ProjectsList setActualTitle={setActualTitle} />
			</div>
			<div className="projects__rightSideWrap">
				<ProjectPresentation {...presentationInfo} />
			</div>
		</section>
	);
};

export default Projects;
