
var newImg;

function showTwitterBtn(){
  var postTwBtn = document.getElementById('postOnTwitterBtn');
  postTwBtn.style.visibility = 'visible';
}

function showSaveBtn(imageURI){
    var img = document.getElementById('saveImg');
    img.style.visibility = 'visible';
    
    newImg = imageURI;

}

function saveImg(){
    window.plugins.socialsharing.saveToPhotoAlbum(
        ['https://www.google.nl/images/srpr/logo4w.png','www/image.gif'],
        onSuccess, // optional success function
        onError    // optional error function
    );
    alert("ok, saved");
}
