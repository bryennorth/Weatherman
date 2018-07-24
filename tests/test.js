module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser.end()
    },
    // This test searches a city and state.
    'check search': browser => {
        browser
            .setValue('input', 'Carson City, Nevada')
            .click('button')
            .waitForElementPresent('.current-weather__location', 5000)
            // .verify.containsText('.current-weather__location', 'Carson City')
            .expect.element('.current-weather__location').text.to.equal('Carson City')
    }
}