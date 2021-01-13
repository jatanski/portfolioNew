import { IProjectsInformations, MyProject } from "./Projects.types";

const businessCardImg1 = require("../../../images/projects/businessCard/businness-card-1.jpg");
const businessCardImg2 = require("../../../images/projects/businessCard/businness-card-2.jpg");
const businessCardImg3 = require("../../../images/projects/businessCard/businness-card-3.jpg");

const commisionImage1 = require("../../../images/projects/commisionRefundPage/commision-img1.jpg");
const commisionImage2 = require("../../../images/projects/commisionRefundPage/commision-img2.jpg");
const commisionImage3 = require("../../../images/projects/commisionRefundPage/commision-img3.jpg");

const masterOfSport1 = require("../../../images/projects/masterOfSport/master-img1.jpg");
const masterOfSport2 = require("../../../images/projects/masterOfSport/master-img2.jpg");
const masterOfSport3 = require("../../../images/projects/masterOfSport/master-img3.jpg");

const dreamDatesLandingImage1 = require("../../../images/projects/dream-dates-landing/dream-dates-landing-1.jpg");
const dreamDatesLandingImage2 = require("../../../images/projects/dream-dates-landing/dream-dates-landing-2.jpg");
const dreamDatesLandingImage3 = require("../../../images/projects/dream-dates-landing/dream-dates-landing-3.jpg");

const dreamDatesAppImage1 = require("../../../images/projects/dream-dates-app/dream-dates-1.jpg");
const dreamDatesAppImage2 = require("../../../images/projects/dream-dates-app/dream-dates-2.jpg");
const dreamDatesAppImage3 = require("../../../images/projects/dream-dates-app/dream-dates-3.jpg");

const familyAlbum1 = require("../../../images/projects/familyAlbum/album-img3.jpg");
const familyAlbum2 = require("../../../images/projects/familyAlbum/album-img1.jpg");
const familyAlbum3 = require("../../../images/projects/familyAlbum/album-img2.jpg");

const optimizeImage1 = require("../../../images/projects/optimizeApp/optimize-img-1.jpg");
const optimizeImage2 = require("../../../images/projects/optimizeApp/optimize-img-2.jpg");
const optimizeImage3 = require("../../../images/projects/optimizeApp/optimize-img-3.jpg");

const chatImg1 = require("../../../images/projects/lifeChat/lifeChat-img1.jpg");
const chatImg2 = require("../../../images/projects/lifeChat/lifeChat-img2.jpg");
const chatImg3 = require("../../../images/projects/lifeChat/lifeChat-img3.jpg");

