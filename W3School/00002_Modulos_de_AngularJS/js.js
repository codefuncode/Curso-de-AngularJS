var app = angular.module("myApp", []);

app.directive("w3TestDirective", function() {
  return {
    template: "<h1>¡Me hicieron en un constructor directivo!</h1>"
  };
});