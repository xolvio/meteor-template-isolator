(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Given(/^I am on the home page$/, function (callback) {
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl).
        call(callback);
    });

    this.When(/^I click on the "([^"]*)" button$/, function (elementText, callback) {
      helper.world.browser.
        click('//button[contains(text(), "' + elementText + '")]').
        call(callback);
    });

    this.Then(/^I should see "([^"]*)"$/, function (elementText, callback) {
      helper.world.browser.
        element('//*[contains(text(), "' + elementText + '")]', function (err, element) {
          assert.notEqual(element, null, elementText + ' not found');
        }).
        call(callback);
    });

  };

})();