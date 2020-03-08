/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import "./header.scss";
import HeaderView from "./Header.view";

const Header = () => {
	const [actualHelloText, setActualHelloText] = useState("");
	const [numberLettersInHelloText, setNumberLettersInHelloText] = useState(0);

	const [actualNameText, setActualNameText] = useState("");
	const [numberLettersInNameText, setNumberLettersInNameText] = useState(0);

	const helloText = `Hello there! 👋`;
	const nameText = `Welcome on my portfolio web-developer website.`;

	function setActualState(
		setNumberLetterFunc: (arg0: number) => void,
		numberLetters: number,
		textToShow: string,
		setActualText: (arg0: string) => void
	) {
		setNumberLetterFunc(numberLetters + 1);
		const textToSet = textToShow.slice(0, numberLetters);
		setActualText(textToSet);
	}

	function addLettersToHelloText() {
		if (numberLettersInHelloText <= 16)
			setActualState(setNumberLettersInHelloText, numberLettersInHelloText, helloText, setActualHelloText);
	}

	function addLettersToNameText() {
		if (numberLettersInNameText < 47)
			setActualState(setNumberLettersInNameText, numberLettersInNameText, nameText, setActualNameText);
	}

	function init() {
		addLettersToHelloText();

		if (numberLettersInHelloText >= 16) addLettersToNameText();
	}

	useEffect(() => {
		setTimeout(init, 40);
	});

	return <HeaderView actualHelloText={actualHelloText} actualNameText={actualNameText} />;
};

export default Header;
