describe('EpisoPass', () => {
    beforeAll(async () => {
	await page.goto('https://episopass.com');
    });
    
    test('ページのタイトルが「EpisoPass」', async () => {
	await expect(page.title()).resolves.toMatch('EpisoPass');
    });
});
