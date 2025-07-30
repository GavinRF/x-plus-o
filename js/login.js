var $modal = $('#modal');
var $modal2 = $('#modal2')

$('#small').click(function(){
  if($modal.hasClass('animate')){
    $('#modal').removeClass('animate');
    $('#modal').addClass('animate2');
    $('#modal2').addClass('etamina');
    $('#modal2').removeClass('etamina2');
  }else{
    $('#modal').addClass('animate');
    $('#modal').removeClass('animate2');
    $('#modal2').addClass('etamina');
    $('#modal2').removeClass('etamina2');
  };
  
});
//////////////////////////////////////
$('#small2').click(function(){
  if($modal.hasClass('animate')){
    $('#modal').removeClass('animate');
    $('#modal').addClass('animate2');
    $('#modal2').removeClass('etamina');
    $('#modal2').addClass('etamina2');
  }else{
    $('#modal').addClass('animate');
    $('#modal').removeClass('animate2');
    $('#modal2').removeClass('etamina2');
    $('#modal2').addClass('etamina');
  };
});