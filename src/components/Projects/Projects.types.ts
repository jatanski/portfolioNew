/* eslint-disable no-undef */
import { MouseEvent } from "react";

export interface ActualProject {
	title: string;
	descriptionMain: string;
	descriptionFeatures: Array<string>;
	descriptionTechs: Array<string>;
	codeLink: string;
	demoLink: string;
}

export interface ProjectsViewInput {
	setActualTitle: (e: MouseEvent<HTMLLIElement>) => void;
	presentationInfo: PresentationInfo;
	projectsClassName: string;
	mainClassName: string;
	titlePosition: string;
	admissionPosition: string;
}

interface PresentationInfo {
	title?: string;
	descriptionMain?: string;
	descriptionFeatures?: Array<string>;
	descriptionTechs?: Array<string>;
	codeLink?: string;
	demoLink?: string;
	childrenImageIcon: JSX.Element;
	childrenLogoIcon: JSX.Element;
}

export interface ProjectsListInput {
	setActualTitle: (e: MouseEvent<HTMLLIElement>) => void;
	mainClassName: string;
}
