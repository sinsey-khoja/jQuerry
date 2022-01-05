// document.body.addEventListener('keydown', (e)=> console.log(e.key))
$('.ask').on('click', function(event) {
  event.preventDefault();
  $('.ask').not(this).removeClass('active').next().slideUp(300)
  $(this).toggleClass('active').next().slideToggle(300)
})

$('.js-filter').click(function () {
  let attr = $(this).attr('data-filter')

  $(`div[data-filter=${attr}]`).slideDown(300)
  if (attr == 'all') {
    $(`div[data-filter`).slideDown(300) 
  } else {
    $(`div[data-filter]`).not(`div[data-filter=${attr}]`).slideUp(300)
  }
})



function typing(elelemt) {
  let inner = elelemt.html(), fullText = ``, i = 0,
  interval = setInterval(() => {
    fullText += inner[i]
    i++
    elelemt.html(fullText)
    if(fullText == inner) {
      clearInterval(interval)
    }
  }, 110)
}

typing($('h1'))





