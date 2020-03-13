/* eslint-disable react/prop-types */
import React, { SFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface HeaderViewInput {
	actualHelloText: string;
	actualNameText: string;
}

const HeaverView: SFC<HeaderViewInput> = ({ actualHelloText, actualNameText }) => (
	<section className="header">
		<div className="header__textWrap">
			<h1 className="header__textWrap--hello">{actualHelloText}</h1>
			<h2 className="header__textWrap--welcome">{actualNameText}</h2>
			<span className="header__textWrap--cursor">|</span>
			<p className="header__textWrap--action">Link with your customers today! 🤑</p>
		</div>
		<div className="scrollWrap">
			<a href="#about" className="scrollWrap--icon">
				<FontAwesomeIcon icon={faChevronDown} />
			</a>
			<p>Scroll down and meet me!</p>
		</div>
	</section>
);

export default HeaverView;
