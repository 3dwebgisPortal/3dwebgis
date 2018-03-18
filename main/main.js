//显示/隐藏功能面板
var isOpenMenu = false;
function openMenu() {
    isOpenMenu = !isOpenMenu;

    if (isOpenMenu) {
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("openmenu").style.left = "300px";
        document.getElementById("logo").style.left = "300px";
        document.getElementById("openmenu").innerHTML = "◀";
        document.getElementById("openmenu").title = "隐藏功能面板";
    }
    else {
        document.getElementById("menu").style.visibility = "hidden";
        document.getElementById("openmenu").style.left = "0px";
        document.getElementById("logo").style.left = "0px";
        document.getElementById("openmenu").innerHTML = "▶";
        document.getElementById("openmenu").title = "显示功能面板";
    }

}

//显示/隐藏鹰眼视图
var isOpenOverview = false;
function openOverview() {
    isOpenOverview = !isOpenOverview;

    if (isOpenOverview) {
        document.getElementById("overview").style.visibility = "visible";
        document.getElementById("openoverview").style.bottom = "300px";
        document.getElementById("openoverview").innerHTML = "▼";
        document.getElementById("openoverview").title = "隐藏鹰眼视图";
    }
    else {
        document.getElementById("overview").style.visibility = "hidden";
        document.getElementById("openoverview").style.bottom = "0px";
        document.getElementById("openoverview").innerHTML = "▲";
        document.getElementById("openoverview").title = "显示鹰眼视图";
    }

}


//地图集
var imageryViewModels = [];
//天地图全球矢量地图服务
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: '天地图矢量',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/tiandituVector.png'),
    tooltip: '天地图全球矢量地图服务',
    creationFunction: function () {
        var imageryProviders = [];
        //天地图矢量
        imageryProviders.push(new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
        }));
        //天地图矢量中文标注
        imageryProviders.push(new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
            layer: "tdtAnnoLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible"
        }));

        return imageryProviders;
    }
}));
//天地图全球影像地图服务
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: '天地图影像',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/tiandituImage.png'),
    tooltip: '天地图全球影像地图服务',
    creationFunction: function () {
        var imageryProviders = [];
        //天地图影像
        imageryProviders.push(new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
            layer: "tdtBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
        }));
        //天地图影像中文标注
        imageryProviders.push(new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
            layer: "tdtAnnoLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
        }));

        return imageryProviders;
    }
}));

////重庆影像
//imageryViewModels.push(new Cesium.ProviderViewModel({
//    name: '重庆影像',
//    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/cqImage.png'),
//    creationFunction: function () {
//        return new Cesium.ArcGisMapServerImageryProvider({
//            url: 'http://www.digitalcq.com:80/RemoteRest/services/CQMap_IMG/MapServer',
//            enablePickFeatures: false
//        });
//    }
//}));

//Bing
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'Bing 影像',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/bingAerialLabels.png'),
    creationFunction: function () {
        return new Cesium.BingMapsImageryProvider({
            url: 'https://dev.virtualearth.net',
            mapStyle: Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        });
    }
}));
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'Bing 街道',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/bingRoads.png'),
    creationFunction: function () {
        return new Cesium.BingMapsImageryProvider({
            url: 'https://dev.virtualearth.net',
            mapStyle: Cesium.BingMapsStyle.ROAD
        });
    }
}));

//Mapbox
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'Mapbox 卫星',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/mapboxSatellite.png'),
    creationFunction: function () {
        return new Cesium.MapboxImageryProvider({
            mapId: 'mapbox.satellite'
        });
    }
}));
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'Mapbox 街道',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/mapboxTerrain.png'),
    creationFunction: function () {
        return new Cesium.MapboxImageryProvider({
            mapId: 'mapbox.streets'
        });
    }
}));
//imageryViewModels.push(new Cesium.ProviderViewModel({
//    name: 'Mapbox Streets Classic',
//    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/mapboxStreets.png'),
//    creationFunction: function () {
//        return new Cesium.MapboxImageryProvider({
//            mapId: 'mapbox.streets-basic'
//        });
//    }
//}));

//ESRI
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'ESRI 影像',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/esriWorldImagery.png'),
    creationFunction: function () {
        return new Cesium.ArcGisMapServerImageryProvider({
            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
            enablePickFeatures: false
        });
    }
}));
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'ESRI 街道',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/esriWorldStreetMap.png'),
    creationFunction: function () {
        return new Cesium.ArcGisMapServerImageryProvider({
            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
            enablePickFeatures: false
        });
    }
}));
//imageryViewModels.push(new Cesium.ProviderViewModel({
//    name: 'ESRI National Geographic',
//    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/esriNationalGeographic.png'),
//    creationFunction: function () {
//        return new Cesium.ArcGisMapServerImageryProvider({
//            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/',
//            enablePickFeatures: false
//        });
//    }
//}));

//OSM
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'OSM',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/openStreetMap.png'),
    creationFunction: function () {
        return Cesium.createOpenStreetMapImageryProvider({
            url: 'https://a.tile.openstreetmap.org/'
        });
    }
}));

////Stamen
//imageryViewModels.push(new Cesium.ProviderViewModel({
//    name: 'Stamen Watercolor',
//    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/stamenWatercolor.png'),
//    creationFunction: function () {
//        return Cesium.createOpenStreetMapImageryProvider({
//            url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/',
//            credit: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.'
//        });
//    }
//}));
//imageryViewModels.push(new Cesium.ProviderViewModel({
//    name: 'Stamen Toner',
//    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/stamenToner.png'),
//    creationFunction: function () {
//        return Cesium.createOpenStreetMapImageryProvider({
//            url: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
//            credit: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.'
//        });
//    }
//}));

//夜光
imageryViewModels.push(new Cesium.ProviderViewModel({
    name: 'BlackMarble',
    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/blackMarble.png'),
    creationFunction: function () {
        return Cesium.createTileMapServiceImageryProvider({
            url: 'https://cesiumjs.org/blackmarble',
            flipXY: true,
            credit: 'Black Marble imagery courtesy NASA Earth Observatory'
        });
    }
}));

//imageryViewModels.push(new Cesium.ProviderViewModel({
//    name: 'Natural Earth\u00a0II',
//    iconUrl: Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/naturalEarthII.png'),
//    creationFunction: function () {
//        return Cesium.createTileMapServiceImageryProvider({
//            url: buildModuleUrl('Assets/Textures/NaturalEarthII')
//        });
//    }
//}));


//默认地形
var terrainModels = Cesium.createDefaultTerrainProviderViewModels();
terrainModels[0].name = "WGS84 椭球体";
terrainModels[0].tooltip = "";
terrainModels[1].name = "STK 世界地形";
terrainModels[1].tooltip = "";

//创建Viewer
var viewer = new Cesium.Viewer("cesiumContainer",
    {
        animation: false,                                   //动画
        baseLayerPicker: true,                              //地图
        fullscreenButton: true,                             //全屏
        vrButton: false,                                    //VR
        geocoder: false,                                    //地理编码
        infoBox: true,
        sceneModePicker: false,                             //模式（3D、2.5D、2D）
        selectionIndicator: true,
        timeline: false,                                    //时间线
        navigationHelpButton: false,                        //导航提示
        navigationInstructionsInitiallyVisible: false,
        imageryProviderViewModels: imageryViewModels,
        selectedImageryProviderViewModel: imageryViewModels[2],
        terrainProviderViewModels: terrainModels,
        selectedTerrainProviderViewModel: terrainModels[1],
    }
    );
viewer._cesiumWidget._creditContainer.style.display = "none";           //隐藏版权信息
viewer.scene.globe.enableLighting = false;                              //日夜区分
viewer.scene.globe.depthTestAgainstTerrain = false;
viewer.extend(Cesium.viewerCesiumNavigationMixin, {});                  //扩展导航功能

//初始范围
var boundingSphere = new Cesium.BoundingSphere(Cesium.Cartesian3.fromDegrees(107.1379769, 28.93959871, 1541.539533), 800);
//home按钮功能
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (commandInfo) {
    viewer.camera.flyToBoundingSphere(boundingSphere);
    commandInfo.cancel = true;
});
viewer.homeButton.viewModel.tooltip = "初始视图";
viewer.baseLayerPicker.viewModel.buttonTooltip = "地图及地形";
//设置初始位置
viewer.camera.flyToBoundingSphere(boundingSphere, { duration: 0 });


//移动端判断
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

//添加数据
var tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: './data/zzy/Production.json',
    maximumScreenSpaceError: isMobile.any() ? 1 : 1,
    maximumNumberOfLoadedTiles: isMobile.any() ? 1000 : 1000
}));

