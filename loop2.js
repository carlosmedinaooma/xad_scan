const fs = require('fs'),
      later = require('later');
    curl = require('node-curl');

var sched = later.parse.recur().every(15).minute(),
t = later.setInterval(test, sched),
count = 400;

function test() {
    var st = 'http://local.xad.com/rest/local?i=dentist&loc=90210&uid=235949863538&l=ad&k=lG15roW6exy3IsRUgLnLbfNom_DMTAr3&v=1.1&appid=normal&n_ad=50';
    curl(st, function(err) {
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

