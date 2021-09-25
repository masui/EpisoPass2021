//
// EpisoPass.comのテスト
//

describe('EpisoPassのテスト', () => {
    it('EpisoPass.comにアクセスしてデフォルト問題をチェック', () => {
	cy.visit('https://EpisoPass.com')
	cy.get('#editbutton').click('center')

	cy.get('#seed')
	    .should('have.value', 'EpisoPass_123456')
	    .clear()
	    .type('EpisoPass_123456')
	    .should('have.value', 'EpisoPass_123456')
	cy.get('#pass')
	    .should('have.value', 'JuxtyNblx.093247')
	    // .should('have.value', 'JuxtyNbld=413067')
	
	cy.get('#dasbutton').click('center')
	cy.get('#dmid0').click('center')
	cy.get('#dmid0').click('center')
	cy.get('#dmid0').click('center')

	cy.get('#id0').should('contain', '東京')
	cy.get('#id0').click('center')
	cy.get('#id0').click('center')
	cy.get('#id0').click('center')

	cy.get('#passspan').should('have.value', 'JuxtyNblx.093247')
    })

    it('長い問題のテスト', () => {
	// EpisoQの引数だが何故かUTFが使えない
	cy.visit("https://episopass.com/episopass.html?questions=%E3%83%93%E3%83%95%E3%83%86%E3%82%AD%E3%82%92%E3%81%8A%E3%81%8B%E3%82%8F%E3%82%8A%E3%81%97%E3%81%9F%E3%81%AE%E3%81%AF?;%E6%B4%8B%E8%8F%93%E5%AD%90%E5%B1%8B%E3%81%A7%E3%82%AA%E3%83%8A%E3%83%A9%E3%81%99%E3%82%8B%E3%81%AE%E3%81%AF?;%E5%90%8A%E6%A9%8B%E3%81%8C%E6%80%96%E3%81%84%E3%81%AE%E3%81%AF?;%E6%84%8F%E5%A4%96%E3%81%A8%E3%82%AB%E3%83%84%E3%82%AB%E3%83%AC%E3%83%BC%E3%81%8C%E7%BE%8E%E5%91%B3%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%AE\%E3%81%AF?;%E3%83%87%E3%82%AB%E3%81%84%E7%9F%B3%E3%81%8C%E5%89%B2%E3%82%8C%E3%81%A6%E3%82%8B%E3%81%AE%E3%81%AF?;%E9%BA%BB%E9%9B%80%E3%81%95%E3%81%9B%E3%82%89%E3%82%8C%E3%81%9F%E3%81%AE%E3%81%AF?;Google%E9%81%93%E6%A1%88%E5%86%85%E3%81%AB%E9%A8%99%E3%81%95%E3%82%8C%E3%81%9F%E3%81%AE%E3%81%AF?;K%E5%90%9B%E3%81%8C%E5%B7%9D%E3%81%AB%E8%90%BD%E3%81%A1%E3%82%8B%E3%81%AE%E3%81%AF?;%E3%83%9E%E3%82%B5%E3%82%B3%E3%81%AE%E5%AE%B6%E3%81%AF?;%E5%8C%85%E4%B8%81%E5%A3%B2%E3%81%A3%E3%81%A6%E3%81%9F%E3%81%AE%E3%81%AF?&answers=%E5%8C%97%E6%B5%B7%E9%81%93;%E9%9D%92%E6%A3%AE;%E5%B2%A9%E6%89%8B;%E5%AE%AE%E5%9F%8E;%E7%A7%8B%E7%94%B0;\\%E5%B1%B1%E5%BD%A2;%E7%A6%8F%E5%B3%B6;%E8%8C%A8%E5%9F%8E;%E6%A0%83%E6%9C%A8;%E7%BE%A4%E9%A6%AC;%E5%9F%BC%E7%8E%89;%E5%8D%83%E8%91%89;%E6%9D%B1%E4%BA%AC;%E7%A5%9E%E5%A5%88%E5%B7%9D;%E6%96%B0%E6%BD%9F;%E5%AF%8C%E5%B1%B1;%E7%9F%B3%E5%B7%9D;%E7%A6%8F%E4%BA%95;%E5%B1%B1%E6%A2%A8;%E9%95%B7%E9%87%8E;%E5%B2%90%E9%98%9C;%E9%9D%99%E5%B2%A1;%E6%84%9B%E7%9F%A5;%E4%B8%89%E9%87%8D;%E6%BB%8B%E8%B3%80;%E4%BA%AC%E9%83%BD;%E5%A4%A7%E9%98%AA;%E5%85%B5%E5%BA%AB;%E5%A5%88%E8%89%AF;%E5%92%8C%E6%AD%8C%E5%B1%B1;%E9%B3%A5%E5%8F%96;%E5%B3%B6%E6%A0%B9;%E5%B2%A1%E5%B1%B1;%E5%BA%83%E5%B3%B6;%E5%B1%B1%E5%8F%A3;%E5%BE%B3%E5%B3%B6;%E9%A6%99%E5%B7%9D;\\%E6%84%9B%E5%AA%9B;%E9%AB%98%E7%9F%A5;%E7%A6%8F%E5%B2%A1;%E4%BD%90%E8%B3%80;%E9%95%B7%E5%B4%8E;%E7%86%8A%E6%9C%AC;%E5%A4%A7%E5%88%86;%E5%AE%AE%E5%B4%8E;%E9%B9%BF%E5%85%90%E5%B3%B6;%E6%B2%96%E7%B8%84")
	cy.get('#editbutton').click('center')
	cy.get('#dasbutton').click('center')

	// 左上のボタンを10回クリック
	for(var i=0;i<10;i++){
	    cy.get('#dmid0').click('center')
	}
	for(var i=0;i<10;i++){
	    cy.get('#id0').click('center')
	}

	cy.get('#passspan').should('have.value', 'RnccdDlbyRkwa71876')
    })
})
