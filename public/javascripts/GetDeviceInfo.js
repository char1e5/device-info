var getNavigator = (function() {
    return navigator;
})();

var getWindow = (function() {
    return $(window);
})();

var DeviceType = {
    phone: "phone",
    tablet: "tablet",
    large: "large",
    xLarge: "xLarge",
    xXLarge: "xXLarge"
};

var getPageSize = function () {
  var $window = window,
      $document = $window.document;

  var width = Math.max(
        $document.body.scrollWidth, $document.documentElement.scrollWidth,
        $document.body.offsetWidth, $document.documentElement.offsetWidth,
        $document.body.clientWidth, $document.documentElement.clientWidth
    );

  var height = Math.max(
        $document.body.scrollHeight, $document.documentElement.scrollHeight,
        $document.body.offsetHeight, $document.documentElement.offsetHeight,
        $document.body.clientHeight, $document.documentElement.clientHeight
    );

  return {
      width: width,
      height: height,
      screenWidth: $window.screen.width,
      screenHeight: $window.screen.height
  };
};

var getDeviceInfo = function ($pageSize) {
    'use strict';

    var $window = window;
    var isPortrait = ($pageSize.width < $pageSize.height);
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test($window.navigator.userAgent);

    var width = isMobile ? $pageSize.screenWidth : $pageSize.width;
    var height = isMobile ? $pageSize.screenHeight : $pageSize.height;

    if (width <= 0 || height <= 0) {
        width = 0;
        height = 0;
    }

  var getDeviceType = function () {

    var maxWidth = Math.max(width, height);

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
        width: width,
        height: height,
        deviceType: getDeviceType(),
        isPortrait: isPortrait,
        isMobile: isMobile
    };
};