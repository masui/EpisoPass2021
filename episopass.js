
$(function() {
    リスト表示({リスト:回答リスト, フォームid:'answers', クラス:'answerinput', 改行あり:false});
    リスト表示({リスト:問題リスト, フォームid:'questions', クラス:'qinput', 改行あり:true});
    console.log( "ready!" );
});

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

function ランダムに回答を追加(リスト){
    let 未登録のリスト  = リスト.filter(item => !回答リスト.includes(item))
    let 未登録のデータの数 = 未登録のリスト.length
    if(未登録のデータの数 == 0) return
    let 新たに登録するデータ = 未登録のリスト[Math.floor(Math.random() * 未登録のデータの数)]
    回答リスト.push(新たに登録するデータ)
    リスト表示({リスト:回答リスト, フォームid:'answers', クラス:'answerinput', 改行あり:false});
}

function ランダムに問題を追加(){
    let 未登録のリスト  = 問題例リスト.filter(item => !問題リスト.includes(item))
    let 未登録のデータの数 = 未登録のリスト.length
    if(未登録のデータの数 == 0) return
    let 新たに登録するデータ = 未登録のリスト[Math.floor(Math.random() * 未登録のデータの数)]
    問題リスト.push(新たに登録するデータ)
    リスト表示({リスト:問題リスト, フォームid:'questions', クラス:'qinput', 改行あり:true});
}

function 重みづけ都市選択(){ // 人口の多い都市ほど選ばれやすくする
    let 総人口 = 0
    for(var i=0;i<都市リスト.length;i++){
	総人口 += 都市リスト[i][1]
    }
    let 何人目か = Math.floor(Math.random() * 総人口)
    let 人口総和 = 0
    for(var i=0;i<都市リスト.length;i++){
	人口総和 += 都市リスト[i][1]
	if(人口総和 > 何人目か){
	    return 都市リスト[i][0]
	}
    }
    return '横浜'
}

function 重みづけランダムに都市を追加(){
    let 都市
    for(var i=0;i<1000;i++){
	都市 = 重みづけ都市選択()
	if(!回答リスト.includes(都市)){
	    回答リスト.push(都市)
	    リスト表示({リスト:回答リスト, フォームid:'answers', クラス:'answerinput', 改行あり:false});
	    break;
	}
    }
}



