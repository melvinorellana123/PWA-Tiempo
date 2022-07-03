module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,svg,png,html,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};