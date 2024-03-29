/* eslint-disable import/no-extraneous-dependencies */

import * as path from 'path';
import { babel } from '@rollup/plugin-babel';
import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		cors: true,
		hmr: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		devSourcemap: true,
	},
	logLevel: 'error',
	plugins: [
		babel({
			babelrc: true,
			configFile: './.babelrc',
			babelHelpers: 'bundled',
			browserslistConfigFile: true,
			extensions: ['.ts', '.tsx'],
		}),
		react(),
		splitVendorChunkPlugin()
	],
});
