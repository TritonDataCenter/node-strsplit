#!/bin/bash

#
# The main test suite for strsplit is to run the body of test cases in
# ../survey/ and compare the output to that of Java and Perl, whose
# implementations we intend to mirror exactly.  errexit will cause this script
# to exit with failure if any of these operations fail.
#
set -o errexit

surveydir=$(dirname $0)/../survey

set -o xtrace
make -C $surveydir perl.csv java.csv js-strsplit.csv
diff $surveydir/js-strsplit.csv $surveydir/perl.csv > /dev/null
diff $surveydir/js-strsplit.csv $surveydir/java.csv > /dev/null
set +o xtrace

echo "Test PASSED"
