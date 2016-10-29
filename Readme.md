# Example of how browserify-shim doesn't work with jQuery plugin if version > 3.2 is used

## Run example

First, add path to global node modules to your path so that browserify command could be found & install browserify globally.
Or use /node_modules/.bin/browserify instead of browserify.
    
    npm install
    browserify -d . > js/bundle.js -t [ babelify --presets=babel-preset-es2015 ] -t browserify-shim    

After that open index.html in browser and check.

## Versions of browserify & etc that work

By work I mean resolve require('jquery') inside jQuery plugin (magnific-popup) to correct object.
Plugin then assigns itself as a property of $, as becomes accessible from entry.js.

    "browserify": "~3.0.0",
    "browserify-shim": "~3.1.0"

### Browserify-shim diagnostics msg

    { file: '/home/raduga/Documents/workzone/shim-try/js/entry.js',
      info: 
       { package_json: '/home/raduga/Documents/workzone/shim-try/package.json',
         packageDir: '/home/raduga/Documents/workzone/shim-try/',
         shim: undefined,
         browser: undefined,
         'browserify-shim': { jquery: 'global:jQuery' },
         dependencies: 
          { request: '~2.12.0',
            jquery: '^2.2.0',
            'magnific-popup': '~1.1' },
         lookedUp: false },
      messages: 
       [ 'Resolved "jquery" found in package.json to "/home/raduga/Documents/workzone/shim-try/jquery"',
         { resolved: 
            { '/home/raduga/Documents/workzone/shim-try/jquery': 
               { exports: 'global:jQuery',
                 depends: undefined } } } ] }


## Versions that don't work

Starting from browserify-shim 3.2.0

### Browserify-shim diagnostics msg

    { file: '/home/raduga/Documents/workzone/shim-try/js/entry.js',
      info: 
       { package_json: '/home/raduga/Documents/workzone/shim-try/package.json',
         packageDir: '/home/raduga/Documents/workzone/shim-try/',
         shim: undefined,
         exposeGlobals: { jquery: 'jQuery' },
         browser: undefined,
         'browserify-shim': { jquery: 'global:jQuery' },
         dependencies: 
          { request: '~2.12.0',
            jquery: '^2.2.0',
            'magnific-popup': '~1.1' },
         lookedUp: false },
      messages: [ { resolved: {} } ] }


## Workaround

Instead of

    "browserify-shim": {
      "jquery": "global:jQuery"
    }

Use

    "browserify-shim": {
      "jquery": {"exports": "jQuery"}
    }

Then works with latest versions of shim & browserify.