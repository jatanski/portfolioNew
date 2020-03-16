import React from "react";
import SEO from "../components/seo";
import Menu from "../components/Menu/Menu";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Projects from "../components/Projects2/Projects";
import Contact from "../components/Contact/Contact";
import "../scss/global.scss";

const IndexPage = () => (
	<>
		<SEO title="Jakub Tanski Development" />
		<Menu />
		<Header />
		<About />
		<Projects />
		<Contact />
	</>
);

export default IndexPage;
