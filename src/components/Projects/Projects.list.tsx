/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { SFC } from "react";
import { projectsArraies } from "./projectsInfo";
import { ProjectsListInput } from "./Projects.types";

const ProjectsList: SFC<ProjectsListInput> = ({ setActualTitle, mainClassName }) => {
	return (
		<div className={mainClassName}>
			<ul className="projects-main__myself">
				<li className="projects-main__myself--title element-title">Myself</li>
				{projectsArraies.myself.map(({ title }, i) => {
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
				{projectsArraies.withFriends.map(({ title }, i) => {
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
