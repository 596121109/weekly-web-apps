$('#scroll-top > button').on('click', function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}); // End click event
