module.exports = {
	presets: [
		[
			require('@babel/preset-env'),
			{
				modules: false,
				useBuiltIns: 'usage',
				spec: true,
				debug: true,
				targets: {
					node: 'current',
					browsers: ['last 2 versions', '> 5%n']
				}
			}
		],
		require('@babel/preset-react')
	],
	plugins: [
		require('@babel/plugin-syntax-dynamic-import'),
		require('@babel/plugin-proposal-class-properties')
	]
};
