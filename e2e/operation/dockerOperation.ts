import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import {dockerComponent} from '../component/dockerComponent';
const EC = ExpectedConditions;

export class dockerOperation {
    dockerCompnt = new dockerComponent();

    public loginDockerHub(username: string, password: string) {
        return this.dockerCompnt.clickSignInButton().then(() => {
            this.dockerCompnt.enterUserName(username);
            this.dockerCompnt.enterPassword(password);
        });
    }
    
}
