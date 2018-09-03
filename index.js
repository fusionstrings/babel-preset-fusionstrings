module.exports = (api, opts) => ({
	presets: [
		[
			require('@babel/preset-env'),
			{
				modules: api.env('test') ? 'commonjs' : false,
				useBuiltIns: 'usage',
				spec: true,
				debug: true,
				targets: {
					browsers: ['>= 1%']
				},
				...opts
			}
		],
		require('@babel/preset-react')
	],
	plugins: [
		require('@babel/plugin-proposal-class-properties'),
		require('@babel/plugin-proposal-json-strings'),
		require('@babel/plugin-syntax-dynamic-import'),
		require('@babel/plugin-syntax-import-meta')
	]
});
