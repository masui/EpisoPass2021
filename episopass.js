let 回答リスト = [
    '東京',
    '大阪',
    '京都',
    '鎌倉',
    '材木座',
    '大宮',
    '北海道',
    '福島',
    '福岡',
    '熊本',
    '沖縄'
]

function n個目の答を削除する関数(n){
    return function(){
	回答リスト.splice(n,1)
	回答リスト表示()
    }
}

function n個目の答を登録する関数(n){
    return function(e){
	回答リスト[n] = e.target.value
	回答リスト表示()
    }
}

function 重複を削除(リスト){
    let 新しいリスト = []
    for(var i=0;i<リスト.length;i++){
	let 項目 = リスト[i]
	if(項目 != '' && ! 新しいリスト.includes(項目)){
	    新しいリスト.push(項目)
	}
    }
    return 新しいリスト
}

function 回答リスト表示(){
    回答リスト = 重複を削除(回答リスト)
    let 回答リストdiv = $('#answers')
    回答リストdiv.children().remove()
    
    for(var i=0;i<回答リスト.length;i++){
	let 答エントリ = $('<span>')

	$('<input>')
            .attr('type','text')
            .attr('class','answerinput')
            .val(回答リスト[i])
	    .appendTo(答エントリ)
	    .on('change',n個目の答を登録する関数(i))
	
	$('<span>')
	    .text('✖')
	    .attr('class','check')
	    .on('click',n個目の答を削除する関数(i))
	    .appendTo(答エントリ)

	回答リストdiv.append(答エントリ)
    }
}
