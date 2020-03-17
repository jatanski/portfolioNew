/* eslint-disable no-undef */
const businessCardImg1 = require("../../../images/projects/businessCard/businness-card-1.jpg");
const businessCardImg2 = require("../../../images/projects/businessCard/businness-card-2.jpg");
const businessCardImg3 = require("../../../images/projects/businessCard/businness-card-3.jpg");

const commisionImage1 = require("../../../images/projects/commisionRefundPage/commision-img1.jpg");
const commisionImage2 = require("../../../images/projects/commisionRefundPage/commision-img2.jpg");
const commisionImage3 = require("../../../images/projects/commisionRefundPage/commision-img3.jpg");

const masterOfSport1 = require("../../../images/projects/masterOfSport/master-img1.jpg");
const masterOfSport2 = require("../../../images/projects/masterOfSport/master-img2.jpg");
const masterOfSport3 = require("../../../images/projects/masterOfSport/master-img3.jpg");

const englishImage1 = require("../../../images/projects/englishApp/english-img1.jpg");
const englishImage2 = require("../../../images/projects/englishApp/english-img2.jpg");
const englishImage3 = require("../../../images/projects/englishApp/english-img3.jpg");

const familyAlbum1 = require("../../../images/projects/familyAlbum/album-img3.jpg");
const familyAlbum2 = require("../../../images/projects/familyAlbum/album-img1.jpg");
const familyAlbum3 = require("../../../images/projects/familyAlbum/album-img2.jpg");

const optimizeImage1 = require("../../../images/projects/optimizeApp/optimize-img-1.jpg");
const optimizeImage2 = require("../../../images/projects/optimizeApp/optimize-img-2.jpg");
const optimizeImage3 = require("../../../images/projects/optimizeApp/optimize-img-3.jpg");

const chatImg1 = require("../../../images/projects/lifeChat/lifeChat-img1.jpg");
const chatImg2 = require("../../../images/projects/lifeChat/lifeChat-img2.jpg");
const chatImg3 = require("../../../images/projects/lifeChat/lifeChat-img3.jpg");

// const codersImg1 = require("../../../images/projects/codersBoard/codersImg1.jpg");
// const codersImg2 = require("../../../images/projects/codersBoard/codersImg2.jpg");
// const codersImg3 = require("../../../images/projects/codersBoard/codersImg3.jpg");

