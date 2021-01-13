import React, { FC } from "react";
import { ProjectsPresentationImage } from "../ProjectsLogic/Projects.types";

const ProjectsPresentation: FC<ProjectsPresentationImage> = ({ index, image }) => {
	const className = `image-project img-proj-${index}`;
	const bgImg = `url(${image})`;

	return <div style={{ backgroundImage: bgImg }} className={className} />;
};

export default ProjectsPresentation;
