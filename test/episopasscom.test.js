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

    test('大阪', async () => {
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
	    //return document.querySelector(selector).textContent;
	    return document.querySelector(selector).innerHTML;
	}, '#id0')

    	expect(data).toMatch('東京')

	await page.click('#id0');

	data = await page.evaluate((selector) => {
	    //return document.querySelector(selector).textContent;
	    return document.querySelector(selector).innerHTML;
	}, '#id0')

    	expect(data).toMatch('東京')

	await page.click('#id0');

	data = await page.evaluate((selector) => {
	    //return document.querySelector(selector).textContent;
	    return document.querySelector(selector).value;
	}, '#passspan')

    	//expect(data).toMatch('NoockKzbh[543589')
	console.log(data)
	// JuxtyNbld=413067
	console.log(seed)
    })

    //console.log(page.$('#answer0-1'))
    
    //test('aomori', async () => {
    //	await expect(page.$('#answer0-1').value).toMatch('青森')
    //})
});
