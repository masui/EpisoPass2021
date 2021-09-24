//
// EpisoPass.comがちゃんと動くかテストしたいのだが
// そんなことできるのだろうか?
//

describe('EpisoPass.comのテスト', () => {
    beforeAll(async () => {
	await page.goto('https://episopass.com');
    });
    
    test('ページのタイトルが「EpisoPass」', async () => {
	await expect(page.title()).resolves.toMatch('EpisoPass');
    });
});
