import { Given, Then, When } from "@wdio/cucumber-framework";

Given(/^I am on the practice page \"([^\"]*)\"$/, function (url) {
    
    browser.url(url)
    browser.maximizeWindow
});

When(/^click on amazon logo and validate$/, async function () {
    const elementRef = await browser.findElement('xpath', "//a[@id='nav-logo-sprites']")
    const element = await $(elementRef)
    await element.click()

    
});

Then(/^click on all$/, async function () {
    const elementRef1 = await browser.findElement('xpath', "//a[@id='nav-hamburger-menu']")
    const element1 = await $(elementRef1)
    await element1.click()
    
});