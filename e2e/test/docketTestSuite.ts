import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {dockerOperation} from '../operation/dockerOperation';

describe('Research in docker site', () => {
    const dockerOpertn = new dockerOperation();
    
    beforeEach(() => {
        browser.ignoreSynchronization = true;
    });

    it('Check PlaneFinder url', () => {
        const username = 'postd';
        const password = 'Exl@123#';
        browser.get('http://inl03-trbackend.pdmagain.com:9080/exlapp/login');
        dockerOpertn.loginDockerHub(username, password);
    });
});
