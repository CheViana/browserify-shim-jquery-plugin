var $ = require('jquery')
  , jqVersion = $().jquery;

require('magnific-popup');

$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true
  }
});

$('#jq-version').text(jqVersion);
