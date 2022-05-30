const common = require("./webpack.config");
const { public } = require("./paths");
const { default: merge } = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = (...args) => {
	console.log(args);

	const commonConfig = common(...args);

	/** @type {import("webpack").Configuration} */
	const extension = {
		target: "web",
		mode: "development",
		devtool: "source-map",
		devServer: {
			static: {
				directory: public,
				publicPath: "/",
				watch: true,
			},
			port: 3000,
			open: true,
			historyApiFallback: true,
			compress: true,
			server: "http",
			watchFiles: ["./src/**/*.*"],
			hot: true,
		},
		plugins: [new HotModuleReplacementPlugin()],
	};

	return merge(commonConfig, extension);
};
