module.exports = {
	siteMetadata: {
		title: "Jakub Tanski Development",
		description: "Welcome to my web developer portfolio site.",
		author: "Jakub Tański",
		logo: "./src/images/portfolio-icon.png",
	},
	pathPrefix: "/portfolioNew",
	plugins: [
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Montserrat:400,600:latin,latin-ext", "sans-serif"],
				},
			},
		},
		// {
		//   resolve: `gatsby-plugin-facebook-pixel`,
		//   options: {
		//     pixelId: 'pixel id here',
		//   },
		// },
		// {
		//   resolve: `gatsby-plugin-google-analytics`,
		//   options: {
		//     // The property ID; the tracking code won't be generated without it
		//     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
		//     // Defines where to place the tracking script - `true` in the head and `false` in the body
		//     head: false,
		//     // Setting this parameter is optional
		//     anonymize: true,
		//     // Setting this parameter is also optional
		//     respectDNT: true,
		//     // Avoids sending pageview hits from custom paths
		//     exclude: ['/preview/**', '/do-not-track/me/too/'],
		//     // Delays sending pageview hits on route update (in milliseconds)
		//     pageTransitionDelay: 0,
		//     // Enables Google Optimize using your container Id
		//     optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
		//     // Enables Google Optimize Experiment ID
		//     experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
		//     // Set Variation ID. 0 for original 1,2,3....
		//     variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
		//     // Any additional optional fields
		//     sampleRate: 5,
		//     siteSpeedSampleRate: 10,
		//     cookieDomain: 'example.com',
		//   },
		// },
		// "gatsby-plugin-react-helmet",
		"gatsby-plugin-typescript",
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				test: /\.js$|\.jsx$|\.ts$\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ["develop"],
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Jakub Tanski Development",
				short_name: "Tanski Development",
				start_url: "/",
				background_color: "#EEE",
				theme_color: "#ff416a",
				display: "minimal-ui",
				icon: "src/images/portfolio-icon.png",
			},
		},
	],
};
