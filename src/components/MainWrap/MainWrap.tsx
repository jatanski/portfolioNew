/* eslint-disable react/prop-types */
import React, { SFC, ReactNode, useState, useEffect } from "react";
import "./mainWrap.scss";

interface WrapInput {
	children: ReactNode;
	blurSection: boolean;
}

const MainWrap: SFC<WrapInput> = ({ children, blurSection }) => {
	const [wrapClassName, setWrapClassName] = useState("wrap");

	useEffect(() => {
		blurSection ? setWrapClassName("wrap blur-wrap") : setWrapClassName("wrap");
	}, [blurSection]);

	return <div className={wrapClassName}>{children}</div>;
};

export default MainWrap;
