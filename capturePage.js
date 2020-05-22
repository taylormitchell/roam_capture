//source:: https://stackoverflow.com/a/18455088

//Create area for the text
var copyFrom = document.createElement("textarea");
document.body.appendChild(copyFrom);

//Create the text string you want to copy
var text = `[${document.title.replace(/\[(.*)\]/,"($1)")}](${document.URL})`;

//Add the text string to the text area and copy it
copyFrom.textContent = text;
copyFrom.select();
document.execCommand('copy');

// Clean up
copyFrom.blur();
document.body.removeChild(copyFrom);