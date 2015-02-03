"use strict";

angular.module("ngTouchend", []).directive("ngTouchend", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      $element.bind('touchend', onTouchEnd);
      
      function onTouchEnd(event) {
        var method = '$scope.' + $element.context.getAttribute('ng-touchend');
        $scope.$apply(function () {
          eval(method);
        });
      };
    }
  };
});
