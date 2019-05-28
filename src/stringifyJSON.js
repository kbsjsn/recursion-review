// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj typeof String) {
    return obj;
  }

  if(obj typeof Number || obj typeof Boolean) {
    return '' + obj;
  }

  if(obj == undefined) {
    return null;
  }
  
  if(obj typeof Array) {
    var sub = '[';
    for(var i of obj) {
      sub += stringifyJSON(i) + ',';
    }
    sub += ']';
    return sub;
    
  } else if(obj typeof Object) {
    var sub = '{';
    for(var i in obj) {
      sub += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',';
    }
    sub += '}';
    return sub;
  }
};