//创建鹰眼
var overview = new Cesium.Viewer("overview",
    {
        animation: false,                                   //动画
        baseLayerPicker: false,                             //地图
        fullscreenButton: false,                            //全屏
        vrButton: false,                                    //VR
        geocoder: false,                                    //地理编码
        infoBox: false,
        homeButton: false,
        sceneModePicker: false,                             //模式（3D、2.5D、2D）
        sceneMode: Cesium.SceneMode.SCENE2D,
        selectionIndicator: false,
        timeline: false,                                    //时间线
        navigationHelpButton: false,                        //导航提示
        navigationInstructionsInitiallyVisible: false,
        imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
            layer: "tdtVecBasicLayer",
            style: "default",
            format: "image/jpeg",
            tileMatrixSetID: "GoogleMapsCompatible",
        })
    }
    );
overview.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
    url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
    layer: "tdtAnnoLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible"
}));
//隐藏版权信息
overview._cesiumWidget._creditContainer.style.display = "none";


/*定位*/
var isddzb = document.getElementById("ddzb");
var ispmzb = document.getElementById("pmzb");
var isgc = document.getElementById("gc");

var vddzbL = document.getElementById("ddzbL");
var vddzbB = document.getElementById("ddzbB");
var vddzbH = document.getElementById("ddzbH");

var vpmzbx = document.getElementById("pmzbx");
var vpmzby = document.getElementById("pmzby");
var vpmzbh = document.getElementById("pmzbh");

var vgcH = document.getElementById("gcH");


//选择使用大地坐标进行定位
function selectDDZB() {
    if (isddzb.checked) {
        vddzbL.disabled = false;
        vddzbB.disabled = false;
        vddzbH.disabled = false;

        ispmzb.checked = false;
        isgc.checked = false;

        selectPMZB();
        selectGC();
    }
    else {
        vddzbL.disabled = true;
        vddzbB.disabled = true;
        vddzbH.disabled = true;
        vddzbL.value = "";
        vddzbB.value = "";
        vddzbH.value = "";
    }

}

//选择使用平面坐标进行定位
function selectPMZB() {
    if (ispmzb.checked) {
        vpmzbx.disabled = false;
        vpmzby.disabled = false;
        vpmzbh.disabled = false;

        isddzb.checked = false;
        isgc.checked = false;

        selectDDZB();
        selectGC();
    }
    else {
        vpmzbx.disabled = true;
        vpmzby.disabled = true;
        vpmzbh.disabled = true;
        vpmzbx.value = "";
        vpmzby.value = "";
        vpmzbh.value = "";
    }
}

//选择使用高程面进行定位
function selectGC() {
    if (isgc.checked) {
        vgcH.disabled = false;

        isddzb.checked = false;
        ispmzb.checked = false;

        selectDDZB();
        selectPMZB();
    }
    else {
        vgcH.disabled = true;
        vgcH.value = "";
    }
}

//定位
function dispalyPosition() {
    cLealResult();

    var isddzbP = isddzb.checked;
    var ispmzdP = ispmzb.checked;
    var isgcP = isgc.checked;

    if (isddzbP) {
        var l = parseFloat(vddzbL.value);
        var b = parseFloat(vddzbB.value);
        var h = parseFloat(vddzbH.value);

        if ((!isNaN(l)) && (!isNaN(b)) && (!isNaN(h))) {

            //107.139001
            //28.941426
            //1856.579587

            var e = viewer.entities.add({
                name: "positonPoint" + NewGuid(),
                position: Cesium.Cartesian3.fromDegrees(l, b, h),
                billboard: {
                    image: 'Cesium/Assets/Textures/maki/marker1.png',
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    width: 20,
                    height: 20,
                }
            });

            viewer.zoomTo(e);
        }
        else {
            alert("大地坐标输入错误");
        }
    }
    else if (ispmzdP) {
        var x = parseFloat(vpmzbx.value);
        var y = parseFloat(vpmzby.value);
        var h = parseFloat(vpmzbh.value);

        if ((!isNaN(x)) && (!isNaN(y)) && (!isNaN(h))) {

        }
        else {
            alert("平面坐标输入错误");
        }

    }
    else {
        var H = parseFloat(vgcH.value);
        if (!isNaN(H) && (H > 0)) {
            //107.1344014846 28.9443584725
            //107.1344014846 28.9356677007
            //107.1425481386 28.9356677007
            //107.1425481386 28.9443584725

            var e = viewer.entities.add({
                name: "positonPoint" + NewGuid(),
                polygon: {
                    hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
                                              107.1344014846, 28.9443584725, H,
                                              107.1344014846, 28.9356677007, H,
                                              107.1425481386, 28.9356677007, H,
                                              107.1425481386, 28.9443584725, H
                    ]),
                    extrudedHeight: H,
                    perPositionHeight: true,
                    material: Cesium.Color.ORANGE.withAlpha(0.4),
                    outline: true,
                    outlineColor: Cesium.Color.RED,
                    outlineWidth: 2,
                }
            });

            viewer.zoomTo(e);
        }
        else {

            alert("高程输入错误！");
        }
    }
}

//清除定位
function clearPosition() {
    cLealResult();

    vddzbL.value = "";
    vddzbB.value = "";
    vddzbH.value = "";
    vpmzbx.value = "";
    vpmzby.value = "";
    vpmzbh.value = "";
    vgcH.value = "";
}




//定义全局变量
var isPoint = false;                        //坐标量测
var isDistance = false;                     //距离量测
var isHeight = false;                       //高度量测
var isAraa = false;                         //面积量测
var isAzimuth = false;                      //方位角量测
var isRedo = false;                         //继续绘制
var isPointLabel = false;                   //点标注
var isPolylineLabel = false;                //线标注
var isPolygonLabel = false;                 //面标注

var points = [];                            //临时点集

var handler;
var scene = viewer.scene;
var canvas = scene.canvas;


