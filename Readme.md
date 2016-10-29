# Example of how to use browserify-shim for jquery plugins

## Run example

First, add path to global node modules to your path so that browserify command could be found & install browserify globally.
Or use /node_modules/.bin/browserify instead of browserify.
    
    npm install
    browserify -d . > js/bundle.js -t [ babelify --presets=babel-preset-es2015 ] -t browserify-shim

After that open index.html in browser and check.

## Versions of browserify & etc that make it work:

    "browserify": "~3.0.0",
    "browserify-shim": "~3.1.0"


## Versions that don't work:

Starting from browserify-shim 3.2.0
