module.exports = {
	name: "Projects",
	description: "Project websites and applications",
	// skip if localhost
	skip: !process.env.CONTEXT,
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run",
	},
	urls: [
		"https://www.bokasolutions.com/",
		"https://blog.bokasolutions.com/",
		"https://tiogadems.vercel.app/",
		"https://trivia-games.vercel.app/",
		"https://funeral-home.vercel.app/",
		"https://5s.bokasolutions.com/",
		"https://exercise.now.sh/",
		"https://mypass.bokasolutions.com/",
		"https://justtheweather.vercel.app/",
	]
};
