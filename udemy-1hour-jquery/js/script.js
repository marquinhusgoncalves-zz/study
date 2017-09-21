(function() {
  'use strict';

  var tagElementh1 = $('h1');
  var tagElementh2 = $('h2');
  var tagElementBtn = $('button');

  tagElementBtn.click(function () {
    tagElementh1.fadeOut();
  });

})();