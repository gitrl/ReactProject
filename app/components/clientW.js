(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      console.log(docEl.clientWidth);
      var clientWidth = docEl.clientWidth;
      if(!clientWidth) return;
      docEl.style.fontSize = 8 * (clientWidth / 320) + 'px';
    };
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
