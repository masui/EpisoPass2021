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
    '沖縄'
]

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
      let a = $('<a>')
         .attr('href','xxxx')
         .text('✖')
         .attr('class','check')
      //check = $('<span>')
      //check.append(a)
      //check.attr('class','check')
      //span.append(check)
      span.append(a)
      form.append(span)
    }
}
