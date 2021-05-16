/* jQuery script that listens for changes on each INPUT checkbox tag */
/* global $ */
$('document').ready(function () {
  const selected = [];
  $('li input').click(function () {
    if ($(this).prop('checked') === true) {
      selected.push($(this).attr('data-name'));
    } else {
      delete selected.pop($(this).attr('data-name'));
    }
    if (selected.length === 0) {
      $('#selected').html('&nbsp;');
    } else {
      $('#selected').text(selected.join(', '));
    }
  });
});
