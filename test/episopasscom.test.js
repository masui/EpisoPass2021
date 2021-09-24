//
// EpisoPass.comがちゃんと動くかのテスト
// デフォルトのQ/AでDAS生成までチェック
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

	//var item = await page.$('#answer0-1');
	//console.log(item.innerHTML)

	var data;

	var seed = await page.evaluate((selector) => {
	    //return document.querySelector(selector).textContent;
	    return document.querySelector(selector).value;
	}, '#seed')

    	expect(seed).toMatch('EpisoPass_123456')
	
	data = await page.evaluate((selector) => {
	    //return document.querySelector(selector).textContent;
	    return document.querySelector(selector).value;
	}, '#answer0-1')

    	expect(data).toMatch('大阪')

	/*
	var item = await page.$('#answer0-1')
	//console.log(await (await item.getProperty('value')))
	console.log(await (await item.value))
	
	//var data2 = await (await item.value
	//var data = await (await item.getProperty('textContent')).jsonValue();
	*/

	await page.click('#dasbutton');
	
	await page.click('#dmid0');
	await page.click('#dmid0');
	await page.click('#dmid0');

	data = await page.evaluate((selector) => {
	    //return document.querySelector(selector).textContent;
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
	    return document.querySelector(selector).innerHTML;
	}, '#id0')

    	expect(data).toMatch('東京')

	await page.click('#id0');

	data = await page.evaluate((selector) => {
	    return document.querySelector(selector).value;
	}, '#passspan')

    	expect(data).toMatch('JuxtyNbld=413067')

	//console.log(data)
	// JuxtyNbld=413067
	//console.log(seed)
    })

});
