var getNavigator = function() {
    return navigator;
};

var getWindow = function() {
    return window;
};

var DeviceType = {
    phone: "phone",
    tablet: "tablet",
    large: "large",
    xLarge: "xLarge",
    xXLarge: "xXLarge"
};

var getPageSize = function () {
    var $window = $(getWindow());

    return {
        width: $window.width(),
        height: $window.height(),
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
    };
};

var getDeviceInfo = function (pageSize) {
    'use strict';

 var $navigator = getNavigator();
    var isPortrait = (pageSize.width < pageSize.height);
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test($navigator.userAgent);

    var width = isMobile ? pageSize.screenWidth : pageSize.width;
    var height = isMobile ? pageSize.screenHeight : pageSize.height;

    var getDeviceType = function () {

        var maxWidth = (width <= 0 || height <= 0) ? 0 : Math.max(width, height);

        if (maxWidth > 0 && maxWidth < 641) {
            return DeviceType.phone;
        } else if (maxWidth > 640 && maxWidth < 1025) {
            return DeviceType.tablet;
        } else if (maxWidth > 1440 && maxWidth < 1921) {
            return DeviceType.xLarge;
        } else if (maxWidth > 1920) {
            return DeviceType.xXLarge;
        } else {
            return DeviceType.large;
        }
    };

    return {
        deviceType: getDeviceType(),
        isPortrait: isPortrait,
        isMobile: isMobile
    };
};