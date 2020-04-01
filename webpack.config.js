module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`
    }
};
