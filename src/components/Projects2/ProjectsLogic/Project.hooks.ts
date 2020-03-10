/* eslint-disable no-undef */
import { projectsArraies } from "./projectsInfo";

export default class ProjectHooks {
	static useSetActualProjectToPresentation(title: string, setActualProject: (value: any) => void) {
		const actualProjectMySelf = projectsArraies.myself.find(({ title: titleProject }) => titleProject === title);

		const actualProjectWithFriends = projectsArraies.withFriends.find(
			({ title: titleProject }) => titleProject === title
		);

		const actualProject = actualProjectMySelf || actualProjectWithFriends;
		if (actualProject) setActualProject(actualProject);
	}

	static useShowProjects(setProjectsClassName: (value: string) => void, setMainClassName: (value: string) => void) {
		window.scrollY <= 1600 || window.scrollY >= 2800
			? setProjectsClassName("projects__opacity-wrap")
			: setProjectsClassName("projects__opacity-wrap show-projects-wrap");

		window.scrollY <= 1600 || window.scrollY >= 2800
			? setMainClassName("projects__main")
			: setMainClassName("projects__main show-projects-main");
	}

	static useChangeTitlePosition(setTitlePosition: (value: string) => void) {
		const actualNamePosition = `translateX(${window.pageYOffset / 16 - 100}px)`;
		setTitlePosition(actualNamePosition);
	}

	static useChangeAdmissionPosition(setAdmissionPosition: (value: string) => void) {
		const actualAdmissionPosition = `translateX(${100 - window.pageYOffset / 16}px)`;
		setAdmissionPosition(actualAdmissionPosition);
	}
}
