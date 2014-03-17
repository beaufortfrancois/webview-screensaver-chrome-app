var webview = document.querySelector('webview');
var castFix = '* { background-size: cover !important } ' +
              'body { height: 100% !important; width: 100% !important }';

webview.addEventListener('loadstop', function() {
  webview.insertCSS({ code: castFix }, function() {    
    document.body.addEventListener('mousemove', function() {  
      chrome.app.window.current().close();
    });
  });
});