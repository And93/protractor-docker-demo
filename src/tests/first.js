const {browser} = require('protractor');

describe('angularjs homepage todo list', () => {
    it('should add a todo', async () => {
        await browser.get('https://angular.io/');
        console.log(await browser.getCapabilities());
        await browser.sleep(600000);
    });
});
