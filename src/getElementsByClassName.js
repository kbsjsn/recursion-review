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

  var recursiveFun = function(elements) {
    for(var i of elements) {
      if(i.classList !== undefined && i.classList.contains(className)) {
        resultElements.push(i);
        recursiveFun(i.childNodes);
      }
      if(i.classList !== undefined) {
        recursiveFun(i.childNodes);
      }
    }
  };
  recursiveFun(elementsArray);
  return resultElements;
};
