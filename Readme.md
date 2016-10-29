# Example of how to use browserify-shim for jquery plugins

Run example:
npm install
browserify -d . > js/bundle.js -t [ babelify --presets=babel-preset-es2015 ] -t browserify-shim

After that open index.html in browser and check.