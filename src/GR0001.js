require('./current_file').file(__filename);

/*
* [GR:0001:stable]
* unsafe Regex
*/

var unsafeRegex = /(x+x+)+y/;

// test all vulns 5
