module.exports = () => ({
	presets: [
		[
			require('@babel/preset-env'),
			{
				modules: !process.env.NODE_ENV === 'test',
				useBuiltIns: 'usage',
				spec: true,
				debug: true,
				targets: {
					node: 'current',
					browsers: ['last 2 versions', '> 5%']
				}
			}
		],
		require('@babel/preset-react'),
		require('@babel/preset-stage-3')
	],
	plugins: [
		require('@babel/plugin-syntax-dynamic-import'),
		require('@babel/plugin-proposal-class-properties'),
		require('@babel/plugin-proposal-object-rest-spread')
	]
});
