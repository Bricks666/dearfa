const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const { join } = require("path");
const { src, build, root, public } = require("./paths");

const assetsReg = /\.(svg|png|j(e?)pg)$/;

module.exports = (...args) => {
	/** @type {import("webpack").Configuration} */
	const config = {
		entry: join(src, "index.tsx"),
		output: {
			filename: "[name].js",
			path: build,
			chunkFilename: "[name].js",
			publicPath: "/",
			clean: true,
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx"],
			plugins: [
				new TsconfigPathsPlugin({
					configFile: join(root, "tsconfig.json"),
				}),
			],
		},
		externals: "/node_modules/",
		module: {
			rules: rules(false),
		},
		plugins: plugins(),
	};

	console.log(config);
	return config;
};

/** @returns {import("webpack").RuleSetRule[]} */
const rules = (isDev) => [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: ["babel-loader"],
	},
	{
		test: /\.ts(x?)$/,
		exclude: [/node_modules/, /mocks/],
		use: [
			"babel-loader",
			{
				loader: "ts-loader",
				options: {
					configFile: join(root, "tsconfig.json"),
				},
			},
		],
	},
	{
		test: assetsReg,
		type: "asset/resource",
	},
	{
		test: /\.css$/,
		use: [
			{
				loader: "style-loader",
			},
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: /\.module\.\w+$/,
						localIdentName: isDev ? "[name]__[local]--[hash]" : "[hash:base64]",
					},
				},
			},
			{
				loader: "postcss-loader",
			},
		],
	},
];

const plugins = () => [
	new HtmlPlugin({
		template: join(public, "index.html"),
	}),
	new MiniCSSExtractPlugin(),
	new CaseSensitivePathsPlugin(),
];
