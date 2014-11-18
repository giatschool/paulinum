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
                  7.6380595564842215,
                  51.96735345776896
                ],
                [
                  7.638086378574371,
                  51.96731049179144
                ],
                [
                  7.638263404369353,
                  51.967351805232106
                ],
                [
                  7.638225853443145,
                  51.96738320342154
                ],
                [
                  7.6380595564842215,
                  51.96735345776896
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
                  7.638303637504577,
                  51.967399728775575
                ],
                [
                  7.638319730758668,
                  51.96736006791568
                ],
                [
                  7.638488709926605,
                  51.96739477117001
                ],
                [
                  7.6384699344635,
                  51.967427821863424
                ],
                [
                  7.638303637504577,
                  51.967399728775575
                ]
              ]
            ]
          }
        }
        // ,
        // {
        //   "type": "Feature",
        //   "id":2,
        //   "properties": {
        //     "name":"Parkplatz 3",
        //     "value":0
        //   },
        //   "geometry": {
        //     "type": "Polygon",
        //     "coordinates": [
        //       [
        //         [
        //           7.618259489536286,
        //           51.959541235510294
        //         ],
        //         [
        //           7.618294358253478,
        //           51.95955611093146
        //         ],
        //         [
        //           7.618337273597716,
        //           51.95952470725875
        //         ],
        //         [
        //           7.618305087089539,
        //           51.95951148465315
        //         ],
        //         [
        //           7.618259489536286,
        //           51.959541235510294
        //         ]
        //       ]
        //     ]
        //   }
        // }
      ]
    }

    var lots = fbutil.syncArray('lots',{limit:10});
    lots.$watch(function(evt){
      var rec = lots.$getRecord(evt.key);
      if (rec.$id == '-JZmpJeUQ1oA4IM_YDe4') {
        $scope.parkinglots.features[0].properties.value = rec.value;
      } else if(rec.$id == '-JZmpMURo799IoF6d1Di') {
        $scope.parkinglots.features[1].properties.value = rec.value;
      }
      $scope.geojson = {
        data: $scope.parkinglots,
        style: getStyle
      }
    });

    angular.extend($scope, {
        center: {
          lat: 51.966845,
          lng: 7.638117,
          zoom: 18
        },
        defaults: {
          scrollWheelZoom: false
        }
    });

    function getStyle(feature) {
      console.log(feature.properties.value);
      var fillColor;
      if (feature.properties.value == 0) {
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
