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

function n個目の答を削除する関数(n,リスト){
    return function(){
	リスト.splice(n,1)
	リスト表示(リスト)
    }
}

function n個目の答を登録する関数(n,リスト){
    return function(e){
	リスト[n] = e.target.value
	リスト表示(リスト)
    }
}

function 重複と空エントリを削除(リスト){
    let 新リスト = []
    for(var i=0;i<リスト.length;i++){
	let 項目 = リスト[i]
	if(項目 != '' && ! 新リスト.includes(項目)){
	    新リスト.push(項目)
	}
    }
    リスト.length = 0 // 配列を削除
    for(var i=0;i<新リスト.length;i++){
	リスト[i] = 新リスト[i]
    }
}

function リスト表示(リスト){
    重複と空エントリを削除(リスト)
    let リストdiv = $('#answers')
    リストdiv.children().remove()
    
    for(var i=0;i<リスト.length;i++){
	let エントリ = $('<span>')

	$('<input>')
            .attr('type','text')
            .attr('class','answerinput')
            .val(リスト[i])
	    .appendTo(エントリ)
	    .on('change',n個目の答を登録する関数(i,リスト))
	
	$('<span>')
	    .text('✖')
	    .attr('class','check')
	    .on('click',n個目の答を削除する関数(i,リスト))
	    .appendTo(エントリ)

	リストdiv.append(エントリ)
    }

    let エントリ = $('<span>')

    $('<input>')
        .attr('type','text')
        .attr('class','answerinput')
        .attr('placeholder','(追加)')
	.appendTo(エントリ)
	.on('change',n個目の答を登録する関数(i,リスト))

    リストdiv.append(エントリ)
}


