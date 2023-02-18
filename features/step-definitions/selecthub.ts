import { Given, Then, When } from "@wdio/cucumber-framework";


Given(/^open url with \"([^\"]*)\"$/, function (url) {
    browser.deleteAllCookies()
    browser.maximizeWindow()
    browser.url(url)
});

When(/^i validate the Checkout here button$/, async function () {
    const header = await $("//span[contains(text(),'Inspect this element, you will see comment just be')]")
    expect(await header.getText()).toContain("Inspect this element")
});

Then(/^i input my mail \"([^\"]*)\"$/, async function (mail) {
    // // const elementRef = await browser.findElement('xpath', "//input[@id='userId']")
    // const email = await (await $('xpath', "//input[@id='userId']"))
    // await (await email).setValue(mail)

    (await $('input#userId')).setValue(mail)
    browser.pause(5000)

});

Then(/^i input my password \"([^\"]*)\"$/, async function (pwd) {
    // const elementRef = await browser.findElement('xpath', "(//input[@id='pass'])[1]")
    // const element = await $(elementRef)
    // await (await element).sendKeys(pwd)

    (await $('input#pass')).setValue(pwd)
    browser.pause(5000)

});
Then(/^i enter company as \"([^\"]*)\"$/, async function (company) {
    (await $('input#company')).setValue(company)
    browser.pause(5000)
});

Then(/^i enter phone number as \"([^\"]*)\"$/, async function (phone) {
    (await $('input#mobile number')).setValue(phone)
    browser.pause(4000)
});

