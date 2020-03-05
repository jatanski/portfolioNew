import React from "react";
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
// import MyStack from "../components/MyStack/MyStack";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import "../scss/global.scss";

const IndexPage = () => (
	<>
		<SEO title="Home" />
		<Menu />
		<Header />
		<About />
		{/* <MyStack /> */}
		<Projects />
		<Contact />
	</>
);

export default IndexPage;
