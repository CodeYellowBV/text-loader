# text loader for webpack
Works the same as [raw-loader](https://github.com/webpack/raw-loader), but prepends a comment with the relative path in it (e.g. `<-- view/user/edit.html -->`) for HTML files. This comes in handy when developing a complex single page app that nests template files.

## Installation

`npm install CodeYellowBV/text-loader`

## Usage

``` javascript
var fileContent = require("text!./file.txt");
// => returns file.txt content as string (no comment prepended).
```

``` javascript
var fileContent = require("text!./file.html");
// => returns file.html content as string, with <!-- path/to/file.html --> prepended.
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
