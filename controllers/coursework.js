/**
 * Created by mayuragarwal on 1/8/17.
 */
	

var app = angular.module('myProfile')


app.controller('coursework', ['courseworkCollegeServices', function (courseworkCollegeServices) {
    var course = this;
	
	course.college = courseworkCollegeServices;
}]);

app.factory('courseworkCollegeServices', function () {
    return [
        {name: "Advance Data Structures & Algorithms"},
        {name: "Operating Systems"},
        {name: "Linux & Shell Programming"},
        {name: "Database Management System"},
        {name: "Software Engineering"},
        {name: "Object Oriented Programming"}
    ]
});
