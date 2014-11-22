
/*
 *
 *   By Fredrikwoll <https://github.com/fredrikwoll>.
 *   This code is released in the public domain under GPL 2.0.
 *
 */


$(document).ready(function () {
  $('.logo1').show();
  $('.logo2').hide();
  
});
$(document).scroll(function (e) {

      var $valueSectionOne = $('#section1').offset().top;
      var $valueSectionTwo = $('#section2').offset().top;
      var $valueSectionTree = $('#section3').offset().top;
      var docScroll = document.body.scrollTop;


       if(docScroll > 0 && docScroll <= $valueSectionTwo){
          $('.logo2').hide();
          $('.logo1').show();
        }
        if(docScroll >= $valueSectionTwo && docScroll <= $valueSectionTree){
           $('.logo1').hide();  
           $('.logo2').show();
        }
        if(docScroll > $valueSectionTree){
           $('.logo2').hide();  
           $('.logo1').show();
        }
   			
  
});