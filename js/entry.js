import $ from 'jquery';
import 'magnific-popup';

var jqVersion = $().jquery;

$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true
  }
});

$('#jq-version').text(jqVersion);
