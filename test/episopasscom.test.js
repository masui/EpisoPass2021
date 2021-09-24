//
// EpisoPass.comがちゃんと動くかのテスト
// デフォルトのQ/AでDAS生成までチェック
// (Jest環境からEpisoPass.comにアクセスするとデフォルトの問題が使われる)
//
// jest-puppeteerというのを使う
// 何故かnpmでは入らなかったのでyarnで入れる
//

describe('EpisoPass.comのテスト', () => {
    beforeAll(async () => {
	await page.goto('https://episopass.com');
    })
    
    test('ページのタイトルが「EpisoPass」', async () => {
	await expect(page.title()).resolves.toMatch('EpisoPass');
    });

    test('デフォルト問題で正しいパスワード生成するかチェック', async () => {
	await page.click('#editbutton');

	var data;

	// $('#seed')の値を取得
	// もう少し簡潔な記法があるのかも
	var seed = await page.evaluate((selector) => {
	    return document.querySelector(selector).value;
	}, '#seed')

    	expect(seed).toMatch('EpisoPass_123456')
	
	data = await page.evaluate((selector) => {
	    return document.querySelector(selector).value;
	}, '#answer0-1')

    	expect(data).toMatch('大阪')

	// DAS作成ページに移動
	await page.click('#dasbutton');

	// 左上のボタンを3回クリック
	await page.click('#dmid0');
	await page.click('#dmid0');
	await page.click('#dmid0');

	data = await page.evaluate((selector) => {
	    return document.querySelector(selector).innerHTML;
	}, '#id0')
	// 「東京」になっていることを確認
    	expect(data).toMatch('東京')

	// 左上のボタンをクリック
	await page.click('#id0');

	data = await page.evaluate((selector) => {
	    return document.querySelector(selector).innerHTML;
	}, '#id0')
    	expect(data).toMatch('東京')

	await page.click('#id0');

	data = await page.evaluate((selector) => {
	    return document.querySelector(selector).innerHTML;
	}, '#id0')
    	expect(data).toMatch('東京')

	await page.click('#id0');

	data = await page.evaluate((selector) => {
	    return document.querySelector(selector).value;
	}, '#passspan')

	// 東京を3回選んだとき生成されるパスワードのチェック
    	expect(data).toMatch('JuxtyNbld=413067')
    })
});
