module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser.end()
    },
    // This test searches a zip code.
    'check search': browser => {
        browser
            .setValue('input', '84065')
            .click('button')
            .waitForElementPresent('.current-weather__location', 5000)
            // .verify.containsText('.current-weather__location', 'Salt Lake City')
            .expect.element('.current-weather__location').text.to.equal('Salt Lake City')
    }
}