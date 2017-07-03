// ==UserScript==
// @name         Metro Bank auto-enter account number
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://personal.metrobankonline.co.uk/MetroBankRetail/
// @match        https://personal.metrobankonline.co.uk/MetroBankRetail/servletcontroller
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(
        function () {
            var thing = document.getElementById('USER_NAME');
            if (thing) {
                thing.value = '<your_account_number>';
            }

        },
        250
    )
    ;


})();
