import React from "react";
import SEO from "../components/seo";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import ProjectsLogic from "../components/Projects2/Projects.logic";
import Contact from "../components/Contact/Contact";
import "../scss/global.scss";

const IndexPage = () => (
	<main>
		<SEO title="Jakub Tanski Development" />
		<Menu />
		<Header />
		<About />
		<ProjectsLogic />
		<Contact />
	</main>
);

export default IndexPage;
