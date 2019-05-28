// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var resultElements = [];
  var elementsArray = document.body.childNodes;
  for(var i of elementsArray) {
    if(i !== undefined && i.classList.contains(className)) {
      resultElements.push(i);
    }
  }
  return resultElements;
};
