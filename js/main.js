
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
  });

  // Or with jQuery
      
  $(document).ready(function(){
    $('.carousel').carousel();
////
    $("#bmw-btn").click(function(){
      console.log ("click")
      $(".bmw-tit").toggle();
      $(".bmw-p").toggle();
      $(".bmw-img").toggle();
    });

    $("#por-btn").click(function(){
      console.log ("click")
      $(".por-tit").toggle();
      $(".por-p").toggle();
      $(".por-img").toggle();
    });

    $("#nis-btn").click(function(){
      console.log ("click")
      $(".nis-tit").toggle();
      $(".nis-p").toggle();
      $(".nis-img").toggle();
    });





  });
















//function main() {
 // return 'Hello, World!';
//}

//main();

  // Photo galary

   // $('#Pro').click(function(){
   //   $('.columnPor').show()
   // });

// END //