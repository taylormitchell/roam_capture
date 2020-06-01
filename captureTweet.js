

function tagify(tweet) {
    return tweet.replace(/^(\(\d*\))?\s?(.*) on Twitter: (".*") \/ Twitter/,"[[$2]] on Twitter: $3");
}

function add_tags(tweet, tags=["#Quote", "#Tweet"]) {
    return tweet + " " + tags.join(" ")
}

function add_source_as_child(tweet, url) {
    return `- ${tweet}\n  - ${url}`
}

function roamify(tweet, url) {
    tweet = tagify(tweet);
    tweet = add_tags(tweet);
    tweet = add_source_as_child(tweet, url);
    return tweet
}


tweet=`(2) Lulie on Twitter: "The fun criterion makes more sense if you also have the ideas like: - Fun-seeking is a creative process. - Your first guesses about what's fun may well be mistaken. - Fun isn't the same as mollifying yourself. (Fun is more like play, mischief.)" / Twitter`;
url=`https://twitter.com/reasonisfun/status/1267209748384034818`
console.log(roamify(tweet, url))

// with bracket numbers
content='(2) Visakan Veerasamy on Twitter: "something something" / Twitter';
res = roamify(content);
console.log(res);

// no bracket numbers
content='Visakan Veerasamy on Twitter: "something something" / Twitter';
res = roamify(content);
console.log(res);

string = `(2) Visakan Veerasamy on Twitter: "Visa’s rules for life (draft) 1. recognise when u get ur ass kicked, &amp; accept it with grace 2. if u *have* to kick someone’s ass, be swift, don’t be a dick about it 3. if u can save an innocent ass from being kicked, do so 4. remember, life kicks everybody’s ass in the end" / Twitter`
res = roamify(string);
console.log(res);


res = "- "+res+"\n  - something something"
console.log(res);


string = "soomething somehgin"
console.log(add_tags(string))

string = "soomething somehgin"
console.log(add_source_as_child("here's a tweet", "www.url.com"))


