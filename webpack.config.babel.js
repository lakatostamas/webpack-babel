import path from 'path';
import webpack from 'webpack';

const config = {
	mode: 'production',
	entry: './foo.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'foo.bundle.js'
	}
};

export default config;
