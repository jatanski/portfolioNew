/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { ReactNode, SFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

interface ProjectPresentationInput {
	childrenLogoIcon: ReactNode;
	title?: string;
	descriptionMain?: string;
	descriptionFeatures?: Array<string>;
	descriptionTechs?: Array<string>;
	codeLink?: string;
	demoLink?: string;
}

const ProjectPresentation: SFC<ProjectPresentationInput> = ({
	childrenLogoIcon,
	title,
	descriptionFeatures,
	descriptionMain,
	descriptionTechs,
	codeLink,
	demoLink,
}) => {
	return (
		<div className="projects__presentation">
			<div className="presentation-header">
				<div className="presentation-header__logo">{childrenLogoIcon}</div>
				<div className="presentation-header__title">
					<h3>{title}</h3>
				</div>
			</div>
			<div className="presentation-main">
				<div className="presentation-main__description">
					<div className="presentation-main__description--text">
						<p className="presentation-desc-main">{descriptionMain}</p>
						<div className="presentation-desc-features">
							<span>Features: </span>
							<ul>
								{descriptionFeatures?.map(feature => (
									<li key={feature}>
										<FontAwesomeIcon icon={faChevronCircleRight} />
										{feature}
									</li>
								))}
							</ul>
						</div>
						<div className="presentation-desc-technologies">
							<span>Technologies:</span>
							<ul>
								{descriptionTechs?.map(tech => (
									<li key={tech}> {tech}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="presentation-main__imageWrap">
					{/* <div className="image-project img-proj-0">
						<img src={Img1} alt="" />
					</div>
					<div className="image-project img-proj-1">
						<img src={Img2} alt="" />
					</div>
					<div className="image-project img-proj-2">
						<img src={Img3} alt="" />
					</div> */}
				</div>
			</div>
			<div className="presentation-footer">
				<div className="presentation-footer__wrap">
					<div className="presentation-footer__wrap--link">
						Demo:
						<a target="_blank" href={codeLink}>
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
					</div>
					<div className="presentation-footer__wrap--link">
						Kod:
						<a target="_blank" href={demoLink}>
							<FontAwesomeIcon icon={faLaptopCode} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPresentation;
