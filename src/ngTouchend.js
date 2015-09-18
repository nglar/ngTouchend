"use strict";

angular.module("ngTouchend", []).directive("ngTouchend", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchend', onTouchEnd);
      
      function onTouchEnd(event) {
        var method = $element.attr('ng-touchend');
        $scope.$event = event;
        $scope.$apply(method);
      };
    }
  };
});
