# Survey of "split" in Java, Perl, and Python

This directory contains some test cases and test programs in Java, Perl, and
Python for figuring out what these language's string split function does.
Specifically, this is:

* Java: String.split.
* Perl: split.
* Python: re.split.  While the "split" method on strings may be more common, it
  does not handle regular expressions, while the Java and Perl counterparts do.

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

The point of all of this is to figure out what a new JavaScript "strsplit"
should do.  JavaScript has a "split" method, but it behaves substantially
different than all of these implementations when "limit" is specified.
This implementation of "strsplit" for JavaScript will mirror the Java and Perl
implementation, as the differences in Python do not seem substantial or better.

The remaining use case that would be nice to address is splitting fields in
textual input like awk(1) does.  This doesn't work directly in any of these
implementations when the first field has leading whitespace (as in the case of
ps(1) output, for example, and any other tool that right-aligns some fields).
In that case, these tools return an empty first field, while awk and bash would
skip the leading whitespace.  Python's string split does handle this if you
specify a separator of None (or don't specify one), but this seems pretty ad
hoc.  It seems to make more sense to have consumers simply call trim() first, if
that's what they want.
