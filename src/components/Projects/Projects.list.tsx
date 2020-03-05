/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { MouseEvent, SFC } from "react";
import { projectsArraies } from "./projectsInfo";

interface ProjectsListInput {
	setActualTitle: (e: MouseEvent<HTMLLIElement>) => void;
}

const ProjectsList: SFC<ProjectsListInput> = ({ setActualTitle }) => {
	return (
		<div className="projects__main">
			<ul className="projects-main__myself">
				<li className="projects-main__myself--title element-title">Myself</li>
				{projectsArraies.myself.map(({ title }) => (
					<li
						onClick={setActualTitle}
						id={title}
						key={title}
						className="projects-main__myself--element element-link"
					>
						{title}
					</li>
				))}
			</ul>
			<ul className="projects-main__heckathon">
				<li className="projects-main__heckathon--title element-title">With friends</li>
				{projectsArraies.withFriends.map(({ title }) => (
					<li
						onClick={setActualTitle}
						id={title}
						key={title}
						className="projects-main__myself--element element-link"
					>
						{title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectsList;
