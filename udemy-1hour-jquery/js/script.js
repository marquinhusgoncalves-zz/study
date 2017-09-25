(function() {
  'use strict';
  // How to use jQuery
  // var tagElementh1 = $('h1');
  // var tagElementh2 = $('h2');
  // var tagElementBtn1 = $('#button1');
  // var tagElementBtn2 = $('#button2');

  // tagElementBtn1.click(function () {
  //   tagElementh1.fadeOut();
  // });

  // tagElementBtn2.click(function () {
  //   tagElementh1.fadeIn();
  // });

  // How to use jQuery and your methods
  // var tagElementBtn1 = $('#button1');
  // var tagElementBtn2 = $('#button2');
  // var tagElementBtn3 = $('#button3');

  // tagElementBtn1.click(function () {
  //   $('.tag-elements').fadeOut(2000);
  // });

  // tagElementBtn2.click(function () {
  //   $('.tag-elements').fadeIn(3000);
  // });

  // tagElementBtn3.click(function () {
  //   $('.tag-elements').toggle(1000);
  // });

  //How to use animation
  var tagElementBtn1 = $('#button1');
  var tagElementBtn2 = $('#button2');
  var tagElementBtn3 = $('#button3');
  var tagElementBtn4 = $('#button4');

  tagElementBtn1.click(function () {
    $('.tag-elements').animate({ opacity: .5 });
  });

  tagElementBtn2.click(function () {
    $('.square').animate({ left: '100px' }, 'slow');
  });

  tagElementBtn3.click(function () {
    $('.square').animate({ left: '0' }, 'fast')
  });

  tagElementBtn4.click(function () {
    $('.square').animate({
      height: '100px',
      width: '100px'
    }, 'slow');
  });

})();