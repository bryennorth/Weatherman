module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser.end()
    },
    // This test runs empty search then clicks to start back over again.
    'check search': browser => {
        browser
            .click('button')
            .waitForElementPresent('.error-message__message', 5000)
            // .verify.containsText('.error-message__message', 'Carson City')
            .expect.element('.error-message__message').text.to.equal('There was a problem fetching the weather!')
        browser
            .click('button')
            .waitForElementPresent('.enter-location__input', 5000)
            // .verify.enter-locations__input)
                // This test Checks that Weatherman generated Max, Min, Wind and Humidity
            .setValue('input', 'Riverton')
            .click('button')
            .waitForElementPresent('.current-weather__location', 5000)
            // .verify.containsText('.current-weather__location', 'Riverton')
            .expect.element('.current-weather__location').text.to.equal('Riverton')
            browser
            .expect.element('li[name="maxTemp"]').to.be.visible
            browser
            .expect.element('li[name="minTemp"]').to.be.visible
            browser
            .expect.element('li[name="wind"]').to.be.visible
            browser
            .expect.element('li[name="humidity"]').to.be.visible
            browser
    }
}