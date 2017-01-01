
$('body').animate({ scrollTop: $anchor.top }, 1000);

$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    
return false;
});


var jumboHeight = $('.jumbotron').outerHeight();

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.bg').css('height', (jumboHeight - scrolled) + 'px');

}

$(window).scroll(function(e) {
  parallax();
});

