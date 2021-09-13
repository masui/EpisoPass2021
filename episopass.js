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
let 問題リスト = [
    '公園でコケたのは?',
    '床屋の世話になったのは',
    'メガネをなくしたのは?',
    'ミサホちゃんの出身は?'
]

//function n個目の答を削除する関数(n,リスト,リストdiv,クラス,改行あり){
function n個目の答を削除する関数(n,属性){
    return function(){
	属性.リスト.splice(n,1)
	リスト表示(属性)
    }
}

function n個目の答を登録する関数(n,属性){
    return function(e){
	属性.リスト[n] = e.target.value
	リスト表示(属性)
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

function リスト表示(属性){
    重複と空エントリを削除(属性.リスト)
    let フォーム = $('#' + 属性.フォームid)
    フォーム.children().remove()
    
    for(var i=0;i<属性.リスト.length;i++){
	let エントリ = $('<span>')

	$('<input>')
            .attr('type','text')
            .attr('class',属性.クラス)
            .val(属性.リスト[i])
	    .appendTo(エントリ)
	    .on('change',n個目の答を登録する関数(i,属性))
	
	$('<span>')
	    .text('✖')
	    .attr('class','check')
	    .on('click',n個目の答を削除する関数(i,属性))
	    .appendTo(エントリ)

	フォーム.append(エントリ)

	if(属性.改行あり){
	    フォーム.append($('<br/>'))
	}
    }

    let エントリ = $('<span>')

    $('<input>')
        .attr('type','text')
        .attr('class',属性.クラス)
        .attr('placeholder','(追加)')
	.appendTo(エントリ)
	.on('change',n個目の答を登録する関数(i,属性))

    フォーム.append(エントリ)
}
