'use strict';

describe('ngTouchend', function () {

	var element;

	beforeEach(function () {
		module('ngTouchend');
	});

	it('should get called on touchend', inject(function($rootScope, $compile) {
		element =  $compile('<div ng-touchend= "ended  = true"></div>')($rootScope);
		$rootScope.$digest();
		expect($rootScope.ended).toBeUndefined();
		element.triggerHandler('touchstart');
		element.triggerHandler('touchend');
		expect($rootScope.ended).toEqual(true);
	}));
});
