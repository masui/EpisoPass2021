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
    form = $('#answers')
    form.children().remove()

    for(var i=0;i<data.length;i++){
      span = $('<span>')
      span.attr('class','answer')
      input = $('<input>')
      input.attr('type','text')
      input.val(data[i])
      span.append(input)
      a = $('<a>')
      a.attr('href','xxxx')
      a.text('✖')
      check = $('<span>')
      check.append(a)
      check.attr('class','check')
      span.append(check)
      form.append(span)
    }
}
