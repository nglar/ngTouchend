# ngTouchend
A angular module to add directive `ng-touchend`.

# How to use it
You must include the ngTouchend dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouchend"]);
````
Then in your HTML you can use:
````
<div ng-touchend="someFunction($event)"></div>
````
