app.controller('myCtrl', function($scope, $http, $timeout, config) {
	$scope.firstName = config.firstName;
	$scope.lastName = config.lastName;

	console.log(config.firstName);

	$scope.homeSlider = true;

	var slidesInSlideshow = 4;
	var slidesTimeIntervalInMs = 3000;

	$scope.konami = [ {
		name : "Konami",
		link : "#",
		subtree : [ {
			name : "Metal Gear",
			link : "#",
			subtree : [ {
				name : "Metal Gear",
				link : "metal-gear"
			}, {
				name : "Metal Gear 2: Solid Snake",
				link : "metal-gear2"
			}, {
				name : "Metal Gear Solid: The Twin Snakes",
				link : "metal-gear-solid"
			} ]
		} ]
	} ];

	$scope.trees = [ {
		name : "Konami",
		link : "#",
		subtree : [ {
			name : "Metal Gear",
			link : "#",
			subtree : [ {
				name : "Metal Gear",
				link : "metal-gear"
			}, {
				name : "Metal Gear 2: Solid Snake",
				link : "#"
			}, {
				name : "Metal Gear Solid: The Twin Snakes",
				link : "#"
			} ]
		}, {
			name : "divider",
			link : "#"
		}, {
			name : "Castlevania",
			link : "#",
			subtree : [ {

			} ]
		} ]
	} ]

	$scope.slideshow = 1;
	var slideTimer = $timeout(function interval() {
		$scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
		slideTimer = $timeout(interval, slidesTimeIntervalInMs);
	}, slidesTimeIntervalInMs);

});

app.controller('indexCtrl', function($scope, $http, config) {

});

app.controller('aboutUsCtrl', function($scope, $http, config) {
	console.log('Hello !!');
	$scope.homeSlider = false;
});

app.controller('productCtrl', function($scope, $http, config) {
	console.log('products !!');

	$scope.homeSlider = false;

	$scope.selectedProduct = "Silk Product";

	$scope.silkProduct = function() {
		console.log('silk');
		$scope.selectedProduct = "Silk Product"
	}

	$scope.cottonProduct = function() {
		console.log('cotton');
		$scope.selectedProduct = "Cotton Product";
	}

	$scope.groups = [ {
		title : 'Cotton Product',
		content : 'Cotton - 1'
	}, {
		title : 'Silk Product',
		content : 'Silk - 1'
	}, {
		title : 'Denim Product',
		content : 'Demin - 1'
	}, {
		title : 'Febric Product',
		content : 'Febric - 1'
	}, {
		title : 'Other Product',
		content : 'Other - 1'
	} ];

	$scope.items = [ 'Item 1', 'Item 2', 'Item 3' ];

	$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	};

	$scope.status = {
		isCustomHeaderOpen : false,
		isFirstOpen : true,
		isFirstDisabled : false
	};

});

app.controller('pagination', function($scope, $http) {
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1
});