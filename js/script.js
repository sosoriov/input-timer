
/* ------------------------------------------------------- 

* Filename:     AngularJS Dynamic Form Fields
* Website:      http://www.shanidkv.com
* Description:  Shanidkv AngularJS blog
* Author:       Shanid KV shanidkannur@gmail.com

---------------------------------------------------------*/

var app = angular.module('shanidkvApp', []);

  app.controller('MainCtrl', function($scope, $filter) {
  $scope.dates = [
    {month:"December", dayName: "Tuesday", day: "29"},
    {month:"December", dayName: "Wednesday", day: "30"},
    {month:"December", dayName: "Thursday", day: "31"},
    {month:"January", dayName: "Friday", day: "01"},
    {month:"January", dayName: "Saturday", day: "02"},
    {month:"January", dayName: "Sunday", day: "03"}
  ];

  $scope.projects = [
    {name: "Project 1", imdcNumber: "5538", dates: [
    {month:"December", dayName: "Tuesday", day: "29"},
    {month:"December", dayName: "Wednesday", day: "30"},
    {month:"December", dayName: "Thursday", day: "31"},
    {month:"January", dayName: "Friday", day: "01"},
    {month:"January", dayName: "Saturday", day: "02"},
    {month:"January", dayName: "Sunday", day: "03"}
  ]},
    {name: "Project TRES", imdcNumber: "0999", dates: [
    {month:"December", dayName: "Tuesday", day: "29"},
    {month:"December", dayName: "Wednesday", day: "30"},
    {month:"December", dayName: "Thursday", day: "31"},
    {month:"January", dayName: "Friday", day: "01"},
    {month:"January", dayName: "Saturday", day: "02"},
    {month:"January", dayName: "Sunday", day: "03"}
  ]},
    {name: "Rio Bogota", imdcNumber: "H555", dates: [
    {month:"December", dayName: "Tuesday", day: "29"},
    {month:"December", dayName: "Wednesday", day: "30"},
    {month:"December", dayName: "Thursday", day: "31"},
    {month:"January", dayName: "Friday", day: "01"},
    {month:"January", dayName: "Saturday", day: "02"},
    {month:"January", dayName: "Sunday", day: "03"}
  ]},
    {name: "PIM", imdcNumber: "1852", dates: [
    {month:"December", dayName: "Tuesday", day: "29"},
    {month:"December", dayName: "Wednesday", day: "30"},
    {month:"December", dayName: "Thursday", day: "31"},
    {month:"January", dayName: "Friday", day: "01"},
    {month:"January", dayName: "Saturday", day: "02"},
    {month:"January", dayName: "Sunday", day: "03"}
  ]}
  ];

  $scope.choices = [];
  
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
    
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };

  function getChoiceId() {
    angular.forEach($scope.projects, function(project, key) {
      angular.forEach($scope.dates, function(date, dateKey) {
        var customId = project["imdcNumber"] + "-" + $filter('limitTo')(date["month"], 3) + "-" + $filter('limitTo')(date["dayName"], 3) + "-" + date["day"];
        console.log(customId);
        $scope.choices.push({'id':'choice'+customId});
        // $scope.projects[key]["customId"] = customId;

      });
    });
  }

  // getChoiceId();
  
});
