const { sassPlugin } = require('esbuild-sass-plugin');

const prod = process.env.NODE_ENV === "production";

require('esbuild').build({
    entryPoints: [
        "./src/index.tsx"
    ],
    bundle: true,
    minify: prod ? true : false,
    sourcemap: prod ? false : "inline",
    target: ["chrome89", "firefox91", "safari15", "ios15"],
    outdir: './dist',
    loader: { '.eot': 'file', '.woff': 'file', '.woff2': 'file', '.ttf': 'file', '.svg': 'file', '.html': 'file' },
    plugins: [sassPlugin()],
}).catch(() => process.exit(1))