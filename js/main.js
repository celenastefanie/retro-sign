var $btn = $('.btn');
var $lines = $('.lines');
var $engage = $('.engage');

$btn.on('click', function (e) {
  $btn.toggleClass('btn-click');
  $lines.toggleClass('add-lines');
  $btn.toggleClass('word-change');
});

$btn.on('mouseover', function (e) {
  $btn.toggleClass.children('path:last-child').css('fill', 'orange');
});
