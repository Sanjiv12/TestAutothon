"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var EC = protractor_1.ExpectedConditions;
var maxWait = protractor_1.browser.params.maxElementLoadTime;
var dockerComponent = /** @class */ (function () {
    function dockerComponent() {
        this.signInBtn = '//div[.="Sign In"]';
        this.userName = '//input[@id="nw_username"]';
        this.password = '//input[@id="nw_password"]';
    }
    dockerComponent.prototype.clickSignInButton = function () {
        var signIn = protractor_1.element(protractor_1.by.xpath(this.signInBtn));
        return signIn.click();
        // return browser.wait(EC.visibilityOf(signIn)).then(() => {
        //     signIn.click();
        // });
    };
    dockerComponent.prototype.enterUserName = function (username) {
        var userName = protractor_1.element(protractor_1.by.xpath(this.userName));
        return protractor_1.browser.wait(EC.visibilityOf(userName)).then(function () {
            userName.sendKeys(username);
        });
    };
    dockerComponent.prototype.enterPassword = function (passValue) {
        var password = protractor_1.element(protractor_1.by.xpath(this.password));
        return protractor_1.browser.wait(EC.visibilityOf(password)).then(function () {
            password.sendKeys(passValue);
        });
    };
    return dockerComponent;
}());
exports.dockerComponent = dockerComponent;
