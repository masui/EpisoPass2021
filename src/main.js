//
// EpisoPassの入口
//

$ = require("./jquery.js")
editor = require("./editor.js")
episodas = require("./episodas.js")
crypt = require("./crypt.js")
dasmaker = require("./dasmaker.js")
episodb = require("./episodb.js")
lib = require("./lib.js")
dastemplate = require("./dastemplate.js")

data = {
    "name": "EpisoPass_masui@pitecan.com",
    "seed": "EpisoPass_123456",
    "qas": []
}
db = require("./sampledb.json")

// localStorageに問題データベースがあれば取得
// (前回のデータが使われることになる)
let localdbstr = localStorage.getItem('EpisoDB')
if(localdbstr){
    let localdb = JSON.parse(localdbstr)
    db.問題リスト= localdb.questions
    db.回答リスト= localdb.answers
}

episodb.EpisoPassデータ作成()

if(location.search[0] == '?'){ // 引数解釈
    let pair = location.search.substring(1).split('&');
    for(var i=0; pair[i]; i++){
	var kv = pair[i].split('=');
	if(kv[0] == 'questions'){
	    questions = decodeURIComponent(kv[1]).split(/;/)
	}
	if(kv[0] == 'answers'){
	    answers = decodeURIComponent(kv[1]).split(/;/)
	}
    }
    let qas = []
    for(let i=0;i<questions.length;i++){
	let obj = {}
	obj['question'] = questions[i]
	obj['answers'] = answers
	qas.push(obj)
    }
    data = {}
    data['name'] = 'EpisoPass'
    data['seed'] = 'EpisoPassSeed01234'
    data['qas'] = qas
}

// ボタンの挙動設定
$("#descbutton").click(() => lib.lib.show('#description'))
$("#editbutton").click(() => editor.editor())
$("#dasbutton").off() // 何度も登録されて困った
$("#dasbutton").click(() => dasmaker.dasmaker(data,editor.answer()))
$("#episodbbutton").click(() => episodb.episodb())

lib.lib.show('#description')
// editor.editor(data)