//坐标量测
function pointMeasure() {
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
                                        text: '坐标(' + longitude.toFixed(2) + ',' + latitude.toFixed(2) + ',' + height.toFixed(2) + ')',
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

//距离量测
function distanceMeasure() {
    clearAll();

    isPoint = false;
    isDistance = true;
    isHeight = false;
    isAraa = false;
    isAzimuth = false;
    isRedo = false;
    isPointLabel = false;
    isPolylineLabel = false;
    isPolygonLabel = false;

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
                if (position != undefined) {
                    if (Cesium.defined(position)) {
                        var cartesian3 = new Cesium.Cartesian3(position.x, position.y, position.z);
                        points.push(cartesian3);

                        viewer.entities.add({
                            name: "ptMeasue" + NewGuid(),
                            position: position,
                            point: {
                                pixelSize: 8,
                                color: Cesium.Color.YELLOW
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

//高度量测
function heightMeasure() {
    clearAll();

    isPoint = false;
    isDistance = false;
    isHeight = true;
    isAraa = false;
    isAzimuth = false;
    isRedo = false;
    isPointLabel = false;
    isPolylineLabel = false;
    isPolygonLabel = false;

    if (isHeight) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

        //左击
        handler.setInputAction(function (leftclik) {
            if (isRedo) {
                clearAll();
                isRedo = false;
            }

            var pickedOject = scene.pick(leftclik.position);
            if (pickedOject != undefined) {
                var xyz = scene.pickPosition(leftclik.position);
                if (xyz != undefined) {
                    var rblh = Cesium.Cartographic.fromCartesian(xyz);

                    viewer.entities.add({
                        name: "ptMeasue" + NewGuid(),
                        position: xyz,
                        point: {
                            pixelSize: 8,
                            color: Cesium.Color.YELLOW
                        }
                    });
                    points.push(xyz);

                    if (points.length == 2) {
                        var point = points[0];

                        viewer.entities.add({
                            name: "plMeasue" + NewGuid(),
                            polyline: {
                                positions: [point, xyz],
                                width: 1,
                                material: new Cesium.PolylineDashMaterialProperty({
                                    color: Cesium.Color.WHITE
                                }),
                            }
                        });

                        var rblh1 = Cesium.Cartographic.fromCartesian(point);
                        if (rblh1.height > rblh.height) {
                            var b = rblh.latitude * 180 / Math.PI;
                            var l = rblh.longitude * 180 / Math.PI;
                            var h = rblh.height;

                            viewer.entities.add({
                                name: "plMeasue" + NewGuid(),
                                polyline: {
                                    positions: [point, Cesium.Cartesian3.fromDegrees(l, b, rblh1.height)],
                                    width: 1,
                                    material: new Cesium.PolylineDashMaterialProperty({
                                        color: Cesium.Color.WHITE
                                    }),
                                }
                            });
                            viewer.entities.add({
                                name: "plMeasue" + NewGuid(),
                                polyline: {
                                    positions: [xyz, Cesium.Cartesian3.fromDegrees(l, b, rblh1.height)],
                                    width: 2,
                                    material: Cesium.Color.AQUAMARINE
                                }
                            });

                            viewer.entities.add({
                                name: "pllMeasue" + NewGuid(),
                                //position: Cesium.Cartesian3.fromDegrees(l, b, (rblh1.height + h) / 2),
                                position: Cesium.Cartesian3.fromDegrees(l, b, rblh1.height),
                                label: {
                                    text: '高度：' + (rblh1.height - h).toFixed(2) + '米',
                                    font: '20px Times New Roman',
                                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                                    verticalOrigin: Cesium.VerticalOrigin.CENTER,
                                    pixelOffset: new Cesium.Cartesian2(0.0, -10),
                                }
                            });

                            isRedo = true;
                        }
                        else if (rblh1.height < rblh.height) {
                            var b = rblh1.latitude * 180 / Math.PI;
                            var l = rblh1.longitude * 180 / Math.PI;
                            var h = rblh1.height;

                            viewer.entities.add({
                                name: "plMeasue" + NewGuid(),
                                polyline: {
                                    positions: [point, Cesium.Cartesian3.fromDegrees(l, b, rblh.height)],
                                    width: 2,
                                    material: Cesium.Color.AQUAMARINE
                                }
                            });
                            viewer.entities.add({
                                name: "plMeasue" + NewGuid(),
                                polyline: {
                                    positions: [xyz, Cesium.Cartesian3.fromDegrees(l, b, rblh.height)],
                                    width: 2,
                                    material: new Cesium.PolylineDashMaterialProperty({
                                        color: Cesium.Color.WHITE
                                    }),
                                }
                            });

                            viewer.entities.add({
                                name: "pllMeasue" + NewGuid(),
                                //position: Cesium.Cartesian3.fromDegrees(l, b, (rblh.height + h) / 2),
                                position: Cesium.Cartesian3.fromDegrees(l, b, rblh.height),
                                label: {
                                    text: '高度：' + (rblh.height - h).toFixed(2) + '米',
                                    font: '20px Times New Roman',
                                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                                    verticalOrigin: Cesium.VerticalOrigin.CENTER,
                                    pixelOffset: new Cesium.Cartesian2(0.0, -20),
                                }
                            });

                            isRedo = true;
                        }
                        else {

                        }

                        //针对移动设备
                        if (isMobile.any()) {
                            if (handler != undefined) {
                                handler.destroy();
                            }
                        }

                    }

                }

            }

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
};

//面积测量
/*
面积计算包括表面积、投影面积计算
投影面积计算过程：
（1）获取空间直角坐标XYZ
（2）转换为大地坐标BLH
（3）转换为平面直角坐标xy
（4）计算面积
*/
function areaMeasure() {
    //本面积计算方法为：将所有点转换为大地坐标BLH，然后将H赋值为最大H，再转换为空间直角坐标XYZ，取XY计算面积
    clearAll();

    isPoint = false;
    isDistance = false;
    isHeight = false;
    isAraa = true;
    isAzimuth = false;
    isRedo = false;
    isPointLabel = false;
    isPolylineLabel = false;
    isPolygonLabel = false;

    if (isAraa) {
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
                if (position != undefined) {
                    var cartesian = Cesium.Cartographic.fromCartesian(position);

                    if (Cesium.defined(position)) {
                        viewer.entities.add({
                            name: "ptMeasue" + NewGuid(),
                            position: position,
                            point: {
                                pixelSize: 8,
                                color: Cesium.Color.YELLOW
                            }
                        });
                        points.push(position);
                    }
                }

            }

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        if (isMobile.any()) {
            //双指
            handler.setInputAction(function (pinch) {
                if (points.length > 2) {
                    var cartesian3s = [];
                    var newcartesian3s = [];
                    var maxHeight = Cesium.Cartographic.fromCartesian(points[0]).height;
                    var minHeight = Cesium.Cartographic.fromCartesian(points[0]).height;
                    var bSum = 0;
                    var lSum = 0;
                    for (var i = 0; i < points.length; i++) {
                        var cartesian3 = points[i];
                        cartesian3s.push(cartesian3);
                        var rblh = Cesium.Cartographic.fromCartesian(points[i]);
                        var blh = new Cesium.Cartesian3(rblh.latitude * 180 / Math.PI, rblh.longitude * 180 / Math.PI, rblh.height);
                        newcartesian3s.push(blh);
                        bSum += rblh.latitude * 180 / Math.PI;
                        lSum += rblh.longitude * 180 / Math.PI;
                        if (rblh.height < minHeight) {
                            minHeight = rblh.height;
                        }
                        if (rblh.height > maxHeight) {
                            maxHeight = rblh.height;
                        }
                    }

                    //viewer.entities.add({
                    //    polygon: {
                    //        hierarchy: points,
                    //        extrudedHeight: maxHeight,
                    //        perPositionHeight: true,
                    //        material: Cesium.Color.ORANGE.withAlpha(0.8),
                    //        outline: false,
                    //        outlineColor: Cesium.Color.BLACK,
                    //        closeTop: true,
                    //    }
                    //});

                    viewer.entities.add({
                        name: "pyMeasue" + NewGuid(),
                        polygon: {
                            hierarchy: {
                                positions: points
                            },
                            material: Cesium.Color.ORANGE.withAlpha(0.5),
                        }
                    });


                    //计算面积
                    var cartesian2s = [];
                    for (var i = 0; i < newcartesian3s.length; i++) {
                        var cartesian3 = Cesium.Cartesian3.fromDegrees(newcartesian3s[i].y, newcartesian3s[i].x, maxHeight);
                        var cartesian2 = new Cesium.Cartesian2(cartesian3.x, cartesian3.y);
                        cartesian2s.push(cartesian2);
                    }
                    cartesian2s.push(cartesian2s[0]);
                    var area = 0;
                    for (var i = 0; i < cartesian2s.length - 1; i++) {
                        area += (cartesian2s[i].x - cartesian2s[0].x) * (cartesian2s[i + 1].y - cartesian2s[0].y) - (cartesian2s[i].y - cartesian2s[0].y) * (cartesian2s[i + 1].x - cartesian2s[0].x);
                    }
                    area = Math.abs(area);

                    //计算重心
                    viewer.entities.add({
                        name: "pylMeasue" + NewGuid(),
                        position: Cesium.Cartesian3.fromDegrees(lSum / points.length, bSum / points.length, maxHeight + 1),
                        label: {
                            text: '面积：' + area.toFixed(2) + '平方米',
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -10),
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
                if (points.length > 2) {
                    var cartesian3s = [];
                    var newcartesian3s = [];
                    var maxHeight = Cesium.Cartographic.fromCartesian(points[0]).height;
                    var minHeight = Cesium.Cartographic.fromCartesian(points[0]).height;
                    var bSum = 0;
                    var lSum = 0;
                    for (var i = 0; i < points.length; i++) {
                        var cartesian3 = points[i];
                        cartesian3s.push(cartesian3);
                        var rblh = Cesium.Cartographic.fromCartesian(points[i]);
                        var blh = new Cesium.Cartesian3(rblh.latitude * 180 / Math.PI, rblh.longitude * 180 / Math.PI, rblh.height);
                        newcartesian3s.push(blh);
                        bSum += rblh.latitude * 180 / Math.PI;
                        lSum += rblh.longitude * 180 / Math.PI;
                        if (rblh.height < minHeight) {
                            minHeight = rblh.height;
                        }
                        if (rblh.height > maxHeight) {
                            maxHeight = rblh.height;
                        }
                    }

                    //viewer.entities.add({
                    //    polygon: {
                    //        hierarchy: points,
                    //        extrudedHeight: maxHeight,
                    //        perPositionHeight: true,
                    //        material: Cesium.Color.ORANGE.withAlpha(0.8),
                    //        outline: false,
                    //        outlineColor: Cesium.Color.BLACK,
                    //        closeTop: true,
                    //    }
                    //});

                    viewer.entities.add({
                        name: "pyMeasue" + NewGuid(),
                        polygon: {
                            hierarchy: {
                                positions: points
                            },
                            material: Cesium.Color.ORANGE.withAlpha(0.5),
                        }
                    });

                    //var polygon = new Cesium.PolygonGeometry({
                    //    polygonHierarchy: new Cesium.PolygonHierarchy(
                    //     points
                    //    )
                    //});

                    //var polygonPrimitive = viewer.scene.primitives.add(new Cesium.GroundPrimitive({
                    //    geometryInstances: new Cesium.GeometryInstance({
                    //        geometry: polygon,
                    //        attributes: {
                    //            color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(1.0, 0.0, 0.0, 0.5))
                    //        }
                    //    }),
                    //    classificationType: Cesium.ClassificationType.CESIUM_3D_TILE
                    //}));



                    //计算面积
                    var cartesian2s = [];
                    for (var i = 0; i < newcartesian3s.length; i++) {
                        var cartesian3 = Cesium.Cartesian3.fromDegrees(newcartesian3s[i].y, newcartesian3s[i].x, maxHeight);
                        var cartesian2 = new Cesium.Cartesian2(cartesian3.x, cartesian3.y);
                        cartesian2s.push(cartesian2);
                    }
                    cartesian2s.push(cartesian2s[0]);
                    var area = 0;
                    for (var i = 0; i < cartesian2s.length - 1; i++) {
                        area += (cartesian2s[i].x - cartesian2s[0].x) * (cartesian2s[i + 1].y - cartesian2s[0].y) - (cartesian2s[i].y - cartesian2s[0].y) * (cartesian2s[i + 1].x - cartesian2s[0].x);
                    }
                    area = Math.abs(area);

                    //计算重心
                    viewer.entities.add({
                        name: "pylMeasue" + NewGuid(),
                        position: Cesium.Cartesian3.fromDegrees(lSum / points.length, bSum / points.length, maxHeight + 1),
                        label: {
                            text: '面积：' + area.toFixed(2) + '平方米',
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -10),
                        }
                    });


                    isRedo = true;
                }

            }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        }



    }
};

//方位角量测
function azimuthMeasure() {
    clearAll();

    isPoint = false;
    isDistance = false;
    isHeight = false;
    isAraa = false;
    isAzimuth = true;
    isRedo = false;

    if (isAzimuth) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

        //左击
        handler.setInputAction(function (leftclik) {
            if (isRedo) {
                clearAll();
                isRedo = false;
            }

            var pickedOject = scene.pick(leftclik.position);
            if (pickedOject != undefined) {
                var xyz = scene.pickPosition(leftclik.position);
                if (xyz != undefined) {
                    var rblh = Cesium.Cartographic.fromCartesian(xyz);

                    viewer.entities.add({
                        position: xyz,
                        point: {
                            pixelSize: 8,
                            color: Cesium.Color.YELLOW
                        }
                    });
                    points.push(xyz);

                    if (points.length == 2) {
                        var point = points[0];

                        viewer.entities.add({
                            polyline: {
                                positions: [point, xyz],
                                width: 1,
                                material: new Cesium.PolylineDashMaterialProperty({
                                    color: Cesium.Color.WHITE
                                }),
                            }
                        });

                        var rblh1 = Cesium.Cartographic.fromCartesian(point);//第一个点
                        var rblh2 = Cesium.Cartographic.fromCartesian(xyz);//第二个点

                        var a = Math.cos((Math.PI / 2) - rblh2.latitude) * Math.cos((Math.PI / 2) - rblh1.latitude) + Math.sin((Math.PI / 2) - rblh2.latitude) * Math.sin((Math.PI / 2) - rblh1.latitude) * Math.cos(rblh2.longitude - rblh1.longitude);
                        var b = Math.abs(Math.sqrt(1 - a * a));
                        var c = Math.asin(Math.sin((Math.PI / 2) - rblh2.latitude) * Math.sin(rblh2.longitude - rblh1.longitude) / b);














                        //if (rblh1.height > rblh.height) {
                        //    var b = rblh.latitude * 180 / Math.PI;
                        //    var l = rblh.longitude * 180 / Math.PI;
                        //    var h = rblh.height;

                        //    viewer.entities.add({
                        //        polyline: {
                        //            positions: [point, Cesium.Cartesian3.fromDegrees(l, b, rblh1.height)],
                        //            width: 1,
                        //            material: new Cesium.PolylineDashMaterialProperty({
                        //                color: Cesium.Color.WHITE
                        //            }),
                        //        }
                        //    });
                        //    viewer.entities.add({
                        //        polyline: {
                        //            positions: [xyz, Cesium.Cartesian3.fromDegrees(l, b, rblh1.height)],
                        //            width: 2,
                        //            material: Cesium.Color.AQUAMARINE
                        //        }
                        //    });

                        //    viewer.entities.add({
                        //        //position: Cesium.Cartesian3.fromDegrees(l, b, (rblh1.height + h) / 2),
                        //        position: Cesium.Cartesian3.fromDegrees(l, b, rblh1.height),
                        //        label: {
                        //            text: '高度：' + (rblh1.height - h).toFixed(2) + '米',
                        //            font: '20px Times New Roman',
                        //            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                        //            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                        //            pixelOffset: new Cesium.Cartesian2(0.0, -10),
                        //        }
                        //    });

                        //    isRedo = true;
                        //}
                        //else if (rblh1.height < rblh.height) {
                        //    var b = rblh1.latitude * 180 / Math.PI;
                        //    var l = rblh1.longitude * 180 / Math.PI;
                        //    var h = rblh1.height;

                        //    viewer.entities.add({
                        //        polyline: {
                        //            positions: [point, Cesium.Cartesian3.fromDegrees(l, b, rblh.height)],
                        //            width: 2,
                        //            material: Cesium.Color.AQUAMARINE
                        //        }
                        //    });
                        //    viewer.entities.add({
                        //        polyline: {
                        //            positions: [xyz, Cesium.Cartesian3.fromDegrees(l, b, rblh.height)],
                        //            width: 2,
                        //            material: new Cesium.PolylineDashMaterialProperty({
                        //                color: Cesium.Color.WHITE
                        //            }),
                        //        }
                        //    });

                        //    viewer.entities.add({
                        //        //position: Cesium.Cartesian3.fromDegrees(l, b, (rblh.height + h) / 2),
                        //        position: Cesium.Cartesian3.fromDegrees(l, b, rblh.height),
                        //        label: {
                        //            text: '高度：' + (rblh.height - h).toFixed(2) + '米',
                        //            font: '20px Times New Roman',
                        //            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                        //            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                        //            pixelOffset: new Cesium.Cartesian2(0.0, -20),
                        //        }
                        //    });

                        //    isRedo = true;
                        //}
                        //else {

                        //}


















                    }

                }

            }

        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
}

//清除
function clearAll() {
    var count = 0;
    while (count < 50) {
        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
            if ((viewer.entities._entities._array[i]._name.indexOf("ptMeasue") > -1)
                || (viewer.entities._entities._array[i]._name.indexOf("ptlMeasue") > -1)
                || (viewer.entities._entities._array[i]._name.indexOf("plMeasue") > -1)
                || (viewer.entities._entities._array[i]._name.indexOf("pllMeasue") > -1)
                || (viewer.entities._entities._array[i]._name.indexOf("pyMeasue") > -1)
                || (viewer.entities._entities._array[i]._name.indexOf("pylMeasue") > -1)
                || (viewer.entities._entities._array[i]._name.indexOf("positonPoint") > -1)) {
                viewer.entities.remove(viewer.entities._entities._array[i]);
            }
        }
        count++
    }

    //if (viewer.scene.primitives._primitives.length>2)
    //{
    //    for (var i = 2; i < viewer.scene.primitives._primitives.length; i++) {
    //        viewer.scene.primitives.remove(viewer.scene.primitives._primitives[i]);
    //    }
    //}

    points = [];
};
//清除结果
function cLealResult() {
    if (handler != undefined) {
        handler.destroy();
    }

    clearAll();
}

//生成GUID
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function NewGuid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


//监听主视图范围变化,实现鹰眼功能
viewer.cesiumWidget.clock.onTick.addEventListener(listenExtentChange);
function listenExtentChange() {
    if (isOpenOverview) {
        overview.entities.removeAll();

        var map = document.getElementById("map");

        //var pt1 = new Cesium.Cartesian2(0, 0);                                              //屏幕左上角
        var pt2 = new Cesium.Cartesian2(0, map.clientHeight);                               //屏幕左下角
        //var pt3 = new Cesium.Cartesian2(map.clientWidth, 0);                                //屏幕右上角
        var pt4 = new Cesium.Cartesian2(map.clientWidth, map.clientHeight);                 //屏幕右下角

        //var pick1 = viewer.scene.globe.pick(viewer.camera.getPickRay(pt1), viewer.scene);
        var pick2 = viewer.scene.globe.pick(viewer.camera.getPickRay(pt2), viewer.scene);
        //var pick3 = viewer.scene.globe.pick(viewer.camera.getPickRay(pt3), viewer.scene);
        var pick4 = viewer.scene.globe.pick(viewer.camera.getPickRay(pt4), viewer.scene);

        if ((pick2 != undefined) && (pick4 != undefined)) {

            //空间直角坐标转大地坐标
            //var geoPt1 = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick1);
            var geoPt2 = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick2);
            //var geoPt3 = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick3);
            var geoPt4 = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick4);

            //地理坐标转换为经纬度坐标
            //var point1 = [geoPt1.longitude / Math.PI * 180, geoPt1.latitude / Math.PI * 180];
            var point2 = [geoPt2.longitude / Math.PI * 180, geoPt2.latitude / Math.PI * 180];
            //var point3 = [geoPt3.longitude / Math.PI * 180, geoPt3.latitude / Math.PI * 180];
            var point4 = [geoPt4.longitude / Math.PI * 180, geoPt4.latitude / Math.PI * 180];

            var p1 = [2 * point2[0] - point4[0], 2 * point2[1] - point4[1]];
            var p2 = [2 * point4[0] - point2[0], 2 * point4[1] - point2[1]];

            overview.entities.add({
                position: Cesium.Cartesian3.fromDegrees(p1[0], p1[1]),
                point: {
                    pixelSize: 1,
                    color: Cesium.Color.YELLOW
                }
            });
            overview.entities.add({
                position: Cesium.Cartesian3.fromDegrees(p2[0], p2[1]),
                point: {
                    pixelSize: 1,
                    color: Cesium.Color.YELLOW
                }
            });
            //overview.entities.add({
            //    position: Cesium.Cartesian3.fromDegrees(point3[0], point3[1]),
            //    point: {
            //        pixelSize: 1,
            //        color: Cesium.Color.YELLOW
            //    }
            //});
            //overview.entities.add({
            //    position: Cesium.Cartesian3.fromDegrees(point4[0], point4[1]),
            //    point: {
            //        pixelSize: 1,
            //        color: Cesium.Color.YELLOW
            //    }
            //});

            //overview.entities.add({
            //    position: Cesium.Cartesian3.fromDegrees((point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2),
            //    ellipse: {
            //        semiMinorAxis: 500,
            //        semiMajorAxis: 500,
            //        material: Cesium.Color.BLUE.withAlpha(0.5)
            //    }
            //});

            overview.zoomTo(overview.entities);
        }
    }

};


//测试标注
function testLabel() {
    var scene = viewer.scene;
    var canvas = scene.canvas;
    var pinBuilder = new Cesium.PinBuilder();

    var groceryPin = Cesium.when(pinBuilder.fromUrl('Cesium/Assets/Textures/maki/basketball.png', Cesium.Color.GREEN, 48), function (canvas) {
        var entity = viewer.entities.add({
            name: 'Amway Center',
            position: Cesium.Cartesian3.fromDegrees(107.1390014, 28.9414251, 1856.38),
            billboard: {
                image: canvas.toDataURL(),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            },
            show: false,
            description:
			'<img width="50%" style="float:left; margin: 0 1em 1em 0;" src="Resources/AmwayCenterCourt.jpg"/>\n' +
			'<p>The <b>Amway Center</b> is a sports and entertainment venue in Orlando, Florida, located in the Downtown area. It is part of Downtown Orlando Master Plan 3: a plan that also involves improvements to the Citrus Bowl and a new performing arts center. The arena is home to the <a href="http://www.nba.com/magic/" target="_blank">Orlando Magic</a> of the NBA, the <a href="www.orlandopredators.com/" target="_blank">Orlando Predators</a> of the Arena Football League, the <a href="www.orlandosolarbearshockey.com/" target="_blank">Orlando Solar Bears</a> of the ECHL, and hosted the 2012 NBA All-Star Game, plus the 2015 ECHL All-Star Game.</p>\n' +
			'<p>Source: <a href="https://en.wikipedia.org/wiki/Amway_Center" target="_blank">Wikipedia</a>.</p>'
        });

        entity.show = true;
    });
}

//获取主视图范围
function getExtent() {
    var cesiumContainer = document.getElementById("cesiumContainer");
    var pt1 = new Cesium.Cartesian2(0 + 50, 0 - 50);
    var pt2 = new Cesium.Cartesian2(1632 - 300, 913 - 300);

    var pick1 = viewer.scene.globe.pick(viewer.camera.getPickRay(pt1), viewer.scene);
    var pick2 = viewer.scene.globe.pick(viewer.camera.getPickRay(pt2), viewer.scene);

    //将三维坐标转成地理坐标
    var geoPt1 = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick1);
    var geoPt2 = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick2);

    //地理坐标转换为经纬度坐标
    var point1 = [geoPt1.longitude / Math.PI * 180, geoPt1.latitude / Math.PI * 180];
    var point2 = [geoPt2.longitude / Math.PI * 180, geoPt2.latitude / Math.PI * 180];

    var scene = viewer.scene;
    var canvas = scene.canvas;
    var pinBuilder = new Cesium.PinBuilder();

    var groceryPin = Cesium.when(pinBuilder.fromUrl('Cesium/Assets/Textures/maki/basketball.png', Cesium.Color.GREEN, 48), function (canvas) {
        var entity = viewer.entities.add({
            name: 'Amway Center',
            position: Cesium.Cartesian3.fromDegrees(point1[0], point1[1], geoPt1.height),
            billboard: {
                image: canvas.toDataURL(),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            },
            show: false,
        });

        var entity1 = viewer.entities.add({
            name: 'Amway Center',
            position: Cesium.Cartesian3.fromDegrees(point2[0], point2[1], geoPt2.height),
            billboard: {
                image: canvas.toDataURL(),
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM
            },
            show: false,
        });

        entity.show = true;
        entity1.show = true;
    });
};

var pointPic = document.getElementById("p1").src;

//获取点标注样式
function getPointStyle(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var pointstyle = document.elementFromPoint(e.clientX, e.clientY);
    if ((pointstyle.id == "p1") || (pointstyle.id == "p2") || (pointstyle.id == "p3") || (pointstyle.id == "p4") || (pointstyle.id == "p5")
        || (pointstyle.id == "p6") || (pointstyle.id == "p7") || (pointstyle.id == "p8") || (pointstyle.id == "p9") || (pointstyle.id == "p10")
        || (pointstyle.id == "p11") || (pointstyle.id == "p12") || (pointstyle.id == "p13") || (pointstyle.id == "p14") || (pointstyle.id == "p15")) {

        pointPic = pointstyle.src;

        var pointPicture = document.getElementById("pointpic");
        var childs = pointPicture.childNodes;
        var count = 0;
        while (childs.length > 0) {
            for (var i = 0; i < childs.length; i++) {
                if (childs[i].id != undefined) {
                    childs[i].style.border = "";
                }
            }
            count++;
            if (count > 50) {
                break;
            }
        }

        pointstyle.style.border = "1px solid #DA2527";
    }

}

var pointLabelCount = 0;
var curId = "0";

//添加点标注
function addPointLabel() {
    isPoint = false;
    isDistance = false;
    isHeight = false;
    isAraa = false;
    isAzimuth = false;
    isPointLabel = true;
    isPolylineLabel = false;
    isPolygonLabel = false;

    if (isPointLabel) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(canvas);

        //左击
        handler.setInputAction(function (leftclick) {
            if (isPointLabel) {
                var pickedOject = scene.pick(leftclick.position);
                if (pickedOject != undefined) {
                    var position = scene.pickPosition(leftclick.position);
                    if (position != undefined) {
                        var cartesian3 = Cesium.Cartographic.fromCartesian(position);
                        var height = cartesian3.height;

                        if (height > 0) {
                            if (Cesium.defined(position)) {
                                pointLabelCount++;

                                viewer.entities.add({
                                    name: 'point' + pointLabelCount,
                                    position: position,
                                    billboard: {
                                        image: pointPic,
                                        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                                        width: 16,
                                        height: 16,
                                    }
                                });

                                viewer.entities.add({
                                    name: 'pointlabel' + pointLabelCount,
                                    position: position,
                                    label: {
                                        text: 'pointlabel' + pointLabelCount,
                                        font: '20px Times New Roman',
                                        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                                        verticalOrigin: Cesium.VerticalOrigin.CENTER,
                                        pixelOffset: new Cesium.Cartesian2(0.0, -32),
                                    }
                                });

                                var pointLabels = document.getElementById("pointLabel");
                                var image = '<img id="img' + pointLabelCount + '" src="' + pointPic + '" width="24" height="24" style="vertical-align: middle" />';
                                var text = '<input id="txt' + pointLabelCount + '" value="' + 'pointlabel' + pointLabelCount + '" type="text" style="background-color: rgba(255,255,255,0);border:0px;width: 150px;vertical-align: middle;text-overflow:ellipsis" />';
                                var remove = '<img id="rem' + pointLabelCount + '" src="img/draw/remove.png" width="20" height="20" style="vertical-align: middle" />'
                                var br = '<br id="br' + pointLabelCount + '" />';
                                pointLabels.innerHTML += image + text + remove + br;

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

        //右击
        handler.setInputAction(function (rightclik) {
            if (handler != undefined) {
                handler.destroy();
            }

        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

    }

}

//删除点标注
function deletePointLabel(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0]; //var e = event || window.event;
    var pointLabel = document.elementFromPoint(e.clientX, e.clientY);
    var curID = pointLabel.id.toString();
    if (curID.indexOf("rem") > -1) {
        var pointL = document.getElementById("pointLabel");
        var childs = pointL.childNodes;

        var count = 0;

        while (count < 10) {
            for (var i = 0; i < childs.length; i++) {
                if ((childs[i].id == curID) || (childs[i].id == curID.replace("rem", "img")) || (childs[i].id == curID.replace("rem", "txt")) || (childs[i].id == curID.replace("rem", "br"))) {
                    pointL.removeChild(childs[i]);
                }
            }

            count++;
        }

        count = 0;
        while (count < 50) {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if ((viewer.entities._entities._array[i]._name == "point" + curID.replace("rem", "")) || (viewer.entities._entities._array[i]._name == "pointlabel" + curID.replace("rem", ""))) {
                    viewer.entities.remove(viewer.entities._entities._array[i]);
                }
            }
            count++
        }

    }
    else if (curID.indexOf("txt") > -1) {
        curId = curID.replace("txt", "");

        if (curId != "0") {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if (viewer.entities._entities._array[i]._name.indexOf("point" + curId) > -1) {
                    viewer.zoomTo(viewer.entities._entities._array[i]);
                }
            }
        }

    }
    else { }

}

//修改点标注
function modiftyPointLabel(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) {
        if (curId != "0") {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if (viewer.entities._entities._array[i]._name.indexOf("pointlabel" + curId) > -1) {
                    var oldvalue = viewer.entities._entities._array[i]._label._text._value;
                    viewer.entities._entities._array[i]._label._text._value = document.getElementById("txt" + curId).value;
                    document.getElementById("pointLabel").innerHTML = document.getElementById("pointLabel").innerHTML.replace(oldvalue, document.getElementById("txt" + curId).value);
                }
            }
        }
    }

}

//删除全部点标注
function deleteAllPointLabel() {
    var pointL = document.getElementById("pointLabel");
    var childs = pointL.childNodes;
    var count = 0;
    while (childs.length > 0) {
        for (var i = 0; i < childs.length; i++) {
            pointL.removeChild(childs[i]);

        }
        count++;
        if (count > 50) {
            break;
        }
    }

    count = 0;
    while (count < 50) {
        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
            if ((viewer.entities._entities._array[i]._name.indexOf("point") > -1) || (viewer.entities._entities._array[i]._name.indexOf("pointlabel") > -1)) {
                viewer.entities.remove(viewer.entities._entities._array[i]);
            }
        }
        count++
    }

    pointLabelCount = 0;
}

//获取线标注样式
function getLineStyle(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var linestyle = document.elementFromPoint(e.clientX, e.clientY);
    if ((linestyle.id == "l1") || (linestyle.id == "l2") || (linestyle.id == "l3") || (linestyle.id == "l4")) {
        document.getElementById("l0").src = linestyle.src;
    }
}


var linepoints = [];
var linepointcount = 0;
var polylineId = 0;
var lineId = "0";

//添加线标注
function addLineLabel() {

    isPoint = false;
    isDistance = false;
    isHeight = false;
    isAraa = false;
    isAzimuth = false;
    isPointLabel = false;
    isPolylineLabel = true;
    isPolygonLabel = false;

    linepoints = [];
    linepointcount = 0;

    if (isPolylineLabel) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(canvas);

        //左击
        handler.setInputAction(function (leftclik) {
            var pickedOject = scene.pick(leftclik.position);
            if (pickedOject != undefined) {
                var position = scene.pickPosition(leftclik.position);
                if (position != undefined) {
                    if (Cesium.defined(position)) {
                        linepoints.push(position);
                        linepointcount++;

                        viewer.entities.add({
                            name: "linepoint" + linepointcount,
                            position: position,
                            point: {
                                pixelSize: 6,
                                color: Cesium.Color.YELLOW
                            }
                        });

                        var line0 = document.getElementById('l0').src;
                        var material = Cesium.Color.fromCssColorString(document.getElementById("linecolor").value);
                        if ((line0.indexOf("l2.png") > -1) || (line0.indexOf("l4.png") > -1)) {
                            material = new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.fromCssColorString(document.getElementById("linecolor").value) });
                        }

                        if (linepoints.length > 1) {
                            var point = linepoints[linepoints.length - 2];
                            viewer.entities.add({
                                name: "linesegment" + linepointcount,
                                polyline: {
                                    positions: [point, position],
                                    width: document.getElementById("linewidth").value,
                                    material: material
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
                if (linepoints.length > 1) {
                    var line = [];
                    for (var i = 0; i < linepoints.length; i++) {
                        line.push(linepoints[i]);
                    }

                    polylineId++;

                    var line0 = document.getElementById('l0').src;
                    var material = Cesium.Color.fromCssColorString(document.getElementById("linecolor").value);
                    if (line0.indexOf("l2.png") > -1) {
                        material = new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.fromCssColorString(document.getElementById("linecolor").value) });
                    }
                    else if (line0.indexOf("l3.png") > -1) {
                        material = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.fromCssColorString(document.getElementById("linecolor").value));
                    }
                    else { }

                    viewer.entities.add({
                        name: "polyline" + polylineId,
                        polyline: {
                            positions: line,
                            width: document.getElementById("linewidth").value,
                            material: material
                        }
                    });


                    viewer.entities.add({
                        name: "polylinelabel" + polylineId,
                        position: linepoints[linepoints.length - 1],
                        label: {
                            text: "polylinelabel" + polylineId,
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -32),
                        }
                    });

                    var count = 0;
                    while (count < 100) {
                        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                            if ((viewer.entities._entities._array[i]._name.indexOf("linepoint") > -1) || (viewer.entities._entities._array[i]._name.indexOf("linesegment") > -1)) {
                                viewer.entities.remove(viewer.entities._entities._array[i]);
                            }
                        }

                        count++
                    }

                    var lineLabels = document.getElementById("lineLabel");
                    var lI = '<img id="li' + polylineId + '" src="' + document.getElementById("l0").src + '" width="24" height="24" style="vertical-align: middle" />';
                    var lT = '<input id="lt' + polylineId + '" value="' + 'polylinelabel' + polylineId + '" type="text" style="background-color: rgba(255,255,255,0);border:0px;width: 150px;vertical-align: middle;text-overflow:ellipsis" />';
                    var lR = '<img id="lr' + polylineId + '" src="img/draw/remove.png" width="20" height="20" style="vertical-align: middle" />'
                    var lBr = '<br id="lbr' + polylineId + '" />';
                    lineLabels.innerHTML += lI + lT + lR + lBr;

                    linepoints = [];
                    linepointcount = 0;

                    //针对移动设备
                    if (isMobile.any()) {
                        if (handler != undefined) {
                            handler.destroy();
                        }
                    }


                }
                else {

                }

            }, Cesium.ScreenSpaceEventType.PINCH_START);
        }
        else {
            //右击
            handler.setInputAction(function (rightclik) {
                if (linepoints.length > 1) {
                    var line = [];
                    for (var i = 0; i < linepoints.length; i++) {
                        line.push(linepoints[i]);
                    }

                    polylineId++;

                    var line0 = document.getElementById('l0').src;
                    var material = Cesium.Color.fromCssColorString(document.getElementById("linecolor").value);
                    if (line0.indexOf("l2.png") > -1) {
                        material = new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.fromCssColorString(document.getElementById("linecolor").value) });
                    }
                    else if (line0.indexOf("l3.png") > -1) {
                        material = new Cesium.PolylineArrowMaterialProperty(Cesium.Color.fromCssColorString(document.getElementById("linecolor").value));
                    }
                    else { }

                    viewer.entities.add({
                        name: "polyline" + polylineId,
                        polyline: {
                            positions: line,
                            width: document.getElementById("linewidth").value,
                            material: material
                        }
                    });


                    viewer.entities.add({
                        name: "polylinelabel" + polylineId,
                        position: linepoints[linepoints.length - 1],
                        label: {
                            text: "polylinelabel" + polylineId,
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -32),
                        }
                    });

                    var count = 0;
                    while (count < 100) {
                        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                            if ((viewer.entities._entities._array[i]._name.indexOf("linepoint") > -1) || (viewer.entities._entities._array[i]._name.indexOf("linesegment") > -1)) {
                                viewer.entities.remove(viewer.entities._entities._array[i]);
                            }
                        }

                        count++
                    }

                    var lineLabels = document.getElementById("lineLabel");
                    var lI = '<img id="li' + polylineId + '" src="' + document.getElementById("l0").src + '" width="24" height="24" style="vertical-align: middle" />';
                    var lT = '<input id="lt' + polylineId + '" value="' + 'polylinelabel' + polylineId + '" type="text" style="background-color: rgba(255,255,255,0);border:0px;width: 150px;vertical-align: middle;text-overflow:ellipsis" />';
                    var lR = '<img id="lr' + polylineId + '" src="img/draw/remove.png" width="20" height="20" style="vertical-align: middle" />'
                    var lBr = '<br id="lbr' + polylineId + '" />';
                    lineLabels.innerHTML += lI + lT + lR + lBr;

                    linepoints = [];
                    linepointcount = 0;
                }
                else {

                }

            }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);

        }


        //中键
        handler.setInputAction(function (middleclik) {
            if (handler != undefined) {
                handler.destroy();
            }

        }, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
    }

}

//删除线标注
function deleteLineLabel(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var lineLabel = document.elementFromPoint(e.clientX, e.clientY);
    var curID = lineLabel.id.toString();
    if (curID.indexOf("lr") > -1) {
        var lineL = document.getElementById("lineLabel");
        var childs = lineL.childNodes;

        var count = 0;

        while (count < 10) {
            for (var i = 0; i < childs.length; i++) {
                if ((childs[i].id == curID) || (childs[i].id == curID.replace("lr", "li")) || (childs[i].id == curID.replace("lr", "lt")) || (childs[i].id == curID.replace("lr", "lbr"))) {
                    lineL.removeChild(childs[i]);
                }
            }

            count++;
        }

        count = 0;
        while (count < 50) {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if ((viewer.entities._entities._array[i]._name == "polyline" + curID.replace("lr", "")) || (viewer.entities._entities._array[i]._name == "polylinelabel" + curID.replace("lr", ""))) {
                    viewer.entities.remove(viewer.entities._entities._array[i]);
                }
            }
            count++
        }

    }
    else if (curID.indexOf("lt") > -1) {
        lineId = curID.replace("lt", "");

        if (lineId != "0") {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if (viewer.entities._entities._array[i]._name.indexOf("polyline" + lineId) > -1) {
                    viewer.zoomTo(viewer.entities._entities._array[i]);
                }
            }
        }



    }
    else { }
}

//修改线标注
function modiftyLineLabel(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) {
        if (lineId != "0") {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if (viewer.entities._entities._array[i]._name.indexOf("polylinelabel" + lineId) > -1) {
                    var oldvalue = viewer.entities._entities._array[i]._label._text._value;
                    viewer.entities._entities._array[i]._label._text._value = document.getElementById("lt" + lineId).value;
                    document.getElementById("lineLabel").innerHTML = document.getElementById("lineLabel").innerHTML.replace(oldvalue, document.getElementById("lt" + lineId).value);
                }
            }
        }
    }
}

//删除全部线标注
function deleteAllLineLabel() {
    var polylineL = document.getElementById("lineLabel");
    var childs = polylineL.childNodes;
    var count = 0;
    while (childs.length > 0) {
        for (var i = 0; i < childs.length; i++) {
            polylineL.removeChild(childs[i]);
        }
        count++;
        if (count > 50) {
            break;
        }
    }

    count = 0;
    while (count < 50) {
        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
            if ((viewer.entities._entities._array[i]._name.indexOf("polyline") > -1) || (viewer.entities._entities._array[i]._name.indexOf("polylineLabel") > -1)) {
                viewer.entities.remove(viewer.entities._entities._array[i]);
            }
        }
        count++
    }

    polylineId = 0;
}


