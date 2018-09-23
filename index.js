module.exports = (api, {env={}, ...options}) => {
	return {
		presets: [
			[
				require('@babel/preset-env'),
				{
					modules: api.env('test') ? 'commonjs' : false,
					useBuiltIns: 'usage',
					spec: true,
					debug: true,
					...env
				}
			],
			require('@babel/preset-react')
		],
		plugins: [
			require('@babel/plugin-proposal-class-properties'),
			require('@babel/plugin-proposal-json-strings'),
			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-syntax-import-meta')
		],
		...options
	}
};
