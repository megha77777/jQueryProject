$(document).ready(function () {
  // Your jQuery code here
  console.log('hey i am jQuery');
  $('#inp').change(function () {
    var input = $(this).val();
    $('ul').append(
      '<li>' +
        input +
        '<i class="fas fa-check right"></i> <i class="fa-solid fa-trash"></i> </li>'
    );
    $(this).val('');
  });
  $('ul').on('click', '.fa-trash', function () {
    $(this).parent('li').fadeOut(500);
  });
  $('ul').on('click', '.fa-check', function () {
    $(this).parent('li').toggleClass('checked');
  });
  // $('ul').click(function () {
  //   $(this).children('li').toggleClass('checked');
  // });
});
