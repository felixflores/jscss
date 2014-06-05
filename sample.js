var styles = function(n) {
  function colors() {
    return ['red', 'orange', 'yellow', 'green', 'violet', 'indigo', 'blue'][_.random(0,6)];
  }

  function sizes() {
    return _.random(22, 50) + 'px';
  }

  function selectors(i) {
    return ' .dot-' + i;
  }

  function properties() {
    return {
      color: colors(),
      'font-size': sizes()
    };
  }

  var dotStyles = _.object(_.times(n, selectors), _.times(n, properties));
  return { '#dots' : dotStyles };
}

$(function() {
  var numberOfDots = 700;

  addDots(numberOfDots);

  setInterval(function() {
    inject(jscss.compile(styles(numberOfDots)));
  }, 50);

  function inject(css) {
    if ($('head style').length === 0) $('head').append('<style></style>');
    $('head style').html(css);
  }

  function addDots(n) {
    _.times(n, function(i) {
      $dots = $('#dots');

      $dots.append('<span class="dot-' + i + '">.</span>');

      if ((i+1) % 100 === 0) {
        $dots.append('<br />');
      }
    });
  }
});
