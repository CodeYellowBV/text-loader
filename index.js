var loaderUtils = require('loader-utils');
var path = require('path');

// Get the root path (where the webpack config file also should be).
var appRoot = path.join(__dirname, '../..');

module.exports = function(content) {
    // Get the absolute path to the required file and make it relative to our app root.
    var filename = loaderUtils.getRemainingRequest(this);
    var filenameRelative = path.relative(appRoot, filename);
    var query = loaderUtils.parseQuery(this.query);

    // Prepend html files with a comment that has the filename in it.
    // This comes in handy when debugging templates via the DevTools.
    var convertedContent = content;
    if (/.html$/.test(filenameRelative) && !query.nocomment) {
        convertedContent = "\n<!-- " + filename + "  -->\n" + content;
    }

    this.cacheable && this.cacheable();
    this.value = content;

    return "module.exports = " + JSON.stringify(convertedContent);
}
