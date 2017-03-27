A loaders runner. Loaders modify resources’ content. (more below)
A plugins runner. Plugins affect the build process.
A preprocessor
A development environment
A build tool

everything in a webpack loader config is executed right to left:

require('style!css!sass../style/main.scss');

    1. Require the file ../style/main.scss
    2. tells the sass loader to processe the resources – which converts sass to css
    3. pipes the sass loader’s output to css loader – which further processes the css, for example url and @import statements
    4. pipes the css loader’s output to style loader – which adds css to the dom by injecting a <style> tag