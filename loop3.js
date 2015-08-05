const fs = require('fs'),
      later = require('later');
    curl = require('node-curl');

var sched = later.parse.recur().every(15).minute(),
t = later.setInterval(test, sched),
count = 400;

function test() {
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

