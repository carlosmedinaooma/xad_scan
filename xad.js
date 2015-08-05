
//Global Variables
var express = require('express');
var request = require('request');
var xad = express();
var parser = require('xml2json');

//start listener
xad.listen(process.env.PORT || 8955);

xad.get('/xad', function(req, res) {
    
    var keyword=req.query.keyword.replace(' ','%20')
    console.log('keyword: ' + keyword );
    var loc=req.query.loc
    console.log('location: ' + loc );

    
     console.log('http://local.xad.com/rest/local?v=1.1&o_fmt=json&k=lG15roW6exy3IsRUgLnLbfNom_DMTAr3&auto_imp=1&sort=dist&i=' + keyword + '&devid=test-&appid=yellowpages-4.4.2&uid=test&loc=' + loc + '&co=US&s=0&n=15&l=ad' );
     url_request='http://local.xad.com/rest/local?v=1.1&o_fmt=json&k=lG15roW6exy3IsRUgLnLbfNom_DMTAr3&auto_imp=1&sort=dist&i=' + keyword + '&devid=test-&appid=yellowpages-4.4.2&uid=test&loc=' + loc + '&co=US&s=0&n=15&l=ad';
  //  curl.request('http://local.xad.com/rest/local?v=1.1&o_fmt=&k=lG15roW6exy3IsRUgLnLbfNom_DMTAr3&auto_imp=1&sort=dist&i=' + keyword + '&devid=test-&appid=yellowpages-4.4.2&uid=test&loc=' + loc + '&co=US&s=0&n=15&l=ad',  ret_curl );

    request(url_request, function (error, response, body) {
       var options = {
                object: true,
          };

      if (!error && response.statusCode == 200) {
       //console.log('body');
       json_result=JSON.parse(body);
        if (json_result.results.status == "0" ) { 
          console.log ('status equals to 0');
            res.send(json_result.results.paid_listings);
          } else {
            console.log('status different to 0');
           res.send(json_result.results);
          }
      }
    });
   
})
