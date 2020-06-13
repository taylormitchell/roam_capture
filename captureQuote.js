// Helper functions
tag_user = function(tweet) {
    return tweet.replace(/^(\(\d*\))?\s?(.*) on Twitter: (".*") \/ Twitter/,"[[$2]] on Twitter: $3");
};
add_tags =  function(tweet, tags=["#Quote", "#Tweet"]) {
    return tweet + " " + tags.join(" ")
}
add_source_as_child = function(tweet, url) {
    return `- ${tweet}\n  - source:: ${url}`
}
roamify = function(tweet, url) {
    tweet = tag_user(tweet);
    tweet = add_tags(tweet);
    tweet = add_source_as_child(tweet, url);
    return tweet
}

//source:: https://stackoverflow.com/a/18455088

//Create area for the text
var copyFrom = document.createElement("textarea");
document.body.appendChild(copyFrom);

//Create the text string you want to copy
var base_url = window.location.origin;
var selection = document.getSelection().toString();

if (base_url==="https://twitter.com" && selection==="") {
    var tweet = document.title;
    var url = document.URL;
    var text = roamify(tweet, url);
} else if (document.URL==="https://read.amazon.com/notebook") {
    var book_title = document.querySelector("h2").textContent;
    var text = `"${selection}" #Quote #[[[[source]]:[[${book_title}]]]]`;
} else {
    var text = `"${selection}" #Quote #[[[[source]]:${document.URL}]]`;
}

//Add the text string to the text area and copy it
copyFrom.textContent = text;
copyFrom.select();
document.execCommand('copy');

// Clean up
copyFrom.blur();
document.body.removeChild(copyFrom);
