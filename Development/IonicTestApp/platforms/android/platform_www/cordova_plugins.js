cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com-moduscreate-plugins-echoswift.ModusEchoSwift",
    "file": "plugins/com-moduscreate-plugins-echoswift/www/ModusEchoSwift.js",
    "pluginId": "com-moduscreate-plugins-echoswift",
    "clobbers": [
      "modusechoswift"
    ]
  },
  {
    "id": "cordova-plugin-actionsheet.ActionSheet",
    "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
    "pluginId": "cordova-plugin-actionsheet",
    "clobbers": [
      "window.plugins.actionsheet"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "clobbers": [
      "launchnavigator"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "clobbers": [
      "localforage"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
    "merges": [
      "launchnavigator"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com-moduscreate-plugins-echoswift": "0.0.1",
  "cordova-plugin-actionsheet": "2.3.3",
  "cordova-plugin-add-swift-support": "1.7.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-whitelist": "1.3.1",
  "ionic-plugin-keyboard": "2.2.1",
  "uk.co.workingedge.phonegap.plugin.launchnavigator": "4.1.3"
};
// BOTTOM OF METADATA
});