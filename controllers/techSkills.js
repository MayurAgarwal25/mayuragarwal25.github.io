/**
 * Created by mayuragarwal on 1/8/17.
 */

var app = angular.module('myProfile')

app.controller('techSkills',['techSkillsFrameworks', 'techSkillsOtherFrameworks', 'techSkillsLanguages', function (techSkillsFrameworks, techSkillsOtherFrameworks, techSkillsLanguages) {
    var tech = this;

    tech.frameworks = techSkillsFrameworks;
    tech.otherFrameworks = techSkillsOtherFrameworks;
    tech.languages = techSkillsLanguages;
}]);

app.factory('techSkillsFrameworks',function () {
    return [
        {
            name: "Kony",
            image: "resources/technical-skills/kony-logo.png",
            info: "Kony is the fastest growing, cloud-based enterprise mobility solutions company and an industry leader among mobile application development platform (MADP) providers. Kony empowers organizations to compete in mobile time by rapidly delivering, ready-to-run, multi-edge mobile apps across the broadest array of devices and systems, today and in the future, with a lower total cost of ownership.",
            alt: "kony logo"
        },
		{
            name: "Angular 2",
            image: "resources/technical-skills/angularjs-logo.png",
            info: "It is a structural javascript framework for dynamic web apps. It made making web apps easy and fun for me!!",
            alt: "angularjs logo"
        },
        {
            name: "Node.js",
            image: "resources/technical-skills/nodejs-logo.jpg",
            info: "It is a JavaScript runtime built on Chrome's V8 JavaScript engine. I used it with Express.js framework to make backend servers and REST APIs.",
            alt: "node.js logo"
        },
        {
            name: "Mongo DB",
            image: "resources/technical-skills/mongodb-logo.png",
            info: "MongoDB is an open source database that uses a document-oriented data model or simply JSON data [NoSQL].",
            alt: "mongodb logo"
        },
        {
            name: "Firebase",
            image: "resources/technical-skills/firebase-logo.png",
            info: "It has Real-Time database over the cloud, FCM or Push notifications, O-Auth, hosting and much more. I used it with web apps in Node and Angular.",
            alt: "firebase logo"
        },
        {
            name: "Android",
            image: "resources/technical-skills/android-logo.jpg",
            info: "Develop native apps for Android OS in Java using Android SDK.",
            alt: "android logo"
        },
        {
            name: "Oracle SQL 11g",
            image: "resources/technical-skills/oracle11g-logo.jpg",
            info: "It is a database made by Oracle for production level performance and reliability for SQL.",
            alt: "oracle sql 11g logo"
        }
    ];
});

app.factory('techSkillsOtherFrameworks',function () {
    return [
        {
            name: "Git",
            link: "https://git-scm.com/"
        },
        {
            name: "SQLite",
            link: "https://developer.android.com/training/basics/data-storage/databases.html"
        }
    ];
});

app.factory('techSkillsLanguages',function () {
    return [
        {
            name: "C",
            category: "expert",
            link: "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
            name: "C++",
            category: "expert",
            link: "https://en.wikipedia.org/wiki/C%2B%2B"
        },
		{
            name: "Python",
            category: "intermediate",
            link: "https://www.python.org/"
        },
        {
            name: "Javascript",
            category: "expert",
            link: "http://www.w3schools.com/js/"
        },
        {
            name: "Javascript ES6",
            category: "intermediate",
            link: "http://es6-features.org/"
        },
        {
            name: "Java SE",
            category: "expert",
            link: "http://www.oracle.com/technetwork/java/javase/overview/index.html"
        },
        {
            name: "PHP",
            category: "intermediate",
            link: "https://www.w3schools.com/php/"
        },
        {
            name: "Java EE",
            category: "intermediate",
            link: "http://www.oracle.com/technetwork/java/javaee/overview/index.html"
        },
        {
            name: "Shell Script",
            category: "novice",
            link: "http://www.shellscript.sh/"
        }
    ];
});