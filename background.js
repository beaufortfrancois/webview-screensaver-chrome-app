function showWindows() {
  chrome.system.display.getInfo(function(displayInfo) {
    displayInfo.forEach(function(display) {
      chrome.app.window.create('window.html',
          {state: 'fullscreen', bounds: display.bounds});
    });
  });
}

function onIdleStateChanged(state) {
  if (state === 'idle') {
    showWindows();
  } else {
    chrome.app.window.getAll().forEach(function(window) {
      window.close();
    });
  }
}

chrome.idle.setDetectionInterval(60);
chrome.idle.onStateChanged.addListener(onIdleStateChanged);

chrome.app.runtime.onLaunched.addListener(showWindows);