// Diff: https://github.com/getredash/redash/commit/f23d709f4e6174b3d7e2fb1ca873b66f96e27a6d#diff-6e8848729c3bfe64750049e20d32efdde1654db75a61b8e37d9619221d631930L20
// Model: .227
(function () {
    var notifications = function (Events) {
        var notificationService = {};
        var lastNotification = null;

        notificationService.isSupported = function () {
            if (window.webkitNotifications) {
                return true;
            } else {
                console.log("HTML5 notifications are not supported.");
                return false;
            }
        }
        notificationService.getPermissions = function () {
            if (!this.isSupported()) {
                return;
            }

            if (!window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
                window.webkitNotifications.requestPermission();
            }
        }

        notificationService.showNotification = function (title, content) {
            if (!this.isSupported()) {
                return;
            }

            if (document.webkitVisibilityState && document.webkitVisibilityState == 'visible') {
                return;
            }

            if (lastNotification) {
                lastNotification.cancel();
            }

            var notification = window.webkitNotifications.createNotification('', title, content);
            lastNotification = notification;
            notification.onclick = function () {
                window.focus();
                this.cancel();
                Events.record(currentUser, 'click', 'notification');
            };

            notification.show()
        }

        return notificationService;
    }
    angular.module('redash.services')
        .factory('notifications', ['Events', notifications]);
})();
