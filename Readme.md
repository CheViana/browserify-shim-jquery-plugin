# Example of how to use browserify-shim for jquery plugins

## Run example

First, add path to global node modules to your path so that browserify command could be found & install browserify globally.
Or use /node_modules/.bin/browserify instead of browserify.
    
    npm install
    browserify -d . > js/bundle.js -t [ babelify --presets=babel-preset-es2015 ] -t browserify-shim

After that open index.html in browser and check.

## Versions of browserify & etc that make it work:

     browserify@2.36.1
    │ │ ├─┬ buffer-browserify@0.2.5
    │ │ ├── console-browserify@1.0.3
    │ │ ├── constants-browserify@0.0.1
    │ │ ├── crypto-browserify@1.0.9
    │ │ ├─┬ http-browserify@0.1.14
    │ │ ├── os-browserify@0.1.2
    │ │ ├─┬ vm-browserify@0.0.4
    │ │ └─┬ zlib-browserify@0.0.3
    │     ├── uglify-to-browserify@1.0.2
    ├─┬ browserify-shim@3.0.6


## Versions that don't work:

    "browserify": "~13.1",
    "browserify-shim": "~3.8"
