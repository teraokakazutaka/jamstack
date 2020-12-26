module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger':
			process.env.NODE_ENV === 'production' ? 'warning' : 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'no-irregular-whitespace': ['error', { skipRegExps: true }],
	},
}
