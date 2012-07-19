/*
 * strsplit.js: split a string
 */
module.exports = strsplit;
module.exports.strsplit = strsplit;

function strsplit(str, pattern, limit)
{
	var i, rv, last, match;

	if (arguments.length < 3 || !limit)
		return (str.split(pattern));

	if (limit == 1)
		return ([ str ]);

	if (typeof (pattern) == 'string')
		/* Quote the regexp. */
		pattern = new RegExp(
		    /* JSSTYLED */
		    pattern.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), 'g');
	else
		pattern = new RegExp(pattern.source, 'g');

	rv = [];
	last = 0;
	for (i = 0; i < limit - 1; i++) {
		match = pattern.exec(str);

		if (!match)
			break;

		rv.push(str.substr(last, pattern.lastIndex - last -
		    match[0].length));
		last = pattern.lastIndex;
	}

	rv.push(str.substr(last));
	return (rv);
}
