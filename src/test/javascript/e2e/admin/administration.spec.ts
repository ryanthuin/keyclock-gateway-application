import { browser, element, by } from 'protractor';

import { NavBarPage, SignInPage } from '../page-objects/jhi-page-objects';

describe('administration', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage(true);
        signInPage = await navBarPage.getSignInPage();
        await signInPage.loginWithOAuth('admin', 'admin');
    });

    beforeEach(async () => {
        await navBarPage.clickOnAdminMenu();
    });

    it('should load metrics', async () => {
        await navBarPage.clickOnAdmin('jhi-metrics');
        const expect1 = /metrics.title/;
        const value1 = await element(by.id('metrics-page-heading')).getAttribute('jhiTranslate');
        expect(value1).toMatch(expect1);
    });

    it('should load health', async () => {
        await navBarPage.clickOnAdmin('jhi-health');
        const expect1 = /health.title/;
        const value1 = await element(by.id('health-page-heading')).getAttribute('jhiTranslate');
        expect(value1).toMatch(expect1);
    });

    it('should load configuration', async () => {
        await navBarPage.clickOnAdmin('jhi-configuration');
        const expect1 = /configuration.title/;
        const value1 = await element(by.id('configuration-page-heading')).getAttribute('jhiTranslate');
        expect(value1).toMatch(expect1);
    });

    it('should load audits', async () => {
        await navBarPage.clickOnAdmin('audits');
        const expect1 = /audits.title/;
        const value1 = await element(by.id('audits-page-heading')).getAttribute('jhiTranslate');
        expect(value1).toMatch(expect1);
    });

    it('should load logs', async () => {
        await navBarPage.clickOnAdmin('logs');
        const expect1 = /logs.title/;
        const value1 = await element(by.id('logs-page-heading')).getAttribute('jhiTranslate');
        expect(value1).toMatch(expect1);
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
