var app = function(){
  
  $('.login').click(function(){
    
    $('.dropdown-menu').toggle();
    
  });
  
  $(function() {
    $( "#accordion" ).accordion();
  });
  
};

$(document).ready(app);