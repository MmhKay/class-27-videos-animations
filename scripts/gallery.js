/* When the thumbnail button clicked, show one figure, hide the others. */
$('#gallery-thumb1').click(function () {
  /* show one figure, hide the others */
  $('#gallery-figure1').removeClass('hidden');
  $('#gallery-figure2').addClass('hidden');
  $('#gallery-figure3').addClass('hidden');
})

/* When the thumbnail button clicked, show one figure, hide the others. */
$('#gallery-thumb2').click(function () {
  /* show one figure, hide the others */
  $('#gallery-figure1').addClass('hidden');
  $('#gallery-figure2').removeClass('hidden');
  $('#gallery-figure3').addClass('hidden');
})
