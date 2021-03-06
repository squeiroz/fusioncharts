// Require Chart modules
var Charts = require('fusioncharts/fusioncharts.charts');

// Require Fusion theme
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Initialize Charts with FusionCharts instance
Charts(FusionCharts);

// Initialize FusionTheme with FusionCharts instance
FusionTheme(FusionCharts);

var myApp = angular.module('myApp', ['ng-fusioncharts']);

myApp.controller('MyController', ['$scope', function($scope) {
    $scope.dataSource = {
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        "data": [
			{"label": "Venezuela",	"value": "290"}, 
            {"label": "Saudi",		"value": "260"}, 
            {"label": "Canada",		"value": "180"},
            {"label": "Iran",		"value": "140"}, 
            {"label": "Russia",		"value": "115"}, 
            {"label": "UAE",		"value": "100"}, 
            {"label": "US",			"value": "30" }, 
			{"label": "China",		"value": "30" }
        ]
    };
}]);
// Render
chartInstance.render()