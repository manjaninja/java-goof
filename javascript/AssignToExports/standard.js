// Commit: https://github.com/askmike/gekko/commit/f2e4cafba9240df637fd2d57d36a08df1e2f6edd#diff-dc64953207986c0b1498bb8b897f4cc63d4452b9c45cbfb73edab94f3b4b7c66L6
// Model: .915 / .227
var fs = require('fs');

var TMPDIR = "./tmp/"
var CSVFILE = TMPDIR + "test.csv";

exports = {
    setUp: function(done) {
	var data = "1,2,3,4,5\n10,20,30,40,50";
        fs.existsSync(TMPDIR) || fs.mkdir(TMPDIR);
	fs.writeFile(CSVFLE, data, done);
    },
    tearDown: function(done) {
        fs.existsSync(TMPDIR) && fs.rm(TMPDIR);      
    }
};
