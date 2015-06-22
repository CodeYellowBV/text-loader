var loaderUtils = require('loader-utils');
var path = require('path');

// Get the root path (where the webpack config file also should be).
var appRoot = path.join(__dirname, '../..');

// Prepend html files with a comment that has the filename in it.
// This comes in handy when debugging templates via the DevTools.
function convertContent(content, filename) {
    if (/.html$/.test(filename)) {
        return "\n<!-- " + filename + "  -->\n" + content;
    }

    return content;
}

module.exports = function(content) {
    // Get the absolute path to the required file and make it relative to our app root.
    var filename = loaderUtils.getRemainingRequest(this);
    var filenameRelative = path.relative(appRoot, filename);

    var convertedContent = convertContent(content, filenameRelative);

    this.cacheable && this.cacheable();
    this.value = content;

    return "module.exports = " + JSON.stringify(convertedContent);
}
