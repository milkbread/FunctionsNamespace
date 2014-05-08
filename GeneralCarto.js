!function() {
	var GC = {
		version:"0.0.0"
	};
	GC.get = function() {
  		return "It worked";
  	};
  	GC.print = function(value) {
  		console.log(value);
  	}

  	if (typeof define === "function" && define.amd) {
		define(GC);
	} else if (typeof module === "object" && module.exports) {
		module.exports = GC;
	} else {
		this.GC = GC;
	}
}();