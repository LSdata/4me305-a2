

function showTwitterBtn(){
  var postTwBtn = document.getElementById('postOnTwitterBtn');
  postTwBtn.style.visibility = 'visible';
}

function postOnTwitter(){
var message = {
    text: "This is a test message",
    activityTypes: ["PostToFacebook", "PostToTwitter"]
};
window.socialmessage.send(message);
console.log("postOnTwitter fired");

}