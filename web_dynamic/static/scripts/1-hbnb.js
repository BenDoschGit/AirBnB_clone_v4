/* jQuery script that listens for changes on each INPUT checkbox tag*/
/* global $ */
$('document').ready(function () {
  $('li input').click( function () {
    alert("js is working");
    let selected = [];
    $('input:checked').each(function () {
      selected.append($(this).attr('data-name'));
    });
    if (selected.length == 0) {selected.append('&nbsp;')};
    $('#selected').text(selected);
  });
});
