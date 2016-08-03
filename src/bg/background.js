chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    file: 'src/content-script/content_script.js'
  });

  chrome.tabs.insertCSS(null, {
    file: "src/content-script/content_script.css"
  });
});
