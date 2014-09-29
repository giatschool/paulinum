"use strict";angular.module("paulinumApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase","firebase.utils","leaflet-directive"]),angular.module("paulinumApp").controller("MainCtrl",["$scope","fbutil",function(a,b){function c(a){console.log(a.properties.value);var b;return b=0==a.properties.value?"green":"red",{fillColor:b,weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7}}a.parkinglots={type:"FeatureCollection",features:[{type:"Feature",id:0,properties:{name:"Parkplatz 1",value:0},geometry:{type:"Polygon",coordinates:[[[7.618117332458496,51.9594899979107],[7.618160247802734,51.95950652617502],[7.618205845355987,51.95946520550276],[7.618165612220763,51.95945528853576],[7.618117332458496,51.9594899979107]]]}},{type:"Feature",id:1,properties:{name:"Parkplatz 2",value:0},geometry:{type:"Polygon",coordinates:[[[7.618187069892883,51.95951479030492],[7.618229985237122,51.95953131856011],[7.61827826499939,51.95949330356405],[7.618238031864166,51.95947842812205],[7.618187069892883,51.95951479030492]]]}},{type:"Feature",id:2,properties:{name:"Parkplatz 3",value:0},geometry:{type:"Polygon",coordinates:[[[7.618259489536286,51.959541235510294],[7.618294358253478,51.95955611093146],[7.618337273597716,51.95952470725875],[7.618305087089539,51.95951148465315],[7.618259489536286,51.959541235510294]]]}}]};var d=b.syncArray("lots",{limit:10});d.$watch(function(b){var e=d.$getRecord(b.key);"-JXn8ZwWbmTMCiPEVPxX"==e.$id?a.parkinglots.features[0].properties.value=e.parkplatz1:"-JXn8bYVAViWgRpTZo10"==e.$id?a.parkinglots.features[1].properties.value=e.parkplatz2:"-JXn8e1FkBSk15kDi2MQ"==e.$id&&(a.parkinglots.features[2].properties.value=e.parkplatz3),a.geojson={data:a.parkinglots,style:c}}),angular.extend(a,{center:{lat:51.95950652617502,lng:7.618216574192048,zoom:18},defaults:{scrollWheelZoom:!1}})}]),angular.module("firebase.config",[]).constant("FBURL","https://paulinum.firebaseio.com"),angular.module("firebase.utils",["firebase","firebase.config"]).factory("fbutil",["$window","FBURL","$firebase",function(a,b,c){function d(a){for(var b=0;b<a.length;b++)if(angular.isArray(a[b]))a[b]=d(a[b]);else if("string"!=typeof a[b])throw new Error("Argument "+b+" to firebaseRef is not a string: "+a[b]);return a.join("/")}function e(){var c=new a.Firebase(b),e=Array.prototype.slice.call(arguments);return e.length&&(c=c.child(d(e))),c}function f(a,b){var d=e(a);return b=angular.extend({},b),angular.forEach(["limit","startAt","endAt"],function(a){if(b.hasOwnProperty(a)){var c=b[a];d=d[a].apply(d,angular.isArray(c)?c:[c]),delete b[a]}}),c(d)}return{syncObject:function(){return f.apply(null,arguments).$asObject()},syncArray:function(){return f.apply(null,arguments).$asArray()},ref:e}}]),angular.module("paulinumApp").filter("reverse",function(){return function(a){return angular.isArray(a)?a.slice().reverse():[]}}),angular.module("paulinumApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/chat",{templateUrl:"views/chat.html",controller:"ChatCtrl"}).when("/chat",{templateUrl:"views/chat.html",controller:"ChatCtrl"}).otherwise({redirectTo:"/"})}]);