module.exports = {
  'Firefox (latest): Should not show threshold' : function (browser) {
    browser.url('http://localhost:8080').waitForElementVisible('body', 1000);
    browser.expect.element('#browser-threshold').to.not.be.present;
  },

  'IE6: should show threshold' : function (browser) {
    browser.url('http://localhost:8080/ie.html?ieversion=6').waitForElementVisible('body', 1000);
    browser.expect.element('#browser-threshold').to.be.present;
  },

  'IE7: should show threshold' : function (browser) {
    browser.url('http://localhost:8080/ie.html?ieversion=7').waitForElementVisible('body', 1000)
    browser.expect.element('#browser-threshold').to.be.present
  },

  'IE8: should show threshold' : function (browser) {
    browser.url('http://localhost:8080/ie.html?ieversion=8').waitForElementVisible('body', 1000)
    browser.expect.element('#browser-threshold').to.be.present
  },

  'IE9: should show threshold' : function (browser) {
    browser.url('http://localhost:8080/ie.html?ieversion=9').waitForElementVisible('body', 1000)
    browser.expect.element('#browser-threshold').to.be.present
  },

  'IE10: should show threshold' : function (browser) {
    browser.url('http://localhost:8080/ie.html?ieversion=10').waitForElementVisible('body', 1000)
    browser.expect.element('#browser-threshold').to.be.present
  },

  'IE11: should not show threshold' : function (browser) {
    browser.url('http://localhost:8080/ie.html?ieversion=11').waitForElementVisible('body', 1000)
    browser.expect.element('#browser-threshold').to.not.be.present
  }  
};