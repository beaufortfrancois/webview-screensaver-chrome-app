var webview = document.querySelector('webview');
var castFix = '* { background-size: cover !important } ' +
              'body { height: 100% !important; width: 100% !important }';

webview.addEventListener('loadstop', function() {
  webview.insertCSS({ code: castFix }, function() {    
    chrome.app.window.current().show();
    chrome.app.window.current().fullscreen();
    document.body.addEventListener('mouseup', function() {
      chrome.app.window.current().close();
    });
  });
});
