//Custom table directive
serviseApp.directive("customeTable", function(){
	return {
	link: function (scope, element, attrs) {    
		scope.data = scope[attrs["customeTable"]];
		var options = attrs["options"];

	    //if is checkbox option.
	    if(options.indexOf("checkbox") != -1){
	    	scope.checkbox = true;
	    	var length = scope.data.data.length;
	    	scope.data.check = [];
	    	for (var i=0; i<scope.data.data.length; i++){
	    		scope.data.check[i] = false;
    		};
    		var tagleChack = scope.data.check;
      		//function to choose all checkbox allCheck() 
      		scope.allCheck = function($event){      
      			var allVal = angular.element(event.currentTarget).prop('checked');
      			angular.forEach(tagleChack, function(item, i, arr){
      				scope.data.check[i] = allVal;
      			});  
      		};  
    	}; 
  	},
  	restrict: "A",
  	templateUrl: "/blocks/templates/table.html"
  }
});