var areapoints = [];
var areapointcount = 0;
var polygonId = 0;
var areaId = "0";

//添加面标注
function addAreaLabel() {

    isPoint = false;
    isDistance = false;
    isHeight = false;
    isAraa = false;
    isAzimuth = false;
    isPointLabel = false;
    isPolylineLabel = false;
    isPolygonLabel = true;

    areapoints = [];
    areapointcount = 0;

    if (isPolygonLabel) {
        if (handler != undefined) {
            handler.destroy();
        }

        handler = new Cesium.ScreenSpaceEventHandler(canvas);

        //左击
        handler.setInputAction(function (leftclik) {
            var pickedOject = scene.pick(leftclik.position);
            if (pickedOject != undefined) {
                var position = scene.pickPosition(leftclik.position);
                if (position != undefined) {
                    if (Cesium.defined(position)) {
                        areapoints.push(position);
                        areapointcount++;

                        viewer.entities.add({
                            name: "areapoint" + areapointcount,
                            position: position,
                            point: {
                                pixelSize: 6,
                                color: Cesium.Color.YELLOW
                            }
                        });

                        if (areapoints.length > 1) {
                            var point = areapoints[areapoints.length - 2];
                            viewer.entities.add({
                                name: "areasegment" + areapointcount,
                                polyline: {
                                    positions: [point, position],
                                    width: 1,
                                    material: Cesium.Color.fromCssColorString(document.getElementById("areacolor").value)
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
                if (areapoints.length > 2) {

                    polygonId++;

                    viewer.entities.add({
                        name: "polygon" + polygonId,
                        polygon: {
                            hierarchy: {
                                positions: areapoints
                            },
                            material: Cesium.Color.fromCssColorString(document.getElementById("areacolor").value).withAlpha(document.getElementById("areatransparency").value),
                        }
                    });

                    var maxHeight = Cesium.Cartographic.fromCartesian(areapoints[0]).height;
                    var bSum = 0;
                    var lSum = 0;

                    for (var i = 0; i < areapoints.length; i++) {
                        var rblh = Cesium.Cartographic.fromCartesian(areapoints[i]);
                        bSum += rblh.latitude * 180 / Math.PI;
                        lSum += rblh.longitude * 180 / Math.PI;
                        if (rblh.height > maxHeight) {
                            maxHeight = rblh.height;
                        }
                    }

                    viewer.entities.add({
                        name: "polygonlabel" + polygonId,
                        position: Cesium.Cartesian3.fromDegrees(lSum / areapoints.length, bSum / areapoints.length, maxHeight + 1),
                        label: {
                            text: "polygonlabel" + polygonId,
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -10),
                        }
                    });

                    var count = 0;
                    while (count < 10) {
                        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                            if ((viewer.entities._entities._array[i]._name.indexOf("areapoint") > -1) || (viewer.entities._entities._array[i]._name.indexOf("areasegment") > -1)) {
                                viewer.entities.remove(viewer.entities._entities._array[i]);
                            }
                        }

                        count++
                    }

                    var areaLabels = document.getElementById("areaLabel");
                    var aA = '<canvas id="aa' + polygonId + '" style="background-color:' + document.getElementById("areacolor").value + ';opacity:' + document.getElementById("areatransparency").value + '; width: 20px; height: 20px;vertical-align: middle"></canvas>';
                    var aT = '<input id="at' + polygonId + '" value="' + 'polygonlabel' + polygonId + '" type="text" style="background-color: rgba(255,255,255,0);border:0px;width: 150px;vertical-align: middle;text-overflow:ellipsis" />';
                    var aR = '<img id="ar' + polygonId + '" src="img/draw/remove.png" width="20" height="20" style="vertical-align: middle" />'
                    var aBr = '<br id="abr' + polygonId + '" />';
                    areaLabels.innerHTML += aA + aT + aR + aBr;

                    areapoints = [];
                    areapointcount = 0;

                    //针对移动设备
                    if (isMobile.any()) {
                        if (handler != undefined) {
                            handler.destroy();
                        }
                    }


                }
                else {

                }

            }, Cesium.ScreenSpaceEventType.PINCH_START);
        }
        else {
            //右击
            handler.setInputAction(function (rightclik) {
                if (areapoints.length > 2) {

                    polygonId++;

                    viewer.entities.add({
                        name: "polygon" + polygonId,
                        polygon: {
                            hierarchy: {
                                positions: areapoints
                            },
                            material: Cesium.Color.fromCssColorString(document.getElementById("areacolor").value).withAlpha(document.getElementById("areatransparency").value),
                        }
                    });

                    var maxHeight = Cesium.Cartographic.fromCartesian(areapoints[0]).height;
                    var bSum = 0;
                    var lSum = 0;

                    for (var i = 0; i < areapoints.length; i++) {
                        var rblh = Cesium.Cartographic.fromCartesian(areapoints[i]);
                        bSum += rblh.latitude * 180 / Math.PI;
                        lSum += rblh.longitude * 180 / Math.PI;
                        if (rblh.height > maxHeight) {
                            maxHeight = rblh.height;
                        }
                    }

                    viewer.entities.add({
                        name: "polygonlabel" + polygonId,
                        position: Cesium.Cartesian3.fromDegrees(lSum / areapoints.length, bSum / areapoints.length, maxHeight + 1),
                        label: {
                            text: "polygonlabel" + polygonId,
                            font: '20px Times New Roman',
                            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                            verticalOrigin: Cesium.VerticalOrigin.CENTER,
                            pixelOffset: new Cesium.Cartesian2(0.0, -10),
                        }
                    });

                    var count = 0;
                    while (count < 10) {
                        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                            if ((viewer.entities._entities._array[i]._name.indexOf("areapoint") > -1) || (viewer.entities._entities._array[i]._name.indexOf("areasegment") > -1)) {
                                viewer.entities.remove(viewer.entities._entities._array[i]);
                            }
                        }

                        count++
                    }

                    var areaLabels = document.getElementById("areaLabel");
                    var aA = '<canvas id="aa' + polygonId + '" style="background-color:' + document.getElementById("areacolor").value + ';opacity:' + document.getElementById("areatransparency").value + '; width: 20px; height: 20px;vertical-align: middle"></canvas>';
                    var aT = '<input id="at' + polygonId + '" value="' + 'polygonlabel' + polygonId + '" type="text" style="background-color: rgba(255,255,255,0);border:0px;width: 150px;vertical-align: middle;text-overflow:ellipsis" />';
                    var aR = '<img id="ar' + polygonId + '" src="img/draw/remove.png" width="20" height="20" style="vertical-align: middle" />'
                    var aBr = '<br id="abr' + polygonId + '" />';
                    areaLabels.innerHTML += aA + aT + aR + aBr;

                    areapoints = [];
                    areapointcount = 0;
                }
                else {

                }

            }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        }

        //中键
        handler.setInputAction(function (middleclik) {
            if (handler != undefined) {
                handler.destroy();
            }

        }, Cesium.ScreenSpaceEventType.MIDDLE_CLICK);
    }
}

//删除面标注
function deleteAreaLabel(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var areaLabel = document.elementFromPoint(e.clientX, e.clientY);
    var curID = areaLabel.id.toString();
    if (curID.indexOf("ar") > -1) {
        var areaL = document.getElementById("areaLabel");
        var childs = areaL.childNodes;

        var count = 0;

        while (count < 10) {
            for (var i = 0; i < childs.length; i++) {
                if ((childs[i].id == curID) || (childs[i].id == curID.replace("ar", "aa")) || (childs[i].id == curID.replace("ar", "at")) || (childs[i].id == curID.replace("ar", "abr"))) {
                    areaL.removeChild(childs[i]);
                }
            }

            count++;
        }

        count = 0;
        while (count < 50) {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if ((viewer.entities._entities._array[i]._name == "polygon" + curID.replace("ar", "")) || (viewer.entities._entities._array[i]._name == "polygonlabel" + curID.replace("ar", ""))) {
                    viewer.entities.remove(viewer.entities._entities._array[i]);
                }
            }
            count++
        }

    }
    else if (curID.indexOf("at") > -1) {
        areaId = curID.replace("at", "");

        if (areaId != "0") {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if (viewer.entities._entities._array[i]._name.indexOf("polygonlabel" + areaId) > -1) {
                    viewer.zoomTo(viewer.entities._entities._array[i]);
                }
            }
        }

    }
    else { }
}

//修改面标注
function modiftyAreaLabel(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) {
        if (areaId != "0") {
            for (var i = 0; i < viewer.entities._entities._array.length; i++) {
                if (viewer.entities._entities._array[i]._name.indexOf("polygonlabel" + areaId) > -1) {
                    var oldvalue = viewer.entities._entities._array[i]._label._text._value;
                    viewer.entities._entities._array[i]._label._text._value = document.getElementById("at" + areaId).value;
                    document.getElementById("areaLabel").innerHTML = document.getElementById("areaLabel").innerHTML.replace(oldvalue, document.getElementById("at" + areaId).value);
                }
            }
        }
    }
}

//删除全部面标注
function deleteAllAreaLabel() {
    var polygonL = document.getElementById("areaLabel");
    var childs = polygonL.childNodes;
    var count = 0;
    while (childs.length > 0) {
        for (var i = 0; i < childs.length; i++) {
            polygonL.removeChild(childs[i]);
        }
        count++;
        if (count > 50) {
            break;
        }
    }

    count = 0;
    while (count < 50) {
        for (var i = 0; i < viewer.entities._entities._array.length; i++) {
            if (viewer.entities._entities._array[i]._name.indexOf("polygon") > -1) {
                viewer.entities.remove(viewer.entities._entities._array[i]);
            }
        }

        count++
    }

    polygonId = 0;
}











//高斯正算
function BL2xy(B, L, a, f, zonewidth, cm, assumedCoord) {
    L -= cm - (zonewidth == 6 ? 3 : 0);                  //计算经度差
    var result = BL2xy_1(B, L, a, f, zonewidth);
    var x = result[0];
    var y = result[1];

    if (assumedCoord) {
        y += cm * 1000000 / zonewidth;                   //加带号
    }

    y += 500000;                                         //平移500km
    return [x, y];
}
function BL2xy_1(B, L, a, f, zonewidth) {
    var ee = (2 * f - 1) / f / f;
    var ee2 = ee / (1 - ee);
    var rB = B * Math.PI / 180;
    var tB = Math.tan(rB);
    var m = Math.cos(rB) * L * Math.PI / 180;
    var N = a / Math.sqrt(1 - ee * Math.sin(rB) * Math.sin(rB));
    var it2 = ee2 * Math.pow(Math.cos(rB), 2);
    var x = m * m / 2 + (5 - tB * tB + 9 * it2 + 4 * it2 * it2) * Math.pow(m, 4) / 24 + (61 - 58 * tB * tB + Math.pow(tB, 4)) * Math.pow(m, 6) / 720;
    x = MeridianLength(B, a, f) + N * tB * x;
    var y = N * (m + (1 - tB * tB + it2) * Math.pow(m, 3) / 6 + (5 - 18 * tB * tB + Math.pow(tB, 4) + 14 * it2 - 58 * tB * tB * it2) * Math.pow(m, 5) / 120);
    return [x, y];
}
function MeridianLength(B, a, f) {
    var ee = (2 * f - 1) / f / f;
    var rB = B * Math.PI / 180;
    var cA = 1 + 3 * ee / 4 + 45 * Math.pow(ee, 2) / 64 + 175 * Math.pow(ee, 3) / 256 + 11025 * Math.pow(ee, 4) / 16384;
    var cB = 3 * ee / 4 + 15 * Math.pow(ee, 2) / 16 + 525 * Math.pow(ee, 3) / 512 + 2205 * Math.pow(ee, 4) / 2048;
    var cC = 15 * Math.pow(ee, 2) / 64 + 105 * Math.pow(ee, 3) / 256 + 2205 * Math.pow(ee, 4) / 4096;
    var cD = 35 * Math.pow(ee, 3) / 512 + 315 * Math.pow(ee, 4) / 2048;
    var cE = 315 * Math.pow(ee, 4) / 131072;
    return a * (1 - ee) * (cA * rB - cB * Math.sin(2 * rB) / 2 + cC * Math.sin(4 * rB) / 4 - cD * Math.sin(6 * rB) / 6 + cE * Math.sin(8 * rB) / 8);
}

//高斯反算
function xy2BL(x, y, a, f, zonewidth, cm, assumedCoord) {
    if (assumedCoord) {
        y -= cm * 1000000 / zonewidth;                   //去带号
    }
    y -= 500000;                                         //去平移
    var result = xy2BL_1(x, y, a, f, zonewidth);          //计算纬度和经度差
    var B = result[0];
    var L = result[1];
    L += cm;                                             //经度换算

    return [B, L];
}
function xy2BL_1(x, y, a, f, zonewidth) {
    var ee = (2 * f - 1) / f / f;       //第一偏心率的平方
    var ee2 = ee / (1 - ee);            //第二偏心率的平方

    var cA = 1 + 3 * ee / 4 + 45 * ee * ee / 64 + 175 * Math.pow(ee, 3) / 256 + 11025 * Math.pow(ee, 4) / 16384;
    var cB = 3 * ee / 4 + 15 * ee * ee / 16 + 525 * Math.pow(ee, 3) / 512 + 2205 * Math.pow(ee, 4) / 2048;
    var cC = 15 * ee * ee / 64 + 105 * Math.pow(ee, 3) / 256 + 2205 * Math.pow(ee, 4) / 4096;
    var cD = 35 * Math.pow(ee, 3) / 512 + 315 * Math.pow(ee, 4) / 2048;
    var cE = 315 * Math.pow(ee, 4) / 131072;
    var Bf = x / (a * (1 - ee) * cA);
    do {
        B = Bf;
        Bf = (x + a * (1 - ee) * (cB * Math.sin(2 * Bf) / 2 - cC * Math.sin(4 * Bf) / 4 + cD * Math.sin(6 * Bf) / 6) - cE * Math.sin(8 * Bf) / 8) / (a * (1 - ee) * cA);
    }
    while (Math.abs(B - Bf) > 0.00000000001);
    var N = a / Math.sqrt(1 - ee * Math.pow(Math.sin(Bf), 2));
    var V2 = 1 + ee2 * Math.pow(Math.cos(Bf), 2);
    var it2 = ee2 * Math.pow(Math.cos(Bf), 2);
    var tB2 = Math.pow(Math.tan(Bf), 2);
    var B = Bf - V2 * Math.tan(Bf) / 2 * (Math.pow(y / N, 2) - (5 + 3 * tB2 + it2 - 9 * it2 * tB2) * Math.pow(y / N, 4) / 12 + (61 + 90 * tB2 + 45 * tB2 * tB2) * Math.pow(y / N, 6) / 360);
    var L = (y / N - (1 + 2 * tB2 + it2) * Math.pow(y / N, 3) / 6 + (5 + 28 * tB2 + 24 * tB2 * tB2 + 6 * it2 + 8 * it2 * tB2) * Math.pow(y / N, 5) / 120) / Math.cos(Bf);
    B = B * 180 / Math.PI;
    L = L * 180 / Math.PI;

    return [B, L];
}



