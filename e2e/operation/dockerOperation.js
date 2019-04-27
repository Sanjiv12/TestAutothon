"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var dockerComponent_1 = require("../component/dockerComponent");
var EC = protractor_1.ExpectedConditions;
var dockerOperation = /** @class */ (function () {
    function dockerOperation() {
        this.dockerCompnt = new dockerComponent_1.dockerComponent();
    }
    dockerOperation.prototype.loginDockerHub = function (username, password) {
        var _this = this;
        return this.dockerCompnt.clickSignInButton().then(function () {
            _this.dockerCompnt.enterUserName(username);
            _this.dockerCompnt.enterPassword(password);
        });
    };
    return dockerOperation;
}());
exports.dockerOperation = dockerOperation;
