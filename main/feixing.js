function feixing() {
    clearAll();

    isPoint = true;
    isDistance = false;
    isHeight = false;
    isAraa = false;
    isAzimuth = false;
    isPointLabel = false;
    isPolylineLabel = false;
    isPolygonLabel = false;

    if (isPoint) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(canvas);

        //左击
        handler.setInputAction(function (leftclick) {
            if (isPoint) {
                var pickedOject = scene.pick(leftclick.position);
                if (pickedOject != undefined) {
                    var position = scene.pickPosition(leftclick.position);
                    if (position != undefined) {
                        var cartesian3 = Cesium.Cartographic.fromCartesian(position);                        //笛卡尔XYZ
                        var longitude = Cesium.Math.toDegrees(cartesian3.longitude);                         //经度
                        var latitude = Cesium.Math.toDegrees(cartesian3.latitude);                           //纬度
                        var height = cartesian3.height;                                                      //高度

                        if (height > 0) {
                            if (Cesium.defined(position)) {
                                clearAll();

                                viewer.entities.add({
                                    name: "ptMeasue" + NewGuid(),
                                    position: position,
                                    billboard: {
                                        image: 'Cesium/Assets/Textures/maki/marker1.png',
                                        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                                        width: 16,
                                        height: 16,
                                    }
                                });

                                viewer.entities.add({
                                    name: "ptlMeasue" + NewGuid(),
                                    position: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
                                    label: {
                                        text: '测试(' + longitude.toFixed(2) + ',' + latitude.toFixed(2) + ',' + height.toFixed(2) + ')',
                                        font: '20px Times New Roman',
                                        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                                        verticalOrigin: Cesium.VerticalOrigin.CENTER,
                                        pixelOffset: new Cesium.Cartesian2(0.0, -32),
                                    }
                                });

                                //针对移动设备
                                if (isMobile.any()) {
                                    if (handler != undefined) {
                                        handler.destroy();
                                    }
                                }

                            }

                        }
                    }

                }
            }

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

};
//航线
function hangxing() {
    clearAll();
    var points = [];
    var hangxan = [];
    isDistance = true;

    if (isDistance) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(canvas);

        //左击
        handler.setInputAction(function (leftclik) {
            if (isRedo) {
                clearAll();
                isRedo = false;
            }

            var pickedOject = scene.pick(leftclik.position);
            if (pickedOject != undefined) {
                var position = scene.pickPosition(leftclik.position);
                
                var position2 = scene.pickPosition(leftclik.position);
                position2.x = position2.x + 100;
                if (position != undefined) {
                    if (Cesium.defined(position)) {
                        var cartesian3 = new Cesium.Cartesian3(position.x, position.y, position.z);//原始点
                        var cartesian3s = new Cesium.Cartesian3(position2.x, position2.y, position2.z);//测试点
                        points.push(cartesian3);
                        hangxan.push(cartesian3s);
                        viewer.entities.add({
                            name: "ptMeasue" + NewGuid(),
                            position: position,
                            point: {
                                pixelSize: 8,
                                color: Cesium.Color.YELLOW
                            }
                        });
                        viewer.entities.add({
                            name: "ptMeasue2" + NewGuid(),
                            position: position2,
                            point: {
                                pixelSize: 8,
                                color: Cesium.Color.AQUAMARINE
                            }
                        });

                        if (points.length > 1) {
                            var point = points[points.length - 2];
                            viewer.entities.add({
                                name: "plMeasue" + NewGuid(),
                                polyline: {
                                    positions: [point, position],
                                    width: 2,
                                    material: Cesium.Color.AQUAMARINE
                                }
                            });
                        }
                        if (hangxan.length > 1) {//航线数组
                            var point = hangxan[hangxan.length - 2];
                            viewer.entities.add({
                                name: "plMeasue" + NewGuid(),
                                polyline: {
                                    positions: [point, position2],
                                    width: 5,
                                    material: Cesium.Color.YELLOW
                                }
                            });
                        }

                    }

                }

            }

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);


        if (isMobile.any()) {
            //双指
            handler.setInputAction(function (pinch) {
                if (points.length > 1) {
                    var sum = 0;
                    for (var i = 0; i < points.length - 1; i++) {
                        var point1 = points[i];
                        var point2 = points[i + 1];

                        var distance = Cesium.Cartesian3.distance(point1, point2)
                        if (distance == NaN) {
                            sum = 0;
                            break;
                        }
                        else {
                            sum += distance;
                        }
                    }

                    viewer.entities.add({
                        name: "pllMeasue" + NewGuid(),
                        position: points[points.length - 1],
                        label: {
                            text: '长度：' + sum.toFixed(2) + '米',
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -32),
                        }
                    });

                    if (handler != undefined) {
                        handler.destroy();
                    }

                    isRedo = true;
                }

            }, Cesium.ScreenSpaceEventType.PINCH_START);

        }
        else {
            //右击
            handler.setInputAction(function (rightclik) {
                if (points.length > 1) {
                    var sum = 0;
                    for (var i = 0; i < points.length - 1; i++) {
                        var point1 = points[i];
                        var point2 = points[i + 1];

                        var distance = Cesium.Cartesian3.distance(point1, point2)
                        if (distance == NaN) {
                            sum = 0;
                            break;
                        }
                        else {
                            sum += distance;
                        }
                    }

                    viewer.entities.add({
                        name: "pllMeasue" + NewGuid(),
                        position: points[points.length - 1],
                        label: {
                            text: '长度：' + sum.toFixed(2) + '米',
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -32),
                        }
                    });

                    isRedo = true;
                }

            }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        }


    }

};