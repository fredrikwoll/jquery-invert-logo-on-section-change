
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


function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}


$(document).scroll(function (e) {

      var $valueSectionOne = $('#section1').offset().top;
      var $valueSectionTwo = $('#section2').offset().top;
      var $valueSectionTree = $('#section3').offset().top;
      var docScroll = getScrollTop();


       if(docScroll > 0 && docScroll <= $valueSectionTwo){
          $('.logo2').hide();
          $('.logo1').show();
          return false;

        }
        if(docScroll >= $valueSectionTwo && docScroll <= $valueSectionTree){
           $('.logo1').hide();  
           $('.logo2').show();
          return false;
        }
        if(docScroll > $valueSectionTree){
           $('.logo2').hide();  
           $('.logo1').show();
          return false;           
        }
   			
  
});