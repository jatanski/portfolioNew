import { MouseEvent } from "react";

export interface IProjectsInformations {
	myself: Array<MyProject>;
	withFriends: Array<MyProject>;
}

export interface MyProject {
	title: string;
	descriptionMain: string;
	descriptionFeatures: Array<string>;
	descriptionTechs: Array<string>;
	codeLink: string;
	demoLink: string;
	images: Array<any>;
}

export interface ProjectsViewProps {
	setActualTitle: (e: MouseEvent<HTMLLIElement>) => void;
	presentationInfo: MyProject;
	projectsClassName: string;
	mainClassName: string;
	titlePosition: string;
	admissionPosition: string;
}

export interface ProjectsLeftSideProps {
	admissionPosition: string;
	titlePosition: string;
	mainClassName: string;
	setActualTitle: (e: MouseEvent<HTMLLIElement>) => void;
}

export interface ProjectsListProps {
	setActualTitle: (e: MouseEvent<HTMLLIElement>) => void;
	mainClassName: string;
}

export interface ProjectPresentationProps {
	title: string;
	descriptionMain: string;
	descriptionFeatures: Array<string>;
	descriptionTechs: Array<string>;
	codeLink: string;
	demoLink: string;
	images: Array<any>;
}

export interface ProjectsPresentationDescriptionProps {
	title: string;
	descriptionMain: string;
	descriptionTechs: Array<string>;
	descriptionFeatures: Array<string>;
}
