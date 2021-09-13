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
const 県名リスト = [
    '北海道',
    '青森', '岩手', '宮城', '秋田', '山形', '福島','茨城',
    '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
    '新潟', '富山', '石川', '福井',
    '山梨', '長野', '岐阜', '静岡', '愛知','三重',
    '滋賀', '京都', '大阪', '兵庫', '奈良','和歌山',
    '鳥取', '島根', '岡山', '広島','山口',
    '徳島', '香川', '愛媛', '高知',
    '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎','鹿児島',
    '沖縄'
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

function ランダムに県名を追加(){
    let 未登録の県名リスト  = 県名リスト.filter(item => !回答リスト.includes(item))
    let 未登録の県名の数 = 未登録の県名リスト.length
    if(未登録の県名の数 == 0) return
    let 新たに登録する県 = 未登録の県名リスト[Math.floor(Math.random() * 未登録の県名の数)]
    回答リスト.push(新たに登録する県)
    リスト表示({リスト:回答リスト, フォームid:'answers', クラス:'answerinput', 改行あり:false});
}
