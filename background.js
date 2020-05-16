chrome.commands.onCommand.addListener(function(command) {
  if (command=="capture-page") {
    chrome.tabs.executeScript(undefined, {file: 'capturePage.js'});
  }
  if (command=="capture-quote") {
    chrome.tabs.executeScript(undefined, {file: 'captureQuote.js'});
  }
});