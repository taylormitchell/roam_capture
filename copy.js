// Helper functions
tag_user_in_tweet = function(tweet) {
    return tweet.replace(/^(\(\d*\))?\s?(.*) on Twitter: (".*") \/ Twitter/,"[[$2]] on Twitter: $3")
};
add_source_as_child = function(text, src) {
    return `- ${text}\n  - source:: ${src}`
}
remove_newlines = function(text) {
    return text.replace(/\s*\n\s*/g, " ");
}
remove_start_end_whitespace = function(text) {
    var new_text = text.replace(/^\s+/, "");
    new_text = new_text.replace(/\s+$/, "");
    return new_text
}

// Get web content and roamify
var base_url = window.location.origin;
var url = document.URL;
var title = document.title;
var selection = document.getSelection().toString();

// Page
if (selection==="") {
    // Tweet 
    if (base_url==="https://twitter.com") {
        selection = tag_user_in_tweet(title) + " #Quote #Tweet";
        selection = add_source_as_child(selection, url)
    // Amazon
    } else if (base_url==="https://www.amazon.com") {
        var alias = document.querySelector("#productTitle").textContent;
        alias = remove_newlines(alias);
        alias = remove_start_end_whitespace(alias);
        selection = `[${alias}](${url})`;
    // Generic web page
    } else {
        var title_no_square_brackets = title.replace(/\[(.*)\]/,"($1)");
        selection = `[${title_no_square_brackets}](${url})`;
    }
// Selection
} else {
    // Kindle
    if (document.URL==="https://read.amazon.com/notebook") {
        var book_title = document.querySelector("h2").textContent;
        selection = `"${selection}" #Quote`;
        selection = add_source_as_child(selection, `[[${book_title}]]`);
    // Everything else
    } else {
        selection = remove_newlines(selection);
        selection = `"${selection}" #Quote`;
        selection = add_source_as_child(selection, url);
    }
}

// Copy the above to the clipboard
//source:: https://stackoverflow.com/a/18455088

//Create area for the text
var copyFrom = document.createElement("textarea");
document.body.appendChild(copyFrom);
//Add the text string to the text area and copy it
copyFrom.textContent = selection;
copyFrom.select();
document.execCommand('copy');
// Clean up
copyFrom.blur();
document.body.removeChild(copyFrom);
