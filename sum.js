function sum(a, b){
  return new Promise(
    function(resolve) {
      return setTimeout(function(){ resolve(a + b)}, 5000);
  })
}

module.exports = sum;