/**
 * Created by mayuragarwal on 1/8/17.
 */

var app = angular.module('myProfile')

app.controller('sendEmail', ['sendEmailService', function (sendEmailService) {
    var sendEmail = this;
    sendEmail.disable = false;
    sendEmail.submit = function () {
        var promise = sendEmailService.save({}, {
            form: sendEmail.from,
            to: 'mayuragarwal25@gmail.com',
            subject: 'Message from '+ sendEmail.sender,
            text: sendEmail.message
        }).$promise;
		sendEmail.disable = true;
        promise.then(function (response) {
            sendEmail.disable = false;
            if(response.success) {
                sendEmail.from = "";
                sendEmail.sender = "";
                sendEmail.message = "";
                Materialize.toast('Great!! I\'ll get back to you soon', 4000, 'rounded');
            }
            else {
                Materialize.toast('Sorry! Try sending message again', 4000, 'rounded');
            }
        })
    }
}]);