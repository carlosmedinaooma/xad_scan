const fs = require('fs'),
      later = require('later');
    curl = require('node-curl');
var util = require('util');
var exec = require('child_process').exec;


var argv = process.argv.slice(2);
console.log(argv);
var sched = later.parse.recur().every(10).minute(),
t = later.setInterval(test, sched),
count = 4000;

function test() {
    var url = 'http://local.xad.com/rest/local?i=' + encodeURIComponent(argv[0]) + '&loc=90210&uid=235949863538&l=ad&k=lG15roW6exy3IsRUgLnLbfNom_DMTAr3&v=1.1&appid=normal&n_ad=50';
    console.log(url );
    curl(url, function(err) {
      //console.info(this.status);
      //console.info('-----');
      console.info(this.body);
      //console.info('-----');
      console.info('SIZE=' + this.info('SIZE_DOWNLOAD'));
     });
     console.log('*****************************************************************************' + new Date());
     count--;
     if(count <= 0) {
     t.clear();
     } 
}

