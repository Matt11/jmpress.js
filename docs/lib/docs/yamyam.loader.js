var YamYam = require("YamYam");

module.exports = function(source) {
	var cb = this.callback;
	YamYam.parse(source, {
		format: {
			line: {
				tag: "",
				_prepend: " ",
				_prependStart: ""
			},
			codeContainer: {
				tag: "pre",
				"class": function(buffer, params, element) {
					buffer.push("language-" + element.language.replace(/"/g, "&quot;"));
				}
			},
			code: "",
			codeText: ""
		}
	}, function(err, html) {
		cb(err, html && ("module.exports =\n\t" + JSON.stringify(html) + ";"));
	});
}