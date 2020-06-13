chrome.commands.onCommand.addListener(function(command) {
  if (command=="copy-page") {
    chrome.tabs.executeScript(undefined, {file: 'copyPage.js'});
  }
  if (command=="copy") {
    chrome.tabs.executeScript(undefined, {file: 'copy.js'});
  }
});