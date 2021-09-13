let data = [
    '東京',
    '大阪',
    '京都',
    '鎌倉',
    '材木座',
    '大宮'
]

function initdata(){
    form = $('#answers')
    form.children().remove()

    for(var i=0;i<data.length;i++){
      span = $('<span>')
      span.css('padding','10px')
      input = $('<input>')
      input.attr('type','text')
      input.val(data[i])
      span.append(input)
      check = $('<span><a href="xxx">✖</a></span>')
      check.css('padding','10px')
      span.append(check)
      form.append(span)
    }
}
