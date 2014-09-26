'use strict';

/**
 * @ngdoc function
 * @name paulinumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paulinumApp
 */
angular.module('paulinumApp')
  .controller('MainCtrl', function ($scope, fbutil) {

    $scope.parkinglotsLive = fbutil.syncObject('parkinglots', {limit: 10}).$watch(function(data){
      console.log(data);
    });

    $scope.parkinglots = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "id":0,
          "properties": {
            "name":"Parkplatz 1",
            "value":0
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  7.618117332458496,
                  51.9594899979107
                ],
                [
                  7.618160247802734,
                  51.95950652617502
                ],
                [
                  7.618205845355987,
                  51.95946520550276
                ],
                [
                  7.618165612220763,
                  51.95945528853576
                ],
                [
                  7.618117332458496,
                  51.9594899979107
                ]
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "id":1,
          "properties": {
            "name":"Parkplatz 2",
            "value":0
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  7.618187069892883,
                  51.95951479030492
                ],
                [
                  7.618229985237122,
                  51.95953131856011
                ],
                [
                  7.61827826499939,
                  51.95949330356405
                ],
                [
                  7.618238031864166,
                  51.95947842812205
                ],
                [
                  7.618187069892883,
                  51.95951479030492
                ]
              ]
            ]
          }
        },
        {
          "type": "Feature",
          "id":2,
          "properties": {
            "name":"Parkplatz 3",
            "value":0
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  7.618259489536286,
                  51.959541235510294
                ],
                [
                  7.618294358253478,
                  51.95955611093146
                ],
                [
                  7.618337273597716,
                  51.95952470725875
                ],
                [
                  7.618305087089539,
                  51.95951148465315
                ],
                [
                  7.618259489536286,
                  51.959541235510294
                ]
              ]
            ]
          }
        }
      ]
    }

    angular.extend($scope, {
        center: {
          lat: 51.95950652617502,
          lng: 7.618216574192048,
          zoom: 18
        },
        defaults: {
          scrollWheelZoom: false
        },
        geojson: {
          data: $scope.parkinglots,
          style: getStyle
        }
    });

    function getStyle(feature) {
      var fillColor;
      if (feature.properties.value === 0) {
        fillColor = 'green';
      } else{
        fillColor = 'red';
      };
      return {
        fillColor: fillColor,
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      }
    }
  });