export const projectsArraies = {
	myself: [
		{
			title: "Businness Card",
			descriptionMain: "Moja strona wizytówka",
			descriptionFeatures: ["Formularz kontaktowy"],
			descriptionTechs: ["TypeScript", "Gatsby", "Sass", "React"],
			codeLink: "https://github.com/jatanski/portfolioNew",
			demoLink: "https://jatanski.github.io/portfolioNew",
			images: [businessCardImg1, businessCardImg2, businessCardImg3],
		},
		{
			title: "Commision refung page",
			descriptionMain: "Landing page wykonany na zlecenie.",
			descriptionFeatures: ["Strona typu one-page", "Formularz kontaktowy"],
			descriptionTechs: ["TypeScript", "Gatsby", "Sass", "React"],
			codeLink: "https://github.com/jatanski/commisionRefund",
			demoLink: "https://odzyskamytwojaprowizje.pl/",
			images: [commisionImage1, commisionImage2, commisionImage3],
		},

		{
			title: "Master of sport",
			descriptionMain:
				"Pierwsza moja większa aplikacja napisana do nauki reacta oraz node.js. Jest to dziennik treningowy oraz żywieniowy dla sportowców.",
			descriptionFeatures: [
				"Tworzenie planów treningowych i żyweniowych",
				"Prowadzenie dziennika treningowego",
				"Monitorowanie postępów",
				"Kalkulator BMI",
			],
			descriptionTechs: ["JavaScript", "MongoDB", "Express", "React + Redux"],
			codeLink: "https://github.com/jatanski/master-of-sport",
			demoLink: "https://master-sportman.herokuapp.com/",
			images: [masterOfSport1, masterOfSport2, masterOfSport3],
		},
		{
			title: "English Sticky App",
			descriptionMain: "Aplikacja w trakcie tworzenia. Będzie to aplikacja do nauki słownictwa obcego.",
			descriptionFeatures: [
				"Tworzenie list słówek wraz z opisem, zdjęciem i audio",
				"Nauka systemem fiszek",
				"Udostępnianie list słówek",
				"Rozszerzenie do google do zapisanywania słówek ze stron internetowych",
			],
			descriptionTechs: ["TypeScript", "GraphQL", "Prisma", "React + Redux", "PostreSQL"],
			codeLink: "https://github.com/jatanski/EnglishApp",
			demoLink: "https://github.com/jatanski/EnglishApp",
			images: [englishImage1, englishImage2, englishImage3],
		},
	],
	withFriends: [
		{
			title: "Family Album",
			descriptionMain:
				"Aplikacja wykonana jako prezent świąteczny dla rodziców razem z moim bratem. Jest to album",
			descriptionFeatures: [
				"Tworzenie albumów ze zdjęciami wraz z opisami i datami wykonamia",
				"Udostępnianie albumów innym członkom rodziny",
				"Oglądanie zdjęć",
			],
			descriptionTechs: ["React", "Node", "TypeScript", "Express", "MongoDB"],
			codeLink: "https://github.com/jatanski/family-album",
			demoLink: "http://family-album.surge.sh/#/",
			images: [familyAlbum1, familyAlbum2, familyAlbum3],
		},
		{
			title: "Optimize App",
			descriptionMain: `Aplikacja do dawania feedbacku w zespołach projektowych. Powstała podczas heckathonu na zakończenie kursu "CodersCamp - edycja IV" i zajęła II miejsce.`,
			descriptionFeatures: [
				"Tworzenie konta połączonego ze slackiem",
				"Tworzenie zapytań do zespołu",
				"Dawanie feedbacku",
				"Powiadomienia chrome oraz na połączonych kanałach na slacku",
			],
			descriptionTechs: ["JavaScript", "MongoDB", "Express", "React + Redux"],
			codeLink: "https://github.com/jatanski/Optimize",
			demoLink: "https://github.com/jatanski/Optimize",
			images: [optimizeImage1, optimizeImage2, optimizeImage3],
		},
		{
			title: "LifeChat",
			descriptionMain: `Aplikacja ułatwiajaca pracę i odstresowująca dla osób pracujących na czatach internetowych. Powstała podczas Heckathonu na zakończenie kursu "CodersCamp - edycja III" i zajęła III miejsce.`,
			descriptionFeatures: [
				"Dwustronny czat w czasie rzeczywistym oparty o web sockety",
				"Wykorzystując słowa kluczowe w swoim odpowiedziach pracownik czatu zbiera punkty, które potem może wymieniać na nagrody",
			],
			descriptionTechs: ["JavaScript", "MongoDB", "Express", "React + Redux", "WebSocket"],
			codeLink: "https://github.com/jatanski/LifeChat",
			demoLink: "https://github.com/jatanski/LifeChat",
			images: [chatImg1, chatImg2, chatImg3],
		},
		// {
		// 	title: "Coders Board",
		// 	descriptionMain: "Aplikacja tworzona w stowarzyszeniu CodersCrew do zarządzania organizacjami non-profit.",
		// 	descriptionFeatures: ["Dodawanie zdjęć"],
		// 	descriptionTechs: ["TypeScript", "GraphQL", "Prisma", "React", "PostreSQL"],
		// 	codeLink: "https://github.com/jatanski/gift-from-dog",
		// 	demoLink: "https://github.com/jatanski/gift-from-dog",
		// 	images: [codersImg1, codersImg2, codersImg3],
		// },
	],
};

export const startProject = {
	title: "Family Album",
	descriptionMain: "Aplikacja wykonana jako prezent świąteczny dla rodziców razem z moim bratem. Jest to album",
	descriptionFeatures: [
		"Tworzenie albumów ze zdjęciami wraz z opisami i datami wykonamia",
		"Udostępnianie albumów innym członkom rodziny",
		"Oglądanie zdjęć",
	],
	descriptionTechs: ["React", "Node", "TypeScript", "Express", "MongoDB"],
	codeLink: "https://github.com/jatanski/family-album",
	demoLink: "http://family-album.surge.sh/#/",
	images: [familyAlbum1, familyAlbum2, familyAlbum3],
};
