(function() {
  'use strict';

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

  var tagElementBtn1 = $('#button1');
  var tagElementBtn2 = $('#button2');
  var tagElementBtn3 = $('#button3');

  tagElementBtn1.click(function () {
    $('.tag-elements').fadeOut(2000);
  });

  tagElementBtn2.click(function () {
    $('.tag-elements').fadeIn(3000);
  });

  tagElementBtn3.click(function () {
    $('.tag-elements').toggle(1000);
  });

})();