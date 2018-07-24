module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser.end()
    },
    // Smoke test attempts to check Istanbul, verify Weathercard, click search again, search an empty string, check error, then try again to return to home screen.
    'check search': browser => {
        browser
            .waitForElementPresent('.enter-location__input', 5000)
            .setValue('.enter-location__input', 'Istanbul')
            .click('button')
            .waitForElementPresent('h3[class=current-weather__location]', 5000)
            .expect.element('h3[class=current-weather__location]').text.to.equal('Istanbul')
        browser
        .expect.element('li[name="maxTemp"]').to.be.visible
        browser
        .expect.element('li[name="minTemp"]').to.be.visible
        browser
        .expect.element('li[name="wind"]').to.be.visible
        browser
        .expect.element('li[name="humidity"]').to.be.visible
        browser
            .click('button')
            .waitForElementPresent('button[class="enter-location__submit"]', 5000)
            .click('button')
            .waitForElementPresent('button[class="error-message__try-again"]', 5000)
            .expect.element('button[class="error-message__try-again"]').to.be.visible
            browser
         
    }
}