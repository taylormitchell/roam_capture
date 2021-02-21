var captureTweet = require('./captureTweet');

function test_tag_user() {
    tweet = '(2) Visakan Veerasamy on Twitter: "something something" / Twitter';
    a = captureTweet.tag_user(tweet);
    b = '[[Visakan Veerasamy]] on Twitter: "something something"';
    console.log("test_tag_user: ", a === b);
}

function test_add_tags() {
    string = '[[Visakan Veerasamy]] on Twitter: "something something"';
    a = captureTweet.add_tags(string, tags=["#Quote", "#Tweet"]);
    b = '[[Visakan Veerasamy]] on Twitter: "something something" #Quote #Tweet';
    console.log("test_add_tags: ", a === b);
}

test_tag_user()
test_add_tags()


var base_url = "https://twitter.com";
if (base_url==="https://twitter.com" && true===true) {
    console.log("derp")
}