/// <reference path="angular.min.js" />

myApp.filter("gender", function(){
    return function(gender){
        switch(gender){
            case "Male":
                return 1;
            case "Female":
                return 2;
        }
    }
});