#!/usr/bin/env node

/*
 * JavaScript-special test cases.  These are required to test string patterns
 * rather than regular expressions.
 */

var mod_assert = require('assert');
var strsplit = require('../lib/strsplit');

/* basic case with string pattern (uses String.split) */
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    'one two three'.strsplit(' '));

/* limit ineffective, simple cases */
mod_assert.deepEqual([ 'one', 'two', 'three', 'four', 'five' ],
    'one two three four five'.strsplit(' ', 10));
mod_assert.deepEqual([ 'one', 'two three', 'four', 'five' ],
    'one  two three  four  five'.strsplit('  ', 10));

/* limit ineffective, empty fields */
mod_assert.deepEqual([ 'one', 'two', '', 'three' ],
    'one two  three'.strsplit(' ', 10));

/* regexp escaping for string patterns */
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    'one.two.three'.strsplit('.', 10));
mod_assert.deepEqual([ '', '', '', '', 'two.three' ],
    'one.two.three'.strsplit(/./, 5));

/* limit effective */
mod_assert.deepEqual([ 'one', 'two three' ],
    'one two three'.strsplit(' ', 2));

/* no pattern is equivalent to \s+ */
mod_assert.deepEqual([ 'one', 'two', 'three', 'four' ],
    'one \t two   three\t\nfour'.strsplit());
