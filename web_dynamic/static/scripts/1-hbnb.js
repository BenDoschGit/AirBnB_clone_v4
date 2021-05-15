/* jQuery script that listens for changes on each INPUT checkbox tag*/
/* global $ */
$('document').ready(function () {
  let countChecked = function() {
    let selected = [];
    $('input:checked').each(function () {
      selected.push($(this).attr('amenity_id'));
    });
    if (selected.length == 0) {selected.append('&nbsp;')};
    $('DIV#selected').text(selected);
  countChecked();
  $('input[type=checkbox]').on('click', countChecked);
}});