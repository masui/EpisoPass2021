let data = [
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

function clickn(n){
    return function(){
	data.splice(n,1)
	initdata()
    }
}

function initdata(){
    let form = $('#answers')
    form.children().remove()
    
    for(var i=0;i<data.length;i++){
	let span = $('<span>')
	let input = $('<input>')
            .attr('type','text')
            .attr('class','answerinput')
            .val(data[i])
	span.append(input)
	let a = $('<span>')
            .text('✖')
	    .attr('class','check')
	a.on('click',clickn(i))
	     
	/*
	  let checkspan = $('<span>')
          .attr('class','check')
	  checkspan.append(a)
	*/
	
	//check = $('<span>')
	//check.append(a)
	//check.attr('class','check')
	//span.append(check)
	span.append(a)
	form.append(span)
    }
}
