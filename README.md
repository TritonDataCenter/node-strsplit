# node-strsplit: split a string by a regular expression

## strsplit(str, pattern[, limit])

Splits a string `str` into at most `limit` fields using the pattern `pattern` as
a delimeter.  The pattern may be either a string or a regular expression.  The
returned value is an array of fields.

If `limit` is unspecified or zero, any number of fields may be returned, and the
behavior is exactly identical to `str.split(pattern)`.

`strsplit(str, pattern, limit)` behaves just like `str.split(pattern, limit)`,
with one important exception: the string is split at most `limit - 1` times,
so the last returned element contains the contents of all subsequent fields.
String.split truncates all such fields.

By comparison, here's String.split:

    > 'alpha bravo charlie delta'.split(' ', 3)
    [ 'alpha', 'bravo', 'charlie' ]

and here's strsplit:

    > strsplit('alpha bravo charlie delta', ' ', 3)
    [ 'alpha', 'bravo', 'charlie delta' ]

This is the behavior implemented by `split` in Perl, Java, and other
environments.
