import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faLaptopMedical, faLaugh, faDatabase, faGamepad, faBath } from "@fortawesome/free-solid-svg-icons";
import "./myStack.scss";

const MyStack = () => {
	return (
		<section className="my-stack">
			<div className="my-stack__wrap">
				<div className="my-stack__title">
					<p className="my-stack__title--admission">This is my</p>
					<p className="my-stack__title--name">stack technology.</p>
				</div>
				<div className="my-stack__technologies">
					<div className="my-stack__technologies--group technologies-front">
						<h4 className="technologies-title">Frontend skills</h4>
						<ul>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">JavaScript</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">TypeScript</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">React + Redux</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">HTML + CSS + SASS</p>
							</li>
						</ul>
					</div>
					<div className="my-stack__technologies--group technologies-backend">
						<h4 className="technologies-title">Backend skills</h4>
						<ul>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">Express.js</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">GraphQL</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">MongoDB</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">PostgresSQL</p>
							</li>
						</ul>
					</div>
					<div className="my-stack__technologies--group technologies-others">
						<h4 className="technologies-title">Other skills</h4>
						<ul>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">Jasmine</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">GIT</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">Docker</p>
							</li>
							<li className="technologies__skill">
								<FontAwesomeIcon color="green" icon={faServer} />
								<p className="technologies__skill--name">Jira</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyStack;
