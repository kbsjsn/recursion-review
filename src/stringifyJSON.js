// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  if(Array.isArray(obj) && obj.length === 0) {
    return '[]';
  }

  if(obj == undefined || obj == null) {
    return'null';
  }

  
  if(Array.isArray(obj)) {
    var sub = '[';
    for(var i of obj) {
      sub += stringifyJSON(i) + ',';
    }
    sub = sub.slice(0, sub.length - 1);
    sub += ']';   
    return sub;
  } 
  
  if(typeof obj === 'object') {
    var sub = '{';
    for(var i in obj) {
      if(typeof obj[i] === 'function' || obj[i] === undefined) {
        sub = '';
      } else {
          sub += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',';
      }
    }
    sub = sub.slice(0, sub.length - 1);
    sub += '}';
    if (sub === '}') {    //result of an empty object
      sub = '{}';
    }
    return sub;
  }
};
