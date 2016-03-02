
var newImg;

function showTwitterBtn(){
    var postTwBtn = document.getElementById('postOnTwitterBtn');
    postTwBtn.style.visibility = 'visible';
    
}

function showDivIfPhoto(imageURI){
    var img = document.getElementById('showDivIfPhoto');
    img.style.visibility = 'visible';
    
    newImg = imageURI;
}

function postOnTwitter(){
    window.plugins.socialsharing.shareViaTwitter('Add a comment here', newImg, null, null);
    
}
