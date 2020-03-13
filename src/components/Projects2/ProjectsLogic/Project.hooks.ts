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

	static selectAndSetProjectsClass(
		number1: number,
		number2: number,
		setProjectsClassName: (value: string) => void,
		setMainClassName: (value: string) => void
	) {
		window.scrollY <= number1 || window.scrollY >= number2
			? setProjectsClassName("projects__opacity-wrap")
			: setProjectsClassName("projects__opacity-wrap show-projects-wrap");

		window.scrollY <= number1 || window.scrollY >= number2
			? setMainClassName("projects__main")
			: setMainClassName("projects__main show-projects-main");
	}

	static useShowProjects(setProjectsClassName: (value: string) => void, setMainClassName: (value: string) => void) {
		if (window.outerHeight > 736)
			ProjectHooks.selectAndSetProjectsClass(1300, 2600, setProjectsClassName, setMainClassName);
		else if (window.outerHeight <= 736 && window.outerHeight > 667)
			ProjectHooks.selectAndSetProjectsClass(900, 2000, setProjectsClassName, setMainClassName);
		else if (window.outerHeight <= 667)
			ProjectHooks.selectAndSetProjectsClass(800, 1900, setProjectsClassName, setMainClassName);
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
