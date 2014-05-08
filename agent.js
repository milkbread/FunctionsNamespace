(function() {
cGen.agent = function(initVals) {
	var self = this;

	function init() {
		console.log("Successfully initialized with: " + initVals)
	}

	self.evaluate = function() {
		console.log("I'm evaluating!")
	}

	init();

	return self;
};
})();