import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

const EC = ExpectedConditions;
const maxWait = browser.params.maxElementLoadTime;
export class dockerComponent {
    signInBtn: string = '//div[.="Sign In"]';
    userName: string = '//input[@id="nw_username"]';
    password: string = '//input[@id="nw_password"]';
   
    public clickSignInButton() {
        const signIn = element(by.xpath(this.signInBtn));
        return signIn.click();
        // return browser.wait(EC.visibilityOf(signIn)).then(() => {
        //     signIn.click();
        // });
    }

    public enterUserName(username: string) {
        const userName = element(by.xpath(this.userName));
        return browser.wait(EC.visibilityOf(userName)).then(() => {
            userName.sendKeys(username);
        });
    }

    public enterPassword(passValue: string) {
        const password = element(by.xpath(this.password));
        return browser.wait(EC.visibilityOf(password)).then(() => {
            password.sendKeys(passValue);
        });
    }
}
