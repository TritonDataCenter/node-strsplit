var mod_assert = require('assert');
var strsplit = require('../lib/strsplit');

/* basic case with string pattern (uses String.split) */
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    strsplit('one two three', ' '));

/* basic case with regexp pattern (uses String.split) */
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    strsplit('one   two \tthree', /\s+/));

/* basic case with limit === 0 (uses String.split) */
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    strsplit('one   two \tthree', /\s+/, 0));

/* edge case: limit == 1 */
mod_assert.deepEqual([ 'one  two \tthree' ],
    strsplit('one  two \tthree', /\s+/, 1));

/* limit ineffective, simple cases */
mod_assert.deepEqual([ 'one', 'two', 'three', 'four', 'five' ],
    strsplit('one two three four five', ' ', 10));
mod_assert.deepEqual([ 'one', 'two', 'three', 'four', 'five' ],
    strsplit('one  two  three  four  five', '  ', 10));
mod_assert.deepEqual([ 'one', 'two', 'three', 'four', 'five' ],
    strsplit('one \ttwo     \t  three \t four five', /\s+/, 10));
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    strsplit('one two three', ' ', 3));

/* limit ineffective, empty fields */
mod_assert.deepEqual([ '', 'one', 'two', 'three' ],
    strsplit('  one  two  three', /\s+/, 10));
mod_assert.deepEqual([ 'one', 'two', '', 'three' ],
    strsplit('one two  three', ' ', 10));

/* regexp escaping for string patterns */
mod_assert.deepEqual([ 'one', 'two', 'three' ],
    strsplit('one.two.three', '.', 10));
mod_assert.deepEqual([ '', '', '', '', 'two.three' ],
    strsplit('one.two.three', /./, 5));

/* limit effective */
mod_assert.deepEqual([ 'one', 'two three' ],
    strsplit('one two three', ' ', 2));
mod_assert.deepEqual([ 'one', 'two\tthree' ],
    strsplit('one     two\tthree', /\s+/, 2));
