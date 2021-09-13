let data = [
    '東京',
    '大阪'
]

function initdata(){
    form = $('#answers')
    form.children().remove()

    span = $('<span>')
    span.css('padding','10px')
    input = $('<input>')
    input.attr('type','text')
    input.val('東京')
    span.append(input)
    check = $('<span><a href="xxx">✖</a></span>')
    span.append(check)
    form.append(span)
}
