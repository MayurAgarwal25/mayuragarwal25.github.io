/**
 * Created by mayuragarwal on 1/8/17.
 */

var app = angular.module('myProfile',["ngResource"])

.run(function ($rootScope) {
    $rootScope.windowHeight = $(window).height()+'px';
})