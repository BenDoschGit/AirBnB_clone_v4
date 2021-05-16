/* jQuery script that listens for changes on each INPUT checkbox tag*/
/* global $ */
$('document').ready(function () {
  selected = []
  $('li input').click( function () {
    if ($(this).prop('checked') == true) {
      selected.push($(this).attr('data-name'));
    } else {
      delete selected.pop($(this).attr('data-name'));
    }
    if (selected.length == 0) {
        $('#selected').html('&nbsp;')
    }
    else {
    $('#selected').text(selected.join(', '));
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (isokay) {
    if ((isokay.status) == 'OK') {
      $('DIV#api_status').addClass('available');
      alert($('DIV#api_status').attr('class'));
    } else {
      $('DIV#api_status').removeClass('available')
      alert('Removing class');
      };
  });
});
