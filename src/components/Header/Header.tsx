/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import "./header.scss";

const Header = () => {
	const [actualHelloText, setActualHelloText] = useState("");
	const [numberLettersInHelloText, setNumberLettersInHelloText] = useState(0);

	const [actualWelcomeText, setActualWelcomeText] = useState("");
	const [numberLettersInWelcomeText, setNumberLettersInWelcomeText] = useState(0);

	const [actualNameText, setActualNameText] = useState("");
	const [numberLettersInNameText, setNumberLettersInNameText] = useState(0);

	const [isAddLetterToNameText, setIsAddLetterToNameText] = useState(true);
	const [isAddLetterToWelcomeText, setIsAddLetterToWelcomeText] = useState(false);

	const [showNameText, setShowNameText] = useState(true);

	const helloText = `Hello there!`;
	const nameText = `My name is James Tanski and I'm Web Developer.`;
	const welcomeText = `If you want fantastic website from your biznes, contact with me.`;

	function resetNameText() {
		setNumberLettersInNameText(numberLettersInNameText - 1);
		const textToSet = nameText.slice(0, numberLettersInNameText);
		setActualNameText(textToSet);

		if (numberLettersInNameText === 0) setIsAddLetterToWelcomeText(true);
	}

	function resetWelcomeText() {
		setNumberLettersInWelcomeText(numberLettersInWelcomeText - 1);
		const textToSet = welcomeText.slice(0, numberLettersInWelcomeText);
		setActualWelcomeText(textToSet);

		if (numberLettersInNameText === 0) setIsAddLetterToNameText(true);
	}

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
		if (numberLettersInHelloText <= 14)
			setActualState(setNumberLettersInHelloText, numberLettersInHelloText, helloText, setActualHelloText);
	}

	function addLettersToNameText() {
		if (numberLettersInNameText < 47 && isAddLetterToNameText) {
			setActualState(setNumberLettersInNameText, numberLettersInNameText, nameText, setActualNameText);
		} else {
			setIsAddLetterToNameText(false);

			for (let i = 0; i <= numberLettersInNameText; i++) {
				setTimeout(resetNameText, 2);

				if (numberLettersInNameText === 0) {
					setIsAddLetterToWelcomeText(true);
					setShowNameText(false);
				}
			}
		}
	}

	function addLettersToWelcomeText() {
		if (numberLettersInWelcomeText <= 64 && isAddLetterToWelcomeText) {
			setActualState(
				setNumberLettersInWelcomeText,
				numberLettersInWelcomeText,
				welcomeText,
				setActualWelcomeText
			);
		} else {
			setIsAddLetterToWelcomeText(false);

			for (let i = 0; i <= numberLettersInWelcomeText; i++) {
				setTimeout(resetWelcomeText, 2);

				if (numberLettersInWelcomeText === 0) {
					setIsAddLetterToNameText(true);
					setShowNameText(true);
				}
			}
		}
	}

	function init() {
		addLettersToHelloText();

		if (numberLettersInHelloText >= 14) {
			showNameText ? addLettersToNameText() : addLettersToWelcomeText();
		}
	}

	useEffect(() => {
		setTimeout(init, 40);
	});

	return (
		<section className="header">
			<div className="header__textWrap">
				<h1 className="header__textWrap--hello">{actualHelloText}</h1>
				{showNameText ? (
					<h2 className="header__textWrap--name">{actualNameText}</h2>
				) : (
					<h2 className="header__textWrap--welcome">{actualWelcomeText}</h2>
				)}

				<span className="header__textWrap--cursor">|</span>
			</div>
		</section>
	);
};

export default Header;
