
//Global Variables
var express = require('express');
var request = require('request');
var xad = express();
var call_logger  = require('./modules/call_logger')
var keyword=""
var location=""
var state =""
var xad_node = "http://10.66.12.193:8955/xad?"

var fs = require('fs');
var usStates = JSON.parse(fs.readFileSync('zipcodes.json', 'utf8'));

//In case i need to read all zips only
//var fs = require('fs');
//var array = fs.readFileSync('zipcodes.csv').toString().trim().split(/[\r\n]+/g)
//console.log(array.length)


var start_zipcode=0
var end_zipcode = 0

for(var attributename in usStates){
    if (usStates[attributename]["abbreviation"]== "DC"){
      start_zipcode = usStates[attributename]["zipmin"]
      end_zipcode = usStates[attributename]["zipmax"]
      for(var zip = start_zipcode; zip <= end_zipcode;zip++){

        //console.log (zip)
      }

    }

}
/*var query_result=jsonQuery('[abbreviation=DC].zipmin', {
  data: usStates
}).value
*/
//console.log(typeof(query_result))
//console.log(query_result)

//Keyword
if (process.argv[2])
{
  keyword=process.argv[2]

}

//Zipcode, State, All, City
if (process.argv[3])
{
  location=process.argv[3]

}

//State
if (process.argv[4])
{
  state=process.argv[4]

}


if (location.length>0 && keyword.length>0)
{

    if (!isNaN(location)){ //Search by Zipcode
      //console.log ('Search by zipcode:' + location)
      url_request=xad_node+"keyword=" + keyword + "&loc=" + location
      result = request(url_request,callback)
    }
    else
    {
      if (location.toLowerCase() =="all") //Search by AllStates
      {
         //console.log ('Search by AllStates')
         for(var attributename in usStates){
              
                start_zipcode = usStates[attributename]["zipmin"]
                end_zipcode = usStates[attributename]["zipmax"]
                for(var zip = start_zipcode; zip <= end_zipcode;zip++){
                  url_request= xad_node + "keyword=" + keyword + "&loc=" + zip
                  result = request(url_request,callback)
                }
         }
      }
      else
      {
        if (state.length>0){ //Search by City and state
          //console.log ('Search by City:' + location + ' and State:' + state)
          url_request=xad_node + "keyword=" + keyword + "&loc=" + location + "," + state
          result = request(url_request,callback)

        }else //Search by State
        {
          //console.log ('Search by State:' + location)

          for(var attributename in usStates){
              if (usStates[attributename]["abbreviation"]== location.toUpperCase()){
                start_zipcode = usStates[attributename]["zipmin"]
                end_zipcode = usStates[attributename]["zipmax"]
                for(var zip = start_zipcode; zip <= end_zipcode;zip++){
                  url_request= xad_node + "keyword="+ keyword + "&loc=" + zip
                  //console.log("URL:" + url_request)
                  result = request(url_request,callback)
                }

              }

          }

        }
      }

    }
}




function callback(error, response, body) {
       var options = {
                object: true,
          };

          //console.log ('Processing:' + location)
      if (!error && response.statusCode == 200) {
    
       json_result=JSON.parse(body);
       
         
        if (json_result.count == "0" ) { 
         // console.log ('0 Results');
            
          } else {
          //  console.log (json_result.count + ' Results');
            result=json_result.listing
            for (var k in result) {
              if (result[k])
               //call_logger.log_info(result[k]);
             
                  console.log(JSON.stringify(result[k], null, "\t"))
              }         
          }
      }
}

