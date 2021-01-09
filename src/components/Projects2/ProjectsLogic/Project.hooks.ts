import { getShowSectionCheckpointsInput } from "../../../components/About/about.types";
import ShowSection from "../../../utils/ShowSections";
import { projectsInformations } from "./projects.info";
import { MyProject } from "./Projects.types";

export default class ProjectHooks {
	showSection: ShowSection;
	constructor() {
		this.showSection = new ShowSection();
	}
	useSetActualProjectToPresentation(title: string, setActualProject: (value: MyProject) => void) {
		const { myself, withFriends } = projectsInformations;
		const allProjects = [...myself, ...withFriends];

		const actualProject = allProjects.find(({ title: titleProject }) => titleProject === title);
		if (actualProject) setActualProject(actualProject);
	}

	useShowProjects(setProjectsClassName: (value: string) => void, setMainClassName: (value: string) => void) {
		const getShowSectionCheckpointsData: getShowSectionCheckpointsInput = {
			moreThenFirstCheckpoint: {
				start: 1300,
				end: 2600,
			},
			belowFirstAndSecondChecpoint: {
				start: 900,
				end: 2000,
			},
			lessThenSecondCheckpoint: {
				start: 800,
				end: 1900,
			},
		};

		const { start, end } = this.showSection.getShowSectionCheckpoints(getShowSectionCheckpointsData);

		this.showSection.setSectionClassName(
			start,
			end,
			"projects__opacity-wrap",
			"projects__opacity-wrap show-projects-wrap",
			setProjectsClassName
		);

		this.showSection.setSectionClassName(
			start,
			end,
			"projects__main",
			"projects__main show-projects-main",
			setMainClassName
		);
	}
}