export const projectsInformations: IProjectsInformations = {
	myself: [
		{
			title: "Businness Card",
			descriptionMain: "My bussiness card.",
			descriptionFeatures: ["One-page website", "Contact Form"],
			descriptionTechs: ["TypeScript", "Gatsby", "Sass", "React"],
			codeLink: "https://github.com/jatanski/portfolionew",
			demoLink: "https://jatanski.github.io/portfolionew",
			images: [businessCardImg1, businessCardImg2, businessCardImg3],
		},
		{
			title: "Commision refung page",
			descriptionMain: "Landing page website wrote for financial company.",
			descriptionFeatures: ["One-page website", "Contact Form"],
			descriptionTechs: ["TypeScript", "Gatsby", "Sass", "React"],
			codeLink: "https://github.com/jatanski/commisionRefund",
			demoLink: "https://odzyskamy-twoja-prowizje.netlify.app/",
			images: [commisionImage1, commisionImage2, commisionImage3],
		},

		{
			title: "Master of sport",
			descriptionMain:
				"My first bigger application written to learn react and node. It is a training and nutrition journal for athletes.",
			descriptionFeatures: [
				"Creating training and nutrition plans",
				"Keeping a training diary",
				"Monitoring progress",
				"BMI Calculator",
			],
			descriptionTechs: ["JavaScript", "MongoDB", "Express", "React + Redux"],
			codeLink: "https://github.com/jatanski/master-of-sport",
			demoLink: "https://master-sportman.herokuapp.com/",
			images: [masterOfSport1, masterOfSport2, masterOfSport3],
		},
		{
			title: "Dream Dates - Landingpage",
			descriptionMain: "Landing page website for my date application.",
			descriptionFeatures: ["One-page website", "Register by Facebook and Google"],
			descriptionTechs: ["TypeScript", "Gatsby", "Sass", "React"],
			codeLink: "https://github.com/jatanski/dreamdates-landing-page",
			demoLink: "https://dreamdates-landing-test.netlify.app/",
			images: [dreamDatesLandingImage1, dreamDatesLandingImage2, dreamDatesLandingImage3],
		},
		{
			title: "Dream Dates - App",
			descriptionMain:
				"The application is used to find friends and arrange dates. The application code is private.",
			descriptionFeatures: [
				"Creating profile",
				"Browsing and searching profile another users",
				"Making a conversation, sending likes",
				"Real-time chat",
			],
			descriptionTechs: ["TypeScript", "GraphQL", "Prisma", "React + Redux", "PostreSQL"],
			codeLink: "private",
			demoLink: "https://dreamdates-test.netlify.app/",
			images: [dreamDatesAppImage1, dreamDatesAppImage2, dreamDatesAppImage3],
		},
	],
	withFriends: [
		{
			title: "Family Album",
			descriptionMain:
				"The application allows create and share photo albums. Made as a Christmas gift for parents together with my brother.",
			descriptionFeatures: [
				"Creating photo albums with descriptions and performed dates",
				"Share album another family members",
				"Viewing photos",
			],
			descriptionTechs: ["React", "Node", "TypeScript", "Express", "MongoDB"],
			codeLink: "https://github.com/jatanski/family-album",
			demoLink: "https://family-album-test.netlify.app/",
			images: [familyAlbum1, familyAlbum2, familyAlbum3],
		},
		{
			title: "Optimize App",
			descriptionMain: `Application for giving feedback in project teams. It was created during the heckathon at the end of the "CodersCamp - 4th edition" and took 2nd place.`,
			descriptionFeatures: [
				"Creating an account linked to slack",
				"Creating team inquiries",
				"Giving feedback",
				"Chrome notifications and notifications on connected channels on slack",
			],
			descriptionTechs: ["JavaScript", "MongoDB", "Express", "React + Redux"],
			codeLink: "https://github.com/jatanski/Optimize",
			demoLink: "https://github.com/jatanski/Optimize",
			images: [optimizeImage1, optimizeImage2, optimizeImage3],
		},
		{
			title: "LifeChat",
			descriptionMain: `Application facilitating work and de-stressing for people working in online chats. It was created during the Heckathon at the end of the "CodersCamp - 3rd edition" course and took third place.`,
			descriptionFeatures: [
				"Real-time two-way chat based on web sockets",
				"By using keywords in his replies, the chat employee collects points that can then be exchanged for prizes",
			],
			descriptionTechs: ["JavaScript", "MongoDB", "Express", "React + Redux", "WebSocket"],
			codeLink: "https://github.com/jatanski/LifeChat",
			demoLink: "https://github.com/jatanski/LifeChat",
			images: [chatImg1, chatImg2, chatImg3],
		},
	],
};

export const startProject: MyProject = {
	title: "Family Album",
	descriptionMain:
		"The application allows create and share photo albums. Made as a Christmas gift for parents together with my brother.",
	descriptionFeatures: [
		"Creating photo albums with descriptions and performed dates",
		"Share album another family members",
		"Viewing photos",
	],
	descriptionTechs: ["React", "Node", "TypeScript", "Express", "MongoDB"],
	codeLink: "https://github.com/jatanski/family-album",
	demoLink: "https://family-album-test.netlify.app/",
	images: [familyAlbum1, familyAlbum2, familyAlbum3],
};
