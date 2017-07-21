
/////Pop-Up for Icons////

$('.profiles').mouseleave
  (function(){
    $(".modal-body").hide();
  });
$('.profiles').mouseenter
  (function () {
    $(".modal-body").show();
    $(this).hover(".profiles");
    
  }); 
