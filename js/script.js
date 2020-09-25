console.log('js');
$('nav').hide();

$(document).ready(function(){
$('#logo').click(function(){
  $('nav').show();
})

$('.top-nav-close, #homeLink, #coffeeLink, #galleryLink, #studyLink').click(function(){
  $('nav').hide();
});

});
