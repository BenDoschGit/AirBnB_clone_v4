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
  $.get('http://0.0.0.0:5001/api/v1/status/', function (isokay) {
    if ((isokay.status) === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  /* <article>
<div class="title_box">
      <h2></h2>
  <div class="price_by_night"></div>
</div>
<div class="information">
  <div class="max_guest"></div>
  <div class="number_rooms"></div>
  <div class="number_bathrooms"></div>
</div>
<div class="user">
  <b>Owner:</b>
</div>
<div class="description">
</div>
</article> */
  const criteria = '';
  $.ajax(
    {
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      data: JSON.stringify(criteria),
      dataType: 'json',
      contentType: 'application/json',
      success: function (getallplaces) {
        getallplaces.forEach(function () {
          $('section.places').append(`<article>
        <div class="title_box">
      <h2>` + $(this.name) + `</h2>
        <div class="price_by_night">` + $(this.price_by_night) + `</div>
      </div>
      <div class="information">
        <div class="max_guest">` + $(this.max_guest) + `</div>
        <div class="number_rooms">` + $(this.number_rooms) + `</div>
        <div class="number_bathrooms">` + $(this.number_bathrooms) + `</div>
      </div>
      <div class="user">
        <b>Owner:` + $(this.user_id) + `</b>
      </div>
      <div class="description">` + $(this.description) +
      `</div>
      </article>)`);
        });
      }
    });
});
