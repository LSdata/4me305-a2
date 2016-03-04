
    var pictureSource;  
    var destinationType; // sets the format of returned value 
    
    // Wait for PhoneGap to connect with the device
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap is ready to be used
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    
    // Called when a photo is successfully retrieved
    function onPhotoDataSuccess(imageData) {
        console.log(imageData);

      // Get image handle
      var image = document.getElementById('uploadedPhoto');

      // Unhide image elements
      image.style.display = 'block';

      // Show the captured photo
        //image.src = "data:image/jpeg;base64," + imageData; //the image file in base64
        image.src = imageData;

        //showTwitterBtn(imageData);
        showDivIfPhoto(imageData);

    }
    // Called when a photo is retrieved
    function onPhotoURISuccess(imageURI) {
        console.log(imageURI);

        // Get image handle
        var image = document.getElementById('uploadedPhoto');

        // Unhide image elements
        image.style.display = 'block';
        image.src = imageURI;

        //showTwitterBtn(imageURI);
        showDivIfPhoto(imageURI);

    }

    // called from button. A new photo can be captured and saves in base64/png.
    function capturePhotoWithDataUrl() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, 
            destinationType: Camera.DestinationType.FILE_URI,//DATA_URL
            saveToPhotoAlbum: true
        });
    }
    
    // called from button. Gets photo from the phone photo library. source: PHOTOLIBRARY
    function getPhoto(source) {

      // Retrieve image file location from specified source parameter PHOTOLIBRARY
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source,
        });
    }

    // Called if something bad happens
    function onFail(message) {
      //alert('Failed because: ' + message);//for example when nothing is selected, no alert
    }



