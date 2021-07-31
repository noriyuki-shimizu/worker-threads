var ProgressBar = require('progress');

var bar = new ProgressBar('[:bar] :percent :etas', { total: 10, width: 30 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);