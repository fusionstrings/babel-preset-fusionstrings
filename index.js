module.exports = (api, {node = false, browser = true, ...opts}) => {
	const targets = {
		...(node ? { node: 'current' } : {}),
		...(browser ? {browsers: ['>= 1%']} : {})
	}
	return {
		presets: [
			[
				require('@babel/preset-env'),
				{
					modules: api.env('test') ? 'commonjs' : false,
					useBuiltIns: 'usage',
					spec: true,
					debug: true,
					targets,
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
	}
};
