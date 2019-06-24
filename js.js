$(function(){
  var downloadPlace = $("#downloadPlace");
  var btn = $(".downloadByozo");
  var show = false;
  downloadPlace.hide();
  btn.on('click',function(){
    downloadPlace.fadeIn(); 
    $('.container').css('opacity','0.4');
    show = true; 
  })
  $('#downloadPlace svg').on('click',function(){
    if(show){
      downloadPlace.fadeOut();
      $('.container').css('opacity','1')
      show = false;
    }

  })
})