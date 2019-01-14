var client = new QRClient();

onmessage = function (e) {
  const {imageData} = e.data;

  client.decode(imageData, postMessage);
};

var QRClient = function () {

  var currentCallback;

  this.decode = function (imageData, callback) {
    try {
      var width = imageData.width;
      var height = imageData.height;
      var result = qrcode.decode(width, height, imageData);
      callback(result);
    } catch (e) {
      // consume the error.
      console.log(e);
      callback(undefined);
    }
  };
};
