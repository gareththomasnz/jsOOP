
function addAnything(){
  var result = 0;
  var len = arguments.length;
  for(i=0; i<len; i++){
        result += arguments[i];
  }
  return result;
}

console.log(addAnything(100, 100, 100));

var today = new Date();

console.log(today.getFullYear());

console.log(moment());

todayMoment = moment(today);

console.log(todayMoment.format("MMM Do YYYY"));

