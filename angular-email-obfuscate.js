angular
    .module("email.obfuscate", [])
    .directive("emailObfuscate", [function () {
        return {
            scope: {
                "emailObfuscate": "="
            },
            link: function (scope, element) {
                scope.$watch(function () {
                    return EmailObfuscate;
                }, function () {
                    if (EmailObfuscate) {
                        scope.$watch("emailObfuscate", function (emailAddress) {
                            if (element[0]) {
                                new EmailObfuscate.EmailObfuscate(element[0], emailAddress);
                            }
                        });
                    }
                });
            }
        };
    }]);
