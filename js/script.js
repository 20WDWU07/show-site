console.log('js');
$('nav').hide();

$(document).ready(function(){
$('#logo').click(function(){
  $('nav').show();
})

$('.top-nav-close,#galleryLink').click(function(){
  $('nav').hide();
});

});
