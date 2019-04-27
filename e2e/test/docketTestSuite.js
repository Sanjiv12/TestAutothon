"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var dockerOperation_1 = require("../operation/dockerOperation");
describe('Research in docker site', function () {
    var dockerOpertn = new dockerOperation_1.dockerOperation();
    beforeEach(function () {
        protractor_1.browser.ignoreSynchronization = true;
    });
    it('Check PlaneFinder url', function () {
        var username = 'sanjivqa';
        var password = 'system123#';
        protractor_1.browser.get('http://inl03-trbackend.pdmagain.com:9080/exlapp/login');
        dockerOpertn.loginDockerHub(username, password);
    });
});
