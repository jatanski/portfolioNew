import React, { useState } from "react";
import Menu from "../Menu/Menu";
import MainWrap from "../MainWrap/MainWrap";
import Header from "../Header/Header";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const MenAndMainWrap = () => {
	const [blurMainWrap, setblurMainWrap] = useState(false);

	const onBlurMainWrap = () => setblurMainWrap(!blurMainWrap);

	return (
		<>
			<Menu onBlurMainWrap={onBlurMainWrap} />
			<MainWrap blurSection={blurMainWrap}>
				<Header />
				<About />
				{/* <MyStack /> */}
				<Projects />
				<Contact />
			</MainWrap>
		</>
	);
};

export default MenAndMainWrap;
