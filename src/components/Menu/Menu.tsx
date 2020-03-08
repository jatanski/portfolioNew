/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, SFC } from "react";
import MenuView from "./Menu.view";
import "./menu.scss";

const Menu: SFC = () => {
	const [openButtonClassName, setOpenButtonClassName] = useState("menu__open nav-icon");
	const [navClassName, setNavClassName] = useState("menu__nav");
	const [navWrapClassName, setNavWrapClassName] = useState("menu__nav-wrap");

	const menuInfo = [
		{ id: "#home", name: "Home" },
		{ id: "#about", name: "About" },
		{ id: "#my-stack", name: "My stack" },
		{ id: "projects", name: "Projects" },
		{ id: "contact", name: "Contact" },
	];

	const openNav = () => {
		setOpenButtonClassName("menu__open nav-icon menu-open-hidden");
		setNavClassName("menu__nav nav-visible");
		setNavWrapClassName("menu__nav-wrap show-nav-wrap");
	};

	const closeNav = () => {
		setOpenButtonClassName("menu__open nav-icon");
		setNavClassName("menu__nav");
		setNavWrapClassName("menu__nav-wrap");
	};

	return (
		<MenuView
			menuInfo={menuInfo}
			openButtonClassName={openButtonClassName}
			navClassName={navClassName}
			navWrapClassName={navWrapClassName}
			openNav={openNav}
			closeNav={closeNav}
		/>
	);
};

export default Menu;
