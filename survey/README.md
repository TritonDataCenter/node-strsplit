# Survey of "split" in Java, Perl, and Python

This directory contains some test cases and test programs in Java, Perl, and
Python for figuring out what these language's string split function does.
Specifically, this is:

* Java: String.split.
* Perl: split.
* Python: re.split.  While the "split" method on strings may be more common, it
  does not handle regular expressions, while the Java and Perl counterparts do.

For comparison, there's also a test case for this implementation of "strsplit".
in JavaScript.

The test cases here test both a simple string as a splitter (a space) and a
simple regular expression (`\s+`, indicating some non-zero number of whitespace
characters), as well as various values of the optional "limit" parameter.

In summary, in all of the cases tried, the Java and Perl implementations are
identical.  The Python implementation differs in a few ways:

* The "limit" argument is off-by-one relative to the Java and Perl APIs.  It
  represents the maximum number of splits to be made, rather than the maximum
  number of returned fields.
* -1 for "limit" is not special, and seems to mean that at most -1 splits will
  be made, meaning the string is not split at all.  In Java and Perl, -1 means
  there is no limit to the number of returned fields.
* Java and Perl strip trailing empty fields when "limit" is 0.  Python never
  strips trailing empty fields.

JavaScript has a "split" method, but it behaves substantially different than all
of these implementations when "limit" is specified.  This implementation of
"strsplit" for JavaScript mirrors the Java and Perl implementations, as the
differences in Python do not seem substantial or better.

The remaining use case that would be nice to address is splitting fields the way
awk(1) and bash(1) do, which is to strip leading whitespace.  Python's *string*
split also does this, but only if you specify None as the pattern.  strsplit
doesn't support this; just trim the string first if you want that behavior.
