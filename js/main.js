$(document).ready(function(){
  
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu 
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });



  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#2c3e50', '#c0392b', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: true,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

  



    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
      }
    } 
  }); 
});