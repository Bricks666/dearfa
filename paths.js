const { resolve } = require("path");

const root = __dirname;
const src = resolve(root, "src");
const build = resolve(root, "build");
const public = resolve(root, "public");

module.exports = {
	root,
	src,
	build,
	public,
};
