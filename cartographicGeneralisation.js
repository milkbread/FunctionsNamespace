// This is a basic IIFE (Immediately Invoked Function Expression)
// 	...basically, just an immediately invoked function
(function() {
	var cGen = {
		version:"0.0.0"
	};
	cGen.get = function() {
  		return "Successfully loaded cGen!";
  	};
  	cGen.print = function(value) {
  		console.log(value);
  	}

  	if (typeof define === "function" && define.amd) {
		define(cGen);
	} else if (typeof module === "object" && module.exports) {
		module.exports = cGen;
	} else {
		this.cGen = cGen;
	}
}) ();