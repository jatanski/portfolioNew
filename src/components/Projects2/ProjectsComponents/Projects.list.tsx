import React, { FC } from "react";
import { projectsInformations } from "../ProjectsLogic/projects.info";
import { ProjectsListProps } from "../ProjectsLogic/Projects.types";

const ProjectsList: FC<ProjectsListProps> = ({ setActualTitle, mainClassName }) => {
	const { myself: myselfProjects, withFriends: projectsWithFriends } = projectsInformations;
	return (
		<div className={mainClassName}>
			<ul className="projects-main__myself">
				<li className="projects-main__myself--title element-title">Myself</li>
				{myselfProjects.map(({ title }, i) => {
					const className = `projects-main__myself--element element-link element-show--${i}`;
					return (
						<li onClick={setActualTitle} id={title} key={title} className={className}>
							<p className="element-link__text">{title}</p>
						</li>
					);
				})}
			</ul>
			<ul className="projects-main__heckathon">
				<li className="projects-main__heckathon--title element-title">With friends</li>
				{projectsWithFriends.map(({ title }, i) => {
					const className = `projects-main__myself--element element-link element-show--${i}`;

					return (
						<li onClick={setActualTitle} id={title} key={title} className={className}>
							<p className="element-link__text">{title}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProjectsList;
