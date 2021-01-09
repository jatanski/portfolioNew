import React, { useState, useEffect, FC } from "react";
import "./header.scss";
import HeaderView from "./Header.view";

const Header: FC = () => {
	const [actualHelloText, setActualHelloText] = useState("");
	const [lettersInHelloText, setlettersInHelloText] = useState(0);
	const helloText = `Hello there! 👋`;

	const [actualNameText, setActualNameText] = useState("");
	const [lettersInNameText, setLettersInNameText] = useState(0);
	const nameText = `Welcome on my portfolio web-developer website.`;

	useEffect(() => {
		setTimeout(initShowTextes, 40);
	});

	function initShowTextes() {
		addLettersToHelloText();

		if (lettersInHelloText >= 16) addLettersToNameText();
	}

	function addLettersToHelloText() {
		if (lettersInHelloText <= 16)
			setActualState(setlettersInHelloText, lettersInHelloText, helloText, setActualHelloText);
	}

	function addLettersToNameText() {
		if (lettersInNameText < 47)
			setActualState(setLettersInNameText, lettersInNameText, nameText, setActualNameText);
	}

	function setActualState(
		setLettersFunc: (arg0: number) => void,
		numberLetters: number,
		textToShow: string,
		setActualText: (arg0: string) => void
	) {
		setLettersFunc(numberLetters + 1);
		const textToSet = textToShow.slice(0, numberLetters);
		setActualText(textToSet);
	}

	return <HeaderView actualHelloText={actualHelloText} actualNameText={actualNameText} />;
};

export default Header;
