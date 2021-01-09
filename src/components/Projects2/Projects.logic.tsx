import React, { useState, MouseEvent, useEffect, FC } from "react";
import ShowSection from "../../utils/ShowSections";
import ProjectsView from "./Projects.view";
import ProjectsHooks from "./ProjectsLogic/Project.hooks";
import { MyProject } from "./ProjectsLogic/Projects.types";
import { startProject } from "./ProjectsLogic/projects.info";

const ProjectsLogic: FC = () => {
	const projectsHooks = new ProjectsHooks();
	const showSection = new ShowSection();
	const [projectTitle, setProjectTitle] = useState("");
	const [actualProject, setActualProject] = useState<MyProject>(startProject);
	const [projectsClassName, setProjectsClassName] = useState("projects__opacity-wrap");
	const [mainClassName, setMainClassName] = useState("projects__main");
	const [titlePosition, setTitlePosition] = useState("translateX(0px)");
	const [admissionPosition, setAdmissionPosition] = useState("translateX(0px)");

	useEffect(() => projectsHooks.useSetActualProjectToPresentation(projectTitle, setActualProject), [projectTitle]);

	const setActualTitle = (e: MouseEvent<HTMLLIElement>) => setProjectTitle(e.currentTarget.id);

	useEffect(() => {
		window.addEventListener("scroll", showProjectsSection);
		window.addEventListener("scroll", showSection.changeTextPosition.bind("", 16, setTitlePosition));
		window.addEventListener("scroll", showSection.changeAdmissionPosition.bind("", 16, setAdmissionPosition));
	});

	function showProjectsSection() {
		projectsHooks.useShowProjects(setProjectsClassName, setMainClassName);
	}

	return (
		<ProjectsView
			setActualTitle={setActualTitle}
			presentationInfo={actualProject}
			projectsClassName={projectsClassName}
			mainClassName={mainClassName}
			titlePosition={titlePosition}
			admissionPosition={admissionPosition}
		/>
	);
};

export default ProjectsLogic;
