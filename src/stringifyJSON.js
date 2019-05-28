// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var sub;
  if(typeof obj === 'string') {
    sub = obj;
  }

  if(typeof obj === 'number' || typeof obj === 'boolean') {
    sub = '' + obj;
  }

  if(obj == undefined || obj == null) {
    sub = null;
  }
  
  if(Array.isArray(obj)) {
    var sub = '[';
    for(var i of obj) {
      sub += stringifyJSON(i) + ',';
    }
    sub += ']';    
  } 
  
  if(typeof obj === 'object') {
    var sub = '{';
    for(var i in obj) {
      if(i === null) {
        return null;
      }
      sub += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',';
    }
    sub += '}';
  }
  return sub;
};